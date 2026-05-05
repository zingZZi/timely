// ============================================================
// 회원가입 폼 목업 데이터
// 실제 API 연동 시 아래 구조에 맞게 백엔드 응답을 매핑하세요
// ============================================================

// ✅ 회사 목록 (SearchSelect 모달용)
export const companyList = [
  {
    id: 1,
    name: "카카오",
    code: "KAKAO",
    domain: "kakao.com",
    address: "경기도 성남시 분당구 판교역로 235",
  },
  {
    id: 2,
    name: "삼성전자",
    code: "SAMSUNG",
    domain: "samsung.com",
    address: "경기도 수원시 영통구 삼성로 129",
  },
  {
    id: 3,
    name: "네이버",
    code: "NAVER",
    domain: "naver.com",
    address: "경기도 성남시 분당구 불정로 6",
  },
];

// ✅ 회사별 부서 목록 (SearchSelect 모달용 - 회사 선택 후 사용)
export const departmentsByCompany = {
  // 카카오 부서
  KAKAO: [
    { id: 101, name: "경영지원본부" },
    { id: 102, name: "AI플랫폼본부" },
    { id: 103, name: "카카오페이사업부" },
    { id: 104, name: "서비스개발팀" },
    { id: 105, name: "디자인센터" },
    { id: 106, name: "보안팀" },
    { id: 107, name: "마케팅본부" },
  ],
  // 삼성전자 부서
  SAMSUNG: [
    { id: 201, name: "DX부문" },
    { id: 202, name: "반도체사업부" },
    { id: 203, name: "스마트폰개발팀" },
    { id: 204, name: "글로벌마케팅실" },
    { id: 205, name: "경영지원그룹" },
    { id: 206, name: "소프트웨어센터" },
    { id: 207, name: "품질혁신팀" },
  ],
  // 네이버 부서
  NAVER: [
    { id: 301, name: "서치플랫폼" },
    { id: 302, name: "클로바CIC" },
    { id: 303, name: "쇼핑사업부" },
    { id: 304, name: "웹툰개발팀" },
    { id: 305, name: "사내IT지원팀" },
    { id: 306, name: "UX디자인팀" },
    { id: 307, name: "보안기술팀" },
  ],
};

// ✅ 회사별 직급 목록 (NativeSelect 용 - 회사 선택 후 사용)
export const ranksByCompany = {
  KAKAO: [
    { value: "", label: "직급 선택" },
    { value: "FELLOW", label: "크루" },
    { value: "LEAD", label: "팀장" },
    { value: "PART_LEAD", label: "파트장" },
    { value: "CIC_LEADER", label: "CIC장" },
  ],
  SAMSUNG: [
    { value: "", label: "직급 선택" },
    { value: "C1", label: "CL1 (사원)" },
    { value: "C2", label: "CL2 (선임)" },
    { value: "C3", label: "CL3 (책임)" },
    { value: "C4", label: "CL4 (수석)" },
    { value: "MASTER", label: "마스터" },
  ],
  NAVER: [
    { value: "", label: "직급 선택" },
    { value: "BAND1", label: "IC1" },
    { value: "BAND2", label: "IC2" },
    { value: "BAND3", label: "IC3" },
    { value: "BAND4", label: "IC4" },
    { value: "BAND5", label: "IC5" },
    { value: "LEADER", label: "리더" },
  ],
};

// ============================================================
// 📌 사용 예시 (컴포넌트에서)
// ============================================================
//
// 1. 회사 SearchSelect 모달 열릴 때:
//    const companies = companyList;  → 목록 렌더링
//
// 2. 회사 선택 완료 후 (selectedCompany.code = "KAKAO"):
//    const departments = departmentsByCompany[selectedCompany.code];
//    const ranks = ranksByCompany[selectedCompany.code];
//
// 3. 부서 SearchSelect 모달:
//    departments 목록으로 렌더링
//
// 4. 직급 NativeSelect:
//    ranks 배열을 <option> 으로 map
//
// ============================================================
// 🔌 실제 API 연동 시 예시
// ============================================================
//
// // 회사 목록 조회
// GET /api/companies
// Response: { data: [ { id, name, code, domain, address }, ... ] }
//
// // 회사별 부서 조회
// GET /api/companies/{companyCode}/departments
// Response: { data: [ { id, name }, ... ] }
//
// // 회사별 직급 조회
// GET /api/companies/{companyCode}/ranks
// Response: { data: [ { value, label }, ... ] }



//메뉴 sampledata

export const menus = [
  {
    id: 1,
    name: "홈",
    path: "/",
    icon: 'house',
    depth: 1,
    children: []
  },
  {
    id: 2,
    name: "일정관리",
    path: "/schedule/",
    icon:'calendar',
    depth: 1,
    children: [
      {
        id: 3,
        name: "내 일정",
        path: "/schedule/my",
        depth: 2
      },
      {
        id: 4,
        name: "팀 일정",
        path: "/schedule/team",
        depth: 2
      }
    ]
  },
  {
    id: 5,
    name: "프로젝트",
    path: "/projects",
    icon:'folder',
    depth: 1,
    children: []
  },
  {
    id: 6,
    name: "게시판",
    path: "/board",
    icon:'board',
    depth: 1,
    children: []
  }
];