export const API_BASE_URL = "https://lunatic-back.onrender.com";


// ✅ API 호출할 때 `credentials` 추가해서 CORS 해결
export async function fetchBattles() {
  console.log("fetchBattles 호출은 하나?");
  const response = await fetch(`${API_BASE_URL}/battles`, {
    method: "GET",
    mode: "cors", // CORS 문제 방지
    credentials: "include", // 쿠키 필요할 경우
  });
  console.log("코드", reponse.status);
  if (!response.ok) {
    throw new Error("❌ 배틀 데이터를 불러오는 데 실패했습니다.");
  }
  console.log("응답 결과", response.data);
  return response.json();
}

// 멤버 목록 불러오기
export async function fetchMembers() {
  const response = await fetch(`${API_BASE_URL}/members`, {
    mode: "cors",
  });
  if (!response.ok) {
    throw new Error("멤버 데이터를 불러오는 데 실패했습니다.");
  }
  return response.json();
}

// 공연 목록 불러오기
export async function fetchPerformances() {
  const response = await fetch(`${API_BASE_URL}/performances`, {
    mode: "cors",
  });
  if (!response.ok) {
    throw new Error("공연 데이터를 불러오는 데 실패했습니다.");
  }
  return response.json();
}

export async function fetchTop5Winners() {
    const response = await fetch(`${API_BASE_URL}/hall-of-fame/winners`, {
      mode: "cors",
    });
    return await response.json();
  }
  
  // ✅ 저지 부문 데이터 가져오기
  export async function fetchTop5Judges() {
    const response = await fetch(`${API_BASE_URL}/hall-of-fame/judges`, {
      mode: "cors",
    });
    return await response.json();
  }
  
  // ✅ 공연 부문 데이터 가져오기
  export async function fetchTop5Performers() {
    const response = await fetch(`${API_BASE_URL}/hall-of-fame/performers`, {
      mode: "cors",
    });
    return await response.json();
  }
