export const isLocalhost = (() => {
  if (typeof window === "undefined") return false;
  return window.location.hostname === "localhost";
})();

export const BASE_URL = isLocalhost
  ? "http://localhost:3000"
  : "https://katalogue.app";
