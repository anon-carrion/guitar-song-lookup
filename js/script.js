// Constants
const BACKEND_URL = 'https://musicone-sezf.onrender.com';

// Song data with chord fingerings
const songs = [
  {
    title: "Let It Be",
    artist: "The Beatles",
    chords: [
      { name: "C", fingering: "x32010" },
      { name: "G", fingering: "320003" },
      { name: "Am", fingering: "x02210" },
      { name: "F", fingering: "133211" }
    ],
    lyrics: `C           G         Am         F
When I find myself in times of trouble, Mother Mary comes to me
C       G           F   C
Speaking words of wisdom, let it be`
  },
  // Other song objects...
];

// Utility function to debounce events
function debounce(func, delay) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

// Format chord fingering
function formatFingering(fingering) {
  // Example: "x32010" → "x 3 2 0 1 0"
  return fingering.split("").join(" ");
}

// Show song details
function showSongDetails(song) {
  const details = document.getElementById("songDetails");
  details.innerHTML = `
    <h2>${song.title}</h2>
    <h3>${song.artist}</h3>
    <div id="chords" style="margin-bottom: 1.5em;"></div>
    <div style="position:relative;">
      <button id="copyLyricsBtn" style="position:absolute; right:0; top:0; z-index:1;">Copy Code</button>
      <pre class="lyrics" id="lyricsBlock">${song.lyrics}</pre>
    </div>
  `;

  const chordsDiv = document.getElementById("chords");
  song.chords.forEach(chord => {
    const chordDiv = document.createElement("div");
    chordDiv.className = "chord-diagram";
    chordDiv.innerHTML = `
      <div class="chord-name">${chord.name}</div>
      <pre class="chord-fingering">${formatFingering(chord.fingering)}</pre>
    `;
    chordsDiv.appendChild(chordDiv);
  });

  // Copy button functionality
  document.getElementById("copyLyricsBtn").onclick = function () {
    const lyrics = document.getElementById("lyricsBlock").innerText;
    navigator.clipboard.writeText(lyrics)
      .then(() => {
        this.textContent = "Copied!";
        setTimeout(() => this.textContent = "Copy Code", 1200);
      })
      .catch(() => {
        this.textContent = "Failed";
        setTimeout(() => this.textContent = "Copy Code", 1200);
      });
  };
}

// Render song list
function renderSongs(filter = "") {
  const songList = document.getElementById("songList");
  songList.innerHTML = "";
  const filtered = songs.filter(song =>
    song.title.toLowerCase().includes(filter) ||
    song.artist.toLowerCase().includes(filter)
  );
  if (filtered.length === 0) {
    songList.innerHTML = '<li>No songs found.</li>';
    return;
  }
  filtered.forEach(song => {
    const li = document.createElement("li");
    li.textContent = `${song.title} — ${song.artist}`;
    li.onclick = () => showSongDetails(song);
    songList.appendChild(li);
  });
}

// Load uploaded songs/videos and display them
function loadSongs() {
  fetch(`${BACKEND_URL}/songs`)
    .then(res => res.json())
    .then(songs => {
      const songList = document.getElementById('songList');
      songList.innerHTML = '';
      songs.forEach(song => {
        const li = document.createElement('li');
        const filename = song.filename.toLowerCase();
        let mediaTag = '';
        if (/\.(mp3|wav|ogg)$/.test(filename)) {
          mediaTag = `<audio controls src="${BACKEND_URL}/uploads/${song.filename}"></audio>`;
        } else if (/\.(mp4|webm|mov)$/.test(filename)) {
          mediaTag = `<video controls width="320" src="${BACKEND_URL}/uploads/${song.filename}"></video>`;
        } else {
          mediaTag = `<a href="${BACKEND_URL}/uploads/${song.filename}" target="_blank">Download</a>`;
        }
        li.innerHTML = `<strong>${song.title || 'Untitled'}</strong><br>${mediaTag}`;
        songList.appendChild(li);
      });
    })
    .catch(error => {
      console.error("Failed to load songs:", error);
      const songList = document.getElementById('songList');
      songList.innerHTML = '<li>Error loading songs. Please try again later.</li>';
    });
}

// Event listeners
document.getElementById("searchBar").addEventListener("input", debounce(e => {
  renderSongs(e.target.value.toLowerCase());
}, 300));

document.getElementById('goToUpload').onclick = function () {
  document.getElementById('record-section').scrollIntoView({ behavior: 'smooth' });
};

// Initial render
renderSongs();
  

