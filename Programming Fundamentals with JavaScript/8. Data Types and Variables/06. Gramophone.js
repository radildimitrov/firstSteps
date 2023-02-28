function gramophone(band, album, song) {
  let rotations = 0;
  songDuration = (album.length * band.length * song.length) / 2;
  rotations = songDuration / 2.5;
  console.log(`The plate was rotated ${Math.ceil(rotations)} times.`);
}
gramophone(
  "Rammstein",
  "Sehnsucht",
  "Engel"
);
