export const skills = [
  {
    title: "React",
    contents: [
      "redux, redux saga, recoil 등의 상태관리 라이브러리 사용 경험이 있습니다.",
      "next.js를 활용한 SSR 개발 경험이 있습니다.",
    ],
  },
  {
    title: "Vue",
    contents: [
      "vuex 사용 경험이 있습니다.",
      "Vue2 option api와 Vue3 composition api를 사용할 수 있습니다.",
    ],
  },
  {
    title: "HTML/CSS",
    contents: [
      "웹표준을 지키려 노력합니다.",
      "SCSS 문법에 익숙합니다.",
      "styled-component, emotion을 활용할 수 있습니다.",
      "BEM 방법론을 적용할 수 있습니다.",
      "크로스 브라우징에 대응할 수 있습니다.",
      "Antd, Chakra, Tailwind 등의 css 라이브러리를 사용할 수 있습니다.",
      "keyframe을 활용한 애니메이션 기법을 활용할 수 있습니다.",
    ],
  },
  {
    title: "Javascript",
    contents: [
      "ES6+ 문법에 익숙합니다.",
      "webpack, parcel 등의 번들러 사용 경험이 있습니다.",
      "typescript를 사용할 수 있습니다.",
      "디자인 시스템과 atomic 디자인에 대한 이해도가 높습니다.",
      "Jest를 활용한 테스트코드 작성 경험이 있습니다.",
      "Storybook 작성, 빌드 및 배포 경험이 있습니다.",
    ],
  },
];

export const careers = [
  {
    title: "Naver",
    date: "2021.03.02 ~ 2021.04.09",
    about: "Glace CIC / 스마트플레이스서비스 FE 개발 인턴",
  },
  {
    title: "Megazone Cloud",
    date: "2020.11.02 ~ 2021.02.28",
    about: "CTC / CloudOne FE 개발 인턴",
  },
  {
    title: "TwentyOZ",
    date: "2020.06.29 ~ 2020.10.16",
    about: "FE 개발 인턴",
  },
];

export const activities = [
  {
    title: "멋쟁이사자처럼",
    date: "8기 운영진 (2020.03 ~ 2020.06)",
    about: "대학생 창업 IT 동아리",
  },
  {
    title: "SOPT",
    date: "26기 YB (2020.03 ~ 2020.08) / 27기 비활OB (2021.01)",
    about: "대학생 창업 IT 동아리",
  },
  {
    title: "디프만",
    date: "8기 (2020.07 ~ 2020.12) / 9기 운영진 (2021.03 ~ 2021.06)",
    about: "대학생 창업 IT 동아리",
  },
  {
    title: "우아한테크러닝",
    date: "3기 (2020.09)",
    about: "우아한형제들에서 주최한 교육 프로그램",
  },
  {
    title: "AUSG",
    date: "4기 (2020.09 ~ )",
    about: "AWSKRUG 소속 AWS 대학생 동아리",
  },
  {
    title: "우아한테크캠프",
    date: "4기 (2021.07 ~  2021.08)",
    about: "우아한형제들에서 주최한 교육 프로그램",
  },
];

export const projects = [
  {
    title: "예약/주문 방문이력 지도 탐색",
    date: "2021.03 ~ 2021.04 (1명)",
    skills: [
      "React",
      "Typescript",
      "Next.js",
      "GraphQL",
      "Apollo",
      "Recoil",
      "Rechart",
    ],
    website:
      "https://www.notion.so/danmin20/NAVER-Glace-PPT-8b11aee3987e4742be61ce92a1769385",
    about: "네이버에서 진행한 인턴 과제",
    contents: [
      "네이버 지도 API를 활용한 POI 탐색",
      "업종/기간/지역별 필터링 기능 구현",
      "예약/주문 이력에 대한 데이터 시각화",
      "지역 기반 마커 클러스터링 구현",
      "atomic design system 기반의 컴포넌트 구현",
      "storybook을 활용한 컴포넌트 UI 테스트",
      "dynamic routing을 활용한 지도 url 공유 기능 구현",
      "chrome, safari, firefox, opera에 대한 크로스브라우징 테스트",
      "미디어쿼리를 이용한 반응형/적응형 구현",
    ],
  },
  {
    title: "SpaceONE 디자인시스템 개선",
    date: "2020.11 ~ 2021.02 (3명)",
    skills: ["Vue", "Typescript", "Storybook", "PostCSS"],
    github: "https://github.com/spaceone-dev/spaceone-design-system",
    website: "https://storybook.developer.spaceone.dev/",
    about:
      "메가존클라우드에서 개발한 SpaceONE 서비스의 디자인시스템의 storybook 개선 및 컴포넌트 개발",
    contents: [
      "기존 option api에서 Vue3 composition api으로 마이그레이션",
      "기존 atomic 시스템 기반의 스토리북 구조에서 컴포넌트 종류에 따른 구조로 변환",
      "컴포넌트 css 수정 및 기능 추가 개발",
      "typescript 마이그레이션",
      "storybook mdx 도입",
    ],
  },
  {
    title: "paceONE 프로젝트 사이트 개발",
    date: "2020.12 ~ 2021.02 (2명)",
    skills: ["React", "Next.js", "Typescript", "Sass"],
    github: "https://github.com/spaceone-dev/project-site",
    website: "https://www.spaceone.org/",
    about: "메가존클라우드에서 개발한 SpaceONE 서비스를 소개하는 웹사이트 개발",
    contents: [
      "next 기반의 SSR 웹 애플리케이션 구축",
      "BEM 방법론을 적용하여 styled components 사용",
    ],
  },
  {
    title: "SpaceONE 콘솔 뷰 개선 및 이슈 해결",
    date: "2020.12 ~ 2021.02 (4명)",
    github: "https://github.com/spaceone-dev/console",
    skills: ["Vue", "Typescript", "PostCSS", "BabelEdit"],
    about:
      "메가존클라우드에서 개발한 SpaceONE(클라우드 콘솔 서비스)에 대한 이슈 해결",
    contents: [
      "로딩페이지 뷰 변경",
      "overlay transition 개선",
      "플러그인 관리 페이지 table 뷰 개선 및 번역 추가",
    ],
  },
  {
    title: "쿠키파킹 개발",
    date: "2020.12 ~ 2021.02 (4명)",
    skills: ["React", "Javascript", "Recoil"],
    download: "https://www.cookieparking.com/",
    website: "https://www.cookieparking.com/landing",
    about: "방문한 사이트를 저장하고 관리할 수 있는 웹 익스텐션 서비스",
    contents: [
      "newtab extension 개발",
      "popup extension 개발",
      "extension에 맞는 웹팩 셋팅",
    ],
  },
  {
    title: "아보카도 개발",
    date: "2020.10 ~ 2020.12 (3명)",
    skills: ["React", "Javascript", "Recoil"],
    github: "https://github.com/depromeet/8th-final-front-6team",
    website: "https://abocado.netlify.app/",
    about: "커머스 별 채소 최저가를 보여주는 웹 서비스",
    contents: [
      "채소를 검색하여 장바구니에 담는 페이지 개발",
      "장바구니의 채소들에 대해 커머스 별로 가격을 보여주는 페이지 개발",
    ],
  },
  {
    title: "fms 어드민 웹사이트 개발",
    date: "2020.07 ~ 2020.10 (3명)",
    skills: ["Vue", "Javascript", "Vuex", "Antd", "Highcharts"],
    website:
      "https://www.notion.so/danmin20/NAVER-Glace-PPT-8b11aee3987e4742be61ce92a1769385",
    about: "TwentyOZ에서 개발한 fms 어드민 웹사이트",
    contents: [
      "getters와 mutations에 따른 download 구조 분리",
      "그리드 시스템 기반의 css 마크업",
      "페이지 개발 및 리팩토링",
    ],
  },
  {
    title: "fms 근무자용 웹뷰 기반 앱 개발",
    date: "2020.06 ~ 2020.10 (3명)",
    skills: ["Vue", "Javascript", "Vuex"],
    website:
      "https://www.notion.so/danmin20/NAVER-Glace-PPT-8b11aee3987e4742be61ce92a1769385",
    about: "TwentyOZ에서 개발한 fms 근무자용 웹뷰 기반 앱",
    contents: [
      "api 추가에 따른 기능 추가 및 화면 개발",
      "리팩토링 및 유지보수",
    ],
  },
  {
    title: "Gagle(가까운 글) 개발",
    date: "2020.07 ~ 2020.09 (2명)",
    skills: ["React", "Typescript", "Redux", "Redux-saga"],
    github: "https://github.com/depromeet/88mingup",
    website: "http://gargle.s3-website.ap-northeast-2.amazonaws.com/",
    about: "위치 기반 SNS 서비스",
    contents: [
      "사진을 첨부하고 글을 작성하는 페이지 개발",
      "atom 단위의 재활용 가능한 컴포넌트 (box, button, tag 등) 개발",
    ],
  },
  {
    title: "MyBook 개발",
    date: "2020.02 ~ 2020.03 (1명)",
    skills: [
      "React Native",
      "Javascript",
      "GraphQL",
      "Apollo",
      "Node.js",
      "PostgresQL",
      "Prisma",
    ],
    github: "https://github.com/danmin20/MyBook-app",
    download:
      "https://play.google.com/download/apps/details?id=com.danmin.mybook&hl=ko&gl=US",
    about: "독서기록장 SNS 서비스",
    contents: [
      "Prisma orm을 사용하여 데이터 관리",
      "GraphQL 기반의 서버 구축",
      "Expo를 사용하여 앱 빌드",
    ],
  },
];
