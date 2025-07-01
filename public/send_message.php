<?php

// ===== 디버깅을 위한 에러 표시 코드 (문제 해결 후 삭제) =====
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
// ===== 디버깅 코드 끝 =====

// 파일명: send_message.php

header('Content-Type: application/json; charset=UTF-8');
// 파일명: send_message.php

header('Content-Type: application/json; charset=UTF-8');

// --- 설정 부분 (기존 send_sms.php와 동일하게 유지) ---
$munja_remote_id = "cruxknight"; // 문자세상 회원 아이디
$munja_remote_pass = "C5j9LC9pk!Ya3UM"; // 문자세상 회원 패스워드
$munja_remote_callback = "01024356344"; // 사전 등록된 발신번호
$admin_phone_number = "01048245900"; // 알림을 받을 관리자 휴대폰 번호
// --- 설정 부분 끝 ---

// 설정값 유효성 검사
if (empty($munja_remote_id) || empty($munja_remote_pass) || empty($munja_remote_callback) || empty($admin_phone_number)) {
    echo json_encode([
        "success" => false,
        "message" => "PHP 서버 설정 오류: 문자 발송 연동 정보가 올바르게 설정되지 않았습니다. send_message.php 파일의 설정 부분을 확인해주세요."
    ]);
    exit;
}

$response_array = [
    "success" => false,
    "message" => "요청 처리 중 오류가 발생했습니다."
];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // SmsPopup 컴포넌트에서 보낸 데이터 'Message', 'Mobile'을 받습니다.
    $message = isset($_POST['Message']) ? trim($_POST['Message']) : '';
    $mobile = isset($_POST['Mobile']) ? trim($_POST['Mobile']) : '';

    // 기본 유효성 검사
    if (empty($message)) {
        $response_array["message"] = "메시지 내용을 입력해주세요.";
        echo json_encode($response_array);
        exit;
    }
    if (!preg_match("/^\d{10,11}$/", preg_replace("/[^0-9]/", "", $mobile))) {
        $response_array["message"] = "올바른 형식의 연락처를 입력해주세요. (예: 01012345678)";
        echo json_encode($response_array);
        exit;
    }

    // 관리자에게 발송될 문자 메시지 내용 구성
    $sms_content_lines = [];
    $sms_content_lines[] = "[상도 힐스더원 문자상담]";
    $sms_content_lines[] = "발신: " . $mobile;
    $sms_content_lines[] = "내용: " . $message;
    $sms_message_to_admin = implode("\n", $sms_content_lines);

    // "문자세상" API 파라미터 준비 (send_sms.php와 거의 동일)
    $api_params = [
        'remote_id' => $munja_remote_id,
        'remote_pass' => $munja_remote_pass,
        'remote_num' => '1',
        'remote_reserve' => '0',
        'remote_phone' => $admin_phone_number,
        'remote_callback' => $munja_remote_callback,
    ];

    // 메시지 길이(바이트) 계산
    $temp_euckr = iconv("UTF-8", "EUC-KR//IGNORE", $sms_message_to_admin);
    $byte_length = strlen($temp_euckr);

    $munja_api_url = "";
    if ($byte_length <= 90) { // SMS
        $api_params['remote_msg'] = $sms_message_to_admin;
        $munja_api_url = "https://www.sms010.co.kr/Remote/RemoteSms.html";
    } else { // LMS
        $lms_subject = "[상도 힐스더원] 문자상담";
        $api_params['remote_subject'] = $lms_subject;
        $api_params['remote_msg'] = $sms_message_to_admin;
        $munja_api_url = "https://www.sms010.co.kr/Remote/RemoteMms.html";
    }

    // cURL 실행
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $munja_api_url);
    curl_setopt($curl, CURLOPT_POST, true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, http_build_query($api_params, '', '&'));
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_CONNECTTIMEOUT, 10);
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);

    $munja_api_response_raw = curl_exec($curl);
    $curl_error_msg = curl_error($curl);
    curl_close($curl);

    if ($munja_api_response_raw === false) {
        $response_array["message"] = "문자 발송 API 연동 중 오류가 발생했습니다. (cURL Error: " . $curl_error_msg . ")";
    } else {
        $response_parts = explode("|", $munja_api_response_raw);
        $result_code = isset($response_parts[0]) ? trim($response_parts[0]) : "PARSE_ERR";

        if ($result_code === "0000") {
            $response_array["success"] = true;
            $response_array["message"] = "메세지가 성공적으로 전송되었습니다.";
        } else {
            $response_array["message"] = "문자 발송에 실패했습니다. (오류코드: " . $result_code . ")";
        }
    }
} else {
    $response_array["message"] = "잘못된 요청입니다. (POST 방식 필요)";
}

echo json_encode($response_array);
?>