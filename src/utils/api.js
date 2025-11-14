// works with CRA (process.env) and Vite (import.meta.env)
const getBase = () => {
  if (
    typeof import.meta !== "undefined" &&
    import.meta.env?.VITE_API_BASE_URL
  ) {
    return import.meta.env.VITE_API_BASE_URL;
  }
  return process.env.REACT_APP_API_BASE_URL || "";
};

export const API_BASE = getBase();

export async function postLead(payload) {
  const url = `${API_BASE}/api/lead`.replace("//api", "/api"); // keeps relative if API_BASE=""
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const err = new Error(data.error || data.message || "Request failed");
    err.status = res.status;
    err.body = data;
    throw err;
  }
  return data;
}
