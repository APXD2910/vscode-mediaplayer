import * as mpv from "./mpvHandler";

export async function playHandler(url: String) {
   await mpv.play(url);
}

export async function pauseHandler() {
   await mpv.pause();
}

export async function nextHandler() {
   await mpv.next();
}

export async function prevHandler() {
   await mpv.prev();
}

export async function resumeHandler() {
   await mpv.resume();
}

export async function loadPlaylistHandler(filePath: String) {
   await mpv.loadPlaylist(filePath);
}

export async function refreshListHandler() {
}

export async function openFolderHandler() {
}

export async function deteleTrackHandler() {
}


