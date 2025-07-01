<?php
// 파일명: send_sms.php

header('Content-Type: application/json; charset=UTF-8');

// --- 설정 부분 ---
// TODO: 아래 변수들의 값을 실제 운영 환경에 맞게 수정해주세요.
$munja_remote_id = "cruxknight"; // 문자세상 회원 아이디
$munja_remote_pass = "C5j9LC9pk!Ya3UM"; // 문자세상 회원 패스워드
$munja_remote_callback = "01024356344"; // 사전 등록된 발신번호 (숫자만, 예: "01012345678")
$admin_phone_number = "01048245900"; // 신청 알림을 받을 관리자/담당자 휴대폰 번호 (예: "01098765432")
// --- 설정 부분 끝 ---


// 설정값 유효성 검사
if (empty($munja_remote_id) || $munja_remote_id === "YOUR_SMS010_ID" ||
    empty($munja_remote_pass) || $munja_remote_pass === "YOUR_SMS010_PASSWORD" ||
    empty($munja_remote_callback) || $munja_remote_callback === "YOUR_REGISTERED_CALLBACK_NUMBER" ||
    empty($admin_phone_number) || $admin_phone_number === "ADMIN_PHONE_NUMBER_TO_RECEIVE_SMS") {

    echo json_encode([
        "success" => false,
        "message" => "PHP 서버 설정 오류: 문자 발송 연동 정보가 올바르게 설정되지 않았습니다. send_sms.php 파일의 설정 부분을 확인해주세요.",
        "munja_code" => "CFG_ERR",
        "munja_msg" => "Configuration Error"
    ]);
    exit;
}

$response_array = [
    "success" => false,
    "message" => "요청 처리 중 오류가 발생했습니다.",
    "munja_code" => "",
    "munja_msg" => ""
];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = isset($_POST['Name']) ? trim($_POST['Name']) : '';
    $mobile = isset($_POST['Mobile']) ? trim($_POST['Mobile']) : '';
    $visit_day = isset($_POST['Visit_Day']) && !empty(trim($_POST['Visit_Day'])) ? trim($_POST['Visit_Day']) : '미지정';
    $visit_time = isset($_POST['Visit_Time']) && $_POST['Visit_Time'] !== '시간선택없음' ? trim($_POST['Visit_Time']) : '미지정';
    $agree_yn = isset($_POST['AgreeYN']) ? $_POST['AgreeYN'] : '';

    // 기본 유효성 검사
    if (empty($name)) {
        $response_array["message"] = "성명을 입력해주세요.";
        echo json_encode($response_array);
        exit;
    }
    if (empty($mobile)) {
        $response_array["message"] = "연락처를 입력해주세요.";
        echo json_encode($response_array);
        exit;
    }
    if (!preg_match("/^\d{10,11}$/", preg_replace("/[^0-9]/", "", $mobile))) {
        $response_array["message"] = "올바른 형식의 연락처를 입력해주세요. (예: 01012345678)";
        echo json_encode($response_array);
        exit;
    }
    if ($agree_yn !== 'Y') {
        $response_array["message"] = "개인정보 수집 및 이용에 동의해주세요.";
        echo json_encode($response_array);
        exit;
    }

    // 관리자에게 발송될 문자 메시지 내용 구성
    $customer_mobile_formatted = preg_replace("/[^0-9]/", "", $mobile); // 숫자만 추출

    $sms_content_lines = [];
    $sms_content_lines[] = "[상도 힐스더원 관심고객]";
    $sms_content_lines[] = "성명: " . $name;
    $sms_content_lines[] = "연락처: " . $customer_mobile_formatted;
    if ($visit_day !== '미지정') {
        $sms_content_lines[] = "방문일: " . $visit_day;
    }
    if ($visit_time !== '미지정') {
        $sms_content_lines[] = "방문시간: " . $visit_time;
    }
    $sms_message_to_admin = implode("\n", $sms_content_lines);

    // "문자세상" API 파라미터 준비
    $api_params = [
        'remote_id' => $munja_remote_id,
        'remote_pass' => $munja_remote_pass,
        'remote_num' => '1', // 관리자 1명에게 발송
        'remote_reserve' => '0', // 0: 즉시전송
        'remote_phone' => $admin_phone_number, // SMS 수신할 관리자 번호
        'remote_callback' => $munja_remote_callback, // 발신자 번호 (사전등록된 번호)
    ];

    // 메시지 길이(바이트) 계산 (EUC-KR 기준)
    $temp_euckr = iconv("UTF-8", "EUC-KR//IGNORE", $sms_message_to_admin);
    $byte_length = strlen($temp_euckr);

    $munja_api_url = "";
    if ($byte_length <= 90) { // SMS
        $api_params['remote_msg'] = $sms_message_to_admin;
        $munja_api_url = "https://www.sms010.co.kr/Remote/RemoteSms.html"; // SMS 전송 주소
    } else { // LMS (또는 MMS, 여기서는 LMS로 처리)
        $lms_subject = "[상도 힐스더원] 문의"; // LMS 제목
        $api_params['remote_subject'] = $lms_subject;
        $api_params['remote_msg'] = $sms_message_to_admin;
        $munja_api_url = "https://www.sms010.co.kr/Remote/RemoteMms.html"; // LMS/MMS 전송 주소
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
    $curl_error_no = curl_errno($curl);
    curl_close($curl);

    if ($munja_api_response_raw === false) {
        $response_array["message"] = "문자 발송 API 연동 중 오류가 발생했습니다. (cURL Error: " . $curl_error_no . " - " . $curl_error_msg . ")";
        $response_array["munja_code"] = "CURL_ERR";
        $response_array["munja_msg"] = $curl_error_msg;
    } else {
        // 응답 문자열 파싱
        $response_parts = explode("|", $munja_api_response_raw);

        $response_array["munja_code"] = isset($response_parts[0]) ? trim($response_parts[0]) : "PARSE_ERR";
        $response_array["munja_msg"] = isset($response_parts[1]) ? trim($response_parts[1]) : "응답 메시지 없음";

        if ($response_array["munja_code"] === "0000" || strpos($response_array["munja_msg"], "성공") !== false) {
            $response_array["success"] = true;
            $response_array["message"] = "신청이 성공적으로 접수되었습니다. 담당자가 곧 연락드릴 예정입니다.";
        } else {
            // 실패 시 메시지 구성
            $error_message_map = [
                "0001" => "접속에러",
                "0002" => "인증에러 (아이디 또는 비밀번호 확인)",
                "0003" => "잔여콜수 없음",
                "0004" => "메시지 형식에러",
                "0005" => "콜백번호(발신번호) 에러",
                "0006" => "수신번호 개수 에러",
                "0008" => "잔여콜수 부족",
                "0009" => "전송실패 (시스템 오류)",
                "0012" => "메시지 길이오류 (2000바이트 초과)",
                "0030" => "발신번호 사전등록 미등록",
                "0033" => "발신번호 형식에러",
                "9999" => "요금미납"
            ];
            $response_array["message"] = "신청 접수 중 오류가 발생했습니다. ";
            if (array_key_exists($response_array["munja_code"], $error_message_map)) {
                $response_array["message"] .= "(" . $error_message_map[$response_array["munja_code"]] . ")";
            } else {
                $response_array["message"] .= "오류코드: " . $response_array["munja_code"];
            }
             $response_array["message"] .= " - API 메시지: " . $response_array["munja_msg"];
        }
    }
} else {
    $response_array["message"] = "잘못된 요청입니다. (POST 방식 필요)";
    $response_array["munja_code"] = "REQ_ERR";
}

echo json_encode($response_array);
?>