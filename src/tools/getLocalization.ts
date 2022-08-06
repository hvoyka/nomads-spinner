import { messages } from "mock";

export const getLocalization = (text: string) => {
  const localizatedString = messages[text];
  return localizatedString ? localizatedString : "";
};
