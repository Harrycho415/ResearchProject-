const API_BASE_URL = process.env['NEXT_PUBLIC_API_BASE_URL'];

// 공통 fetch 요청 처리 함수
async function apiRequest(
  endpoint: string,
  options: RequestInit = {},
): Promise<any> {
  // const response = await fetch(`${API_BASE_URL}${endpoint}`, options);
  const response = await fetch(`${endpoint}`, options);
  if (!response.ok) {
    const errorData = await response.text();
    console.error(
      `Error: ${response.status} ${response.statusText}\n${errorData}`,
    );
    throw new Error(`Network response was not ok: ${response.statusText}`);
  }
  const responseJson = await response.json();
  console.log('response', responseJson);
  return responseJson;
  // return await response.json();
}

// API URL 상수화
export const CONTEXT_API = {
  VIEW_POSTS: () => `${API_BASE_URL}/posts`,
  VIEW_POST: (id: string) => `${API_BASE_URL}/posts/id?id=${id}`,
};

// API 요청 함수들

export async function viewPosts() {
  const endpoint = `${CONTEXT_API.VIEW_POSTS()}`;
  return await apiRequest(endpoint);
}

export async function viewPost(id: string) {
  const endpoint = `${CONTEXT_API.VIEW_POST(id)}`;
  return await apiRequest(endpoint);
}
