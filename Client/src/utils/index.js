import { supriseMePromps } from "../constants/index.js";

export function getRandomPrompt() {
  return supriseMePromps[Math.floor(Math.random() * supriseMePromps.length)];
}
