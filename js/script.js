const songs = [
  {
    title: "Let It Be",
    artist: "The Beatles",
    chords: "C G Am F",
    lyrics: "When I find myself in times of trouble, Mother Mary comes to me speaking words of wisdom, let it be Let it be, Let it be, Let it be, Oh, let it be, there will be an answer let it be..."
  },
  {
    title: "Wonderwall",
    artist: "Oasis",
    chords: "Em7 G Dsus4 A7sus4",
    lyrics: "Today is gonna be the day that they're gonna throw it back to you..."
  },
  {
    title: "House of the Rising Sun",
    artist: "The Animals",
    chords: "Am C D F Am E Am E",
    lyrics: "There is a house in New Orleans they call the Rising Sun..."
  },
  {
    title: "Kryptonite",
    artist: "3 Doors Down",
    chords: "Bm G Asus2",
    lyrics: "I took a walk around the world to ease my troubled mind..."
  },
  {
    title: "Boulevard of Broken Dreams",
    artist: "Green Day",
    chords: "Em G D A C B7",
    lyrics: "I walk a lonely road, the only one that I have ever known..."
  }
];

function renderSongs(filter = "") {
  const songList = document.getElementById("songList");
  songList.innerHTML = "";
  const filteredSongs = songs.filter(song =>
    song.title.toLowerCase().includes(filter) ||
    song.artist.toLowerCase().includes(filter)
  );
  filteredSongs.forEach((song) => {
    const li = document.createElement("li");
    li.className = "song-item";
    li.textContent = `${song.title} — ${song.artist}`;
    li.addEventListener("click", () => showSongDetails(song));
    songList.appendChild(li);
  });
}

function showSongDetails(song) {
  const details = document.getElementById("songDetails");
  details.innerHTML = `
    <h2>${song.title}</h2>
    <h3>${song.artist}</h3>
    <p><strong>Chords:</strong> ${song.chords}</p>
    <p>${song.lyrics}</p>
  `;
}


document.getElementById("searchBar").addEventListener("input", function() {
  renderSongs(this.value.toLowerCase());
});

renderSongs();
