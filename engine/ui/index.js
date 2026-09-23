function playGame() {
  $root.classList.add("play-mode");
  pause = false;
}

function pauseGame() {
  $root.classList.remove("play-mode");
  pause = true;
}

function toggleSounds() {
  $sounds.classList.toggle("muted");

  if ($sounds.classList.contains("muted")) {
    soundsEngine.setVolume(0);
  } else {
    soundsEngine.setVolume(1);
  }
}

