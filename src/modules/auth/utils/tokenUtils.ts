import moment from "moment";

export const setAuthToken = (token: string): void => {
  document.cookie = `token=${token}; expires=${moment().add(20, "days").toDate()}; path=/; Secure; SameSite=Strict`;
};

export const getAuthToken = (): string | undefined => {
  const ex = new RegExp("(^| )token=([^;]+)");
  const match = document.cookie.match(ex);
  if (match) {
    return match[2];
  }
  return undefined;
};

export const removeAuthToken = (): void => {
  document.cookie = `token=; expires=${moment().subtract(5, "days").toDate()}; path=/; Secure; SameSite=Strict`;
};
