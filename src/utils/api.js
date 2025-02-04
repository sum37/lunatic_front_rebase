export const API_BASE_URL = "https://lunatic-back.onrender.com";

// 배틀 목록 불러오기
export async function fetchBattles() {
  console.log("BATTLE API 실행");
  const response = await fetch(`${API_BASE_URL}/battles`,{
    mode: "cors",
  });
  console.log("API 응답상태: ", response.status);
  if (!response.ok) {
    throw new Error("배틀 데이터를 불러오는 데 실패했습니다.");
  }
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
