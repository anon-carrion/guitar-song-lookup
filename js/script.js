// Song data array
const songs = [
  {
    title: "Let It Be",
    artist: "The Beatles",
    chords: "C G Am F",
    lyrics: "When I find myself in times of trouble, Mother Mary comes to me..."
  },
  {
    title: "Wonderwall",
    artist: "Oasis",
    chords: "Em7 G Dsus4 A7sus4",
    lyrics: "Today is gonna be the day that they're gonna throw it back to you..."
  }
];

// Render the song list
function renderSongs(filter = "") {
  const songList = document.getElementById("songList");
  songList.innerHTML = "";
  const filteredSongs = songs.filter(song =>
    song.title.toLowerCase().includes(filter) ||
    song.artist.toLowerCase().includes(filter)
  );
  filteredSongs.forEach((song, index) => {
    const li = document.createElement("li");
    li.className = "song-item";
    li.textContent = `${song.title} — ${song.artist}`;
    li.addEventListener("click", () => showSongDetails(index));
    songList.appendChild(li);
  });
}

// Show song details
function showSongDetails(index) {
  const song = songs[index];
  const details = document.getElementById("songDetails");
  details.innerHTML = `
    <h2>${song.title}</h2>
    <h3>${song.artist}</h3>
    <p><strong>Chords:</strong> ${song.chords}</p>
    <p>${song.lyrics}</p>
  `;
}

// Search functionality
document.getElementById("searchBar").addEventListener("input", function() {
  renderSongs(this.value.toLowerCase());
});

// Initial render
renderSongs();

