import { FaTrain, FaExchangeAlt, FaTree, FaChartLine, FaShoppingCart, FaDraftingCompass, FaWater, FaCouch } from 'react-icons/fa';

export const siteContents = {
  meta: {
    title: "상도 힐스 더원 - 동작의 마지막 6억원대 10년 장기전세아파트",
    description: "7호선 상도역, 서부선 신상도역 더블 역세권. 강남, 여의도, 용산 20분대 접근. 복층형 특화설계와 풀퍼니시드 시스템을 갖춘 상도 힐스 더원의 분양 정보를 확인하세요.",
    ogTitle: "상도 힐스 더원",
    ogDescription: "동작의 마지막 6억원대, 10년 장기전세아파트",
    ogUrl: "https://qtlab.shop/sample01/",
  },
  header: {
    logoAlt: "(대표) 상도 힐스 더원 로고",
    navLinks: [
      { href: "#premium", text: "프리미엄" },
      { href: "#location", text: "입지환경" },
      { href: "#flats", text: "타입안내" },
      { href: "#gallery", text: "갤러리" },
      { href: "#contact", text: "상담신청" },
    ],
  },
  hero: {
    subHeading: "분양전환형 10년 장기전세아파트<br />동작의 마지막 6억원대",
    mainHeading: ["서울의 ", "퍼스트", "동작의 ", "라스트"],
    pollImageAlt: "7호선 상도역, 서부선 신상도역 역세권",
  },
  premium: {
    title: "PREMIUM",
    mainImageAlt: "상도 힐스 더원 프리미엄 조감도",
    items: [
      { id: 1, icon: <FaTrain />, title: "초역세권", text: "7호선 상도역" },
      { id: 2, icon: <FaExchangeAlt />, title: "더블 역세권", text: "서부선 예정" },
      { id: 3, icon: <FaTree />, title: "숲세권", text: "상도 근린공원" },
      { id: 4, icon: <FaChartLine />, title: "개발호재", text: "장승배기 종합행정타운" },
      { id: 5, icon: <FaShoppingCart />, title: "풍부한 생활 인프라", text: "반경 1km 내" },
      { id: 6, icon: <FaDraftingCompass />, title: "특화 설계", text: "복층형 구조" },
      { id: 7, icon: <FaWater />, title: "한강 조망권", text: "일부 호실" },
      { id: 8, icon: <FaCouch />, title: "풀퍼니시드", text: "빌트인 시스템" },
    ],
  },
  location: {
    title: "LOCATION",
    description: "서울의 중심에서 누리는 교통, 교육, 생활의 완벽한 입지",
    mapImageAlt: "상도 힐스 더원 위치 지도",
    sections: [
      { 
        title: "교통의 중심", 
        items: [
          "7호선 상도역, 장승배기역과 서부선(예정) 더블역세권",
          "강남, 여의도, 용산 등 서울 주요 도심 20분대 접근",
        ] 
      },
      { 
        title: "교육의 중심", 
        items: [
          "상도초, 장승중, 성남고 등 다수의 초중고 인접",
          "중앙대, 숭실대, 서울대 등 명문대 밀집 지역",
        ] 
      },
      { 
        title: "생활의 중심", 
        items: [
          "롯데백화점, 이마트, 중앙대병원 등 풍부한 편의시설",
          "상도근린공원, 용마산, 국사봉 등 쾌적한 자연환경",
        ] 
      },
    ],
    advantages: [
      { id: 1, title: '입지환경 1', heading: '새로운 주거타운 형성', description: '2025년 6월 예정인 장승배기 종합행정타운과 상도14·15구역과 모아타운 개발로 생활편의성 및 주거환경 개선 기대' },
      { id: 2, title: '입지환경 2', heading: '뛰어난 교통 접근성', description: '2030년 개통 예정인 신상도역(예정) 초역세권, 7호선 상도역 도보 500m 거리로 서울-경기권 이동이 편리한 교통 인프라' },
      { id: 3, title: '입지환경 3', heading: '우수한 교육 환경', description: '단지 앞 상도초 및 도보 이동가능한 초·중·고 학군, 중앙대, 숭실대 등 명문 사립대학교 인근에 위치, 동작도서관, 국사봉도서관 등 우수한 교육환경' },
      { id: 4, title: '입지환경 4', heading: '다양한 생활 인프라', description: '롯데백화점 관악점, 롯데시네마 신림점, 이마트 여의도점 인근에 위치, 서울대보라매병원, 중앙대병원 등 의료시설이 가까이 위치해 높은 생활의 질' },
      { id: 5, title: '입지환경 5', heading: '자연친화적 주거환경', description: '한강과 인접한 우수한 경관지역으로 단지 인상도근린공원, 국사봉공원, 보라매공원 등 단지 인근에 위치' },
      { id: 6, title: '입지환경 6', heading: '프리미엄 특화 설계', description: '생활의 가치를 높이는 혁신적인 평면과 고품격 마감재, 풀퍼니시드 시스템으로 완성된 주거 공간' },
    ],
  },
  flats: {
    title: "FLATS",
    description: "라이프스타일에 맞춰 선택하는<br />총 459세대 다양한 타입의 평면",
    items: [
      { id: 1, altText: "A타입 평면도", type: "A-type", area: "전용 59㎡" },
      { id: 2, altText: "B타입 평면도", type: "B-type", area: "전용 71㎡" },
      { id: 3, altText: "C-type 평면도", type: "C-type", area: "전용 84㎡" },
    ],
  },
  gallery: {
    title: "GALLERY",
    description: "상도 힐스 더원의 하이엔드 인테리어를 미리 만나보세요",
    imageAltTemplate: "갤러리 이미지",
  },
  contact: {
    title: "상담신청",
    description: "상도 힐스 더원에 대해 궁금한 점이 있으신가요?<br />전문 상담사가 신속하게 안내해 드립니다.",
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
      submitButton: "상담신청",
      submittingButton: "전송 중...",
    },
    privacyPolicy: {
      title: "개인정보 수집 및 이용 안내",
      item1: "1. 수집하는 개인정보 항목: 이름, 연락처",
      item2: "2. 수집 및 이용 목적: 분양 상담 및 안내, 마케팅 활용",
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
  footerContent: {
    logoAlt: "하단 로고",
    siteName: "상도 힐스 더원",
    address: "서울시 동작구 상도동 154-8",
    agencyInfo: "신탁사 : 무궁화신탁 | 시공사 : 1군 메이저 건설사(예정) | 시행사 : (주) 예도산업개발 | 대행사 : (주) 구담",
    centeredNotice: "관리자 : 태양기획  | 사업자번호 : 290-02-03088 |  문의 : 1666-8682",
  },
  footer: {
    notice1: "※ 본 홈페이지에 사용된 CG, 이미지 및 내용은 소비자의 이해를 돕기 위한 것으로 실제와 차이가 있을 수 있습니다.",
    notice2: "※ 자세한 내용 및 의문사항은 모델하우스에 방문하시어 직접 확인하시기 바랍니다.",
    copyright: "COPYRIGHT © 상도 힐스 더원. ALL RIGHTS RESERVED.",
  },
  floating: {
    call: "분양문의",
    callIconAlt: "전화 아이콘",
    callNumber: "1666-8682",
    reservation: "상담 신청",
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
  popup: {
    imageAlt: "팝업 안내",
    buttonText: "상담신청 바로가기",
    dontShowToday: "오늘 하루 보지 않기",
  }
};