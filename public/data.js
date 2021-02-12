export const careers = [
  {
    id: 1,
    name: "Megazone Cloud",
    date: "2020.11 ~ 2021.02",
    part: "Commercial Technology Center / CloudOne 프론트엔드 개발 인턴",
    works: [
      {
        id: 1,
        title: "SpaceONE 디자인시스템 storybook 개선 및 컴포넌트 개발",
        person: "(참여인원 : 4명)",
        stacks: ["Vue", "Typescript", "Storybook", "PostCSS"],
        things: [
          "기존 option api에서 Vue3 composition api으로 마이그레이션",
          "기존 atomic 시스템 기반의 스토리북 구조에서 컴포넌트 종류에 따른 구조로 변환",
          "컴포넌트 css 수정 및 기능 추가 개발",
          "typescript 마이그레이션",
          "storybook mdx 도입",
        ],
      },
      {
        id: 2,
        title: "SpaceONE 프로젝트 사이트 개발",
        person: "(참여인원 : 1명)",
        stacks: ["React", "Next", "Typescript", "React hook", "Sass"],
        things: [
          "next 기반의 SSR 웹 애플리케이션 구축",
          "BEM 방법론을 적용하여 styled components 사용",
        ],
      },
    ],
  },
  {
    id: 2,
    name: "TwentyOZ",
    date: "2020.06 ~ 2021.10",
    part: "프론트엔드 개발 인턴",
    works: [
      {
        id: 1,
        title: "fms 어드민 웹뷰 기반 앱 개발",
        person: "(참여인원 : 3명)",
        stacks: ["Vue", "Javascript", "Vuex"],
        things: [
          "api 추가에 따른 기능 추가 및 화면 개발",
          "리팩토링 및 유지보수",
        ],
      },
      {
        id: 2,
        title: "fms 어드민 웹사이트 개발",
        person: "(참여인원 : 3명)",
        stacks: ["Vue", "Javascript", "Vuex", "Antd", "Highcharts"],
        things: [
          "getters와 mutations에 따른 store 구조 분리",
          "그리드 시스템 기반의 css 마크업",
          "페이지 개발 및 리팩토링",
        ],
      },
    ],
  },
];

export const skills = [
  {
    id: 1,
    name: "React",
    contents: [
      "redux, redux saga, context api, recoil, apollo 등의 상태관리 라이브러리 사용 경험이 있습니다.",
      "next.js를 활용한 SSR 개발 경험이 있습니다.",
    ],
  },
];
