// api/ranking.js
export default async function handler(req, res) {
  try {
    // 1. Vercel 환경 변수 금고에서 구글 시트 URL을 몰래 꺼내옴
    const targetUrl = process.env.SECRET_GOOGLE_API_URL;

    // 2. 서버가 대신 구글 시트에 요청 (사용자 브라우저엔 안 보임!)
    const response = await fetch(targetUrl);
    const data = await response.json();

    // 3. 받아온 데이터를 프론트엔드에 전달
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "데이터를 가져오는 데 실패했습니다." });
  }
}
