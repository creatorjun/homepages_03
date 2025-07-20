// src/data/contents.jsx

import { FaTrain, FaExchangeAlt, FaTree, FaChartLine, FaBuilding, FaCar, FaWifi, FaStore } from 'react-icons/fa';

export const siteContents = {
  // META 태그 정보 수정
  meta: {
    title: "성수 드림빌드 지식산업센터 - 성수의 비전과 가치를 담은 비즈니스 DREAM스페이스",
    description: "성수역 바로 앞, 서울 주요 업무지구와 2호선으로 연결되는 초역세권.",
    ogTitle: "성수 드림빌드 지식산업센터",
    ogDescription: "성수의 비전과 가치를 담은 비즈니스 DREAM스페이스",
    ogUrl: "https://dreambuild-sungsu.shop/",
  },

  // HEADER 메뉴 수정
  header: {
    logoAlt: "성수 드림빌드 지식산업센터 로고",
    navLinks: [
      { href: "/premium", text: "프리미엄" },
      { href: "/location", text: "입지환경" },
      { href: "/flats", text: "평면안내" },
      { href: "/gallery", text: "갤러리" },
      { href: "/contact", text: "분양문의" },
    ],
  },

  // HERO 섹션 수정
  hero: {
    subHeading: "성수역 바로 앞 | 시공초월 역세권",
    mainHeading: ["성수의 비전과 가치를 담은", "DREAM 스페이스"],
  },

  // PREMIUM 섹션 수정
  premium: {
    title: "PREMIUM",
    mainImageAlt: "성수 드림빌드 1층 공개공지 전경",
    items: [
        { id: 1, icon: <FaExchangeAlt />, title: "시공초월 역세권", text: "성수역 바로 앞" },
        { id: 2, icon: <FaTree />, title: "쾌적한 업무 환경", text: "쉼이 가능한 옥상정원" },
        { id: 3, icon: <FaBuilding />, title: "효율적인 특화설계", text: "개방감 극대화한 높은 층고(최대 5.4m)" },
        { id: 4, icon: <FaCar />, title: "넉넉한 주차 시스템", text: "법정대비 193% 주차 공간 확보" },
        { id: 5, icon: <FaWifi />, title: "편리한 인프라", text: "1층 공개공지 및 무료 와이파이 제공" },
        { id: 6, icon: <FaStore />, title: "핫플레이스 상가", text: "다채롭고 트랜디한 MD 구성의 상가" },
    ],
  },

  // LOCATION 섹션 수정
  location: {
    title: "LOCATION",
    description: "창조 비즈니스 클러스터의 거점, 성수 프리미엄 최중심",
    mapImageAlt: "성수 드림빌드 위치 지도",
    sections: [
        { 
          title: "2호선 성수역 초역세권", 
          items: [
            "성수역 도보 2분거리, 비즈니스 인프라와 프리미엄 교통망이 한 곳으로 집중되는 입지",
          ] 
        },
        { 
          title: "서울 3개 업무지구와 쾌속 연결", 
          items: [
            "도심(CBD/20분대), 여의도(YBD/30분대), 강남(GBD/20분대)을 연결하는 쾌속 교통",
          ] 
        },
        { 
          title: "성수동 미래비전", 
          items: [
            "고급 주거타운, 국제교류복합지구, 첨단 산업단지 등 풍부한 개발호재",
          ] 
        },
        { 
            title: "쾌적한 자연, 업무 환경", 
            items: [
              "서울숲 공원, 한강, 중랑천 등 서울 최대 규모 수준의 녹지 공간 에코 힐링",
            ] 
          },
    ],
    advantages: [], // advantages 데이터는 location.sections로 대체되었으므로 비워둡니다.
  },

  // FLATS 섹션 수정
  flats: {
    title: "FLOOR PLAN",
    description: "업무 효율성과 경쟁력을 높이는 혁신 공간설계",
    items: [
      { id: 1, altText: "지식산업센터 평면도", type: "지식산업센터(5~13F)", area: "타입별 면적 상이" },
      { id: 2, altText: "근린생활시설 평면도", type: "근린생활시설(1~4F, 14~15F)", area: "타입별 면적 상이" },
    ],
  },

  // GALLERY 섹션 수정
  gallery: {
    title: "GALLERY",
    description: "성수 드림빌드 지식산업센터의 모습을 미리 만나보세요",
    imageAltTemplate: "성수 드림빌드 갤러리 이미지",
  },
  
  // CONTACT 섹션 수정
  contact: {
    title: "입주 및 분양 문의",
    description: "성수 드림빌드에 대해 궁금한 점이 있으신가요?<br />전문 상담사가 신속하게 안내해 드립니다.",
    form: {
      name: "이름",
      namePlaceholder: "이름을 입력하세요",
      phone: "연락처",
      phonePlaceholder: "'-' 없이 숫자만 입력",
      visitDate: "방문 희망일",
      visitDatePlaceholder: "방문 희망일을 선택하세요",
      agree: "개인정보 수집 및 이용 동의",
      detailsToggleOpen: "[내용 닫기]",
      detailsToggleClose: "[내용 보기]",
      submitButton: "문의 신청",
      submittingButton: "전송 중...",
    },
    privacyPolicy: {
        title: "개인정보 수집 및 이용 안내",
        item1: "1. 수집하는 개인정보 항목: 이름, 연락처",
        item2: "2. 수집 및 이용 목적: 입주 및 분양 상담, 안내, 마케팅 활용",
        item3: "3. 보유 및 이용 기간: 수집일로부터 1년 (고객 동의 철회 시 즉시 파기)",
      },
    alerts: {
      nameRequired: "이름을 입력해주세요.",
      phoneRequired: "연락처를 입력해주세요.",
      visitDateRequired: "방문 희망일을 선택해주세요.",
      agreeRequired: "개인정보 수집 및 이용에 동의해주세요.",
      networkError: "네트워크 오류 또는 서버 응답에 문제가 발생했습니다. 확인 후 다시 시도해주세요.",
    },
  },

  // FOOTER CONTENT 수정
  footerContent: {
    logoAlt: "성수 드림빌드 하단 로고",
    siteName: "성수 드림빌드 지식산업센터",
    address: "서울특별시 성동구 성수동2가 273-55",
    agencyInfo: "시행사: 드림빌드 | 시공사: (주)에이원건설, (주)한솔종합건설 | 신탁사: 신한자산신탁(주)",
    centeredNotice: "관리자 : 태양기획  | 사업자번호 : 290-02-03088 |  문의 : 1666-8682",
  },

  // FOOTER 수정 (내용 유지)
  footer: {
    notice1: "※ 본 홈페이지에 사용된 CG, 이미지 및 내용은 소비자의 이해를 돕기 위한 것으로 실제와 차이가 있을 수 있습니다.",
    notice2: "※ 자세한 내용 및 의문사항은 분양사무실에 방문하시어 직접 확인하시기 바랍니다.",
    copyright: "COPYRIGHT © 성수 드림빌드 지식산업센터. ALL RIGHTS RESERVED.",
  },

  // FLOATING BUTTONS 수정
  floating: {
    call: "분양문의",
    callIconAlt: "전화 아이콘",
    callNumber: "1666-8682",
    reservation: "문의 신청",
    showPopup: "팝업보기",
    sms: {
      title: "문자 상담",
      messageLabel: "문의내용",
      messagePlaceholder: "문의하실 내용을 입력하세요.",
      phoneLabel: "연락처",
      phonePlaceholder: "'-' 없이 숫자만 입력",
      submitButton: "전송",
      submittingButton: "전송 중...",
      toggleButton: "문자전송",
      alerts: {
        messageRequired: "메세지를 입력해주세요.",
        phoneRequired: "연락처를 입력해주세요.",
      }
    }
  },
  
  // POPUP 수정
  popup: {
    imageAlt: "성수 드림빌드 팝업 안내",
    buttonText: "입주/분양 문의하기",
    dontShowToday: "오늘 하루 보지 않기",
  }
};