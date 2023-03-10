import { FileSaver } from "file-saver";
import { supriseMePromps } from "../constants/index.js";

export function getRandomPrompt() {
  return supriseMePromps[Math.floor(Math.random() * supriseMePromps.length)];
}

export async function downloadImage(_id, photo) {
  console.log(__id, photo);
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
}
