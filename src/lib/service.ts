/** Public, read-only API. Authentication and administration stay on the server. */
const serviceOrigin = "https://taila-acolher.daringboar3.chatgpt.site";

export const adminUrl = `${serviceOrigin}/admin`;
export const assetUrl = (name: string) => `${import.meta.env.BASE_URL}${name}`;

export function apiFetch(path: string, init: RequestInit = {}) {
  if (!/^\/api\/(public|availability)(\?|$)/.test(path)) {
    return Promise.reject(new Error("Endpoint público inválido."));
  }
  return fetch(new URL(path, serviceOrigin), {
    ...init,
    credentials: "omit",
    cache: "no-store",
  });
}

export function publicImage(path: string) {
  return path ? new URL(path, serviceOrigin).href : "";
}
