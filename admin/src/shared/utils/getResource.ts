const BASE_URL = "http://localhost:5000/api/v1";
const API_KEY = "YXBpS2V5U2VjcmV0";

const getResource = async (resource: string) => {
  const res = await fetch(`${BASE_URL}/resource/${resource}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-bypass-token": API_KEY,
    },
  });

  if (!res.ok) throw new Error(`Error: ${res.status}`);
  return res.json();
};

export default getResource;
