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
  {
    title: "Boulevard of Broken Dreams",
    artist: "Green Day",
    chords: [
      { name: "Em", fingering: "022000" },
      { name: "G", fingering: "320003" },
      { name: "D", fingering: "xx0232" },
      { name: "A", fingering: "x02220" }
    ],
    lyrics: `Em             G
I walk a lonely road
        D                A
The only one that I have ever known
Em             G
Don't know where it goes
        D                ABut it's home to me and I walk alone`
  },
  {
    title: "House of the Rising Sun",
    artist: "The Animals",
    chords: [
      { name: "Am", fingering: "x02210" },
      { name: "C", fingering: "x32010" },
      { name: "D", fingering: "xx0232" },
      { name: "F", fingering: "133211" },
      { name: "E", fingering: "022100" }
    ],
    lyrics: `Am      C        D     F
There is a house in New Orleans
    Am       C      E
They call the Rising Sun
    Am       C      D         F
And it's been the ruin of many a poor boy
    Am     E      Am
And God, I know I'm one`
  },
  {
    title: "Kryptonite",
    artist: "3 Doors Down",
    chords: [
      { name: "Bm", fingering: "x24432" },     { name: "G", fingering: "320003" },
      { name: "D", fingering: "xx0232" },
      { name: "A", fingering: "x02220" }
    ],
    lyrics: `Bm            G
I took a walk around the world
D                 A
To ease my troubled mind
Bm            G
I left my body lying somewhere
D                 A
In the sands of time`
  },
  {
    title: "Wonderwall",
    artist: "Oasis",
    chords: [
      { name: "Em7", fingering: "022033" },
      { name: "G", fingering: "320003" },
      { name: "Dsus4", fingering: "xx0233" },
      { name: "A7sus4", fingering: "x02033" },
      { name: "Cadd9", fingering: "x32033" }
    ],
    lyrics: `Em7        G           Dsus4      A7sus4
Today is gonna be the day that they're gonna throw it back to you
Em7        G           Dsus4      A7sus4
By now you should've somehow realized what you gotta doEm7        G           Dsus4      A7sus4
I don't believe that anybody feels the way I do
      Cadd9  Dsus4  A7sus4
About you now`
  }
];

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
  document.getElementById("copyLyricsBtn").onclick = function() {
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

function formatFingering(fingering) {
  // Example: "x32010" → "x 3 2 0 1 0"
  return fingering.split("").join(" ");
}

// Render song list
function renderSongs(filter = "") {
  const songList = document.getElementById("songList");
  songList.innerHTML = "";
  const filtered = songs.filter(song =>
    song.title.toLowerCase().includes(filter) ||
    song.artist.toLowerCase().includes(filter)
  );
  filtered.forEach(song => {
    const li = document.createElement("li");
    li.textContent = `${song.title} — ${song.artist}`;
    li.onclick = () => showSongDetails(song);
    songList.appendChild(li);
  });
}

// Search functionality
document.getElementById("searchBar").addEventListener("input", e => {
  renderSongs(e.target.value.toLowerCase());
});

// Initial render
renderSongs();

const BACKEND_URL = 'https://musicone-sezf.onrender.com';

// Replace with your actual Render backend URL!
const BACKEND_URL = ' https://musicone-sezf.onrender.com';

// Smooth scroll to upload section
document.getElementById('goToUpload').onclick = function() {
  document.getElementById('record-section').scrollIntoView({ behavior: 'smooth' });
};

// Function to fetch and display uploaded songs/videos
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
        if (filename.endsWith('.mp3') || filename.endsWith('.wav') || filename.endsWith('.ogg')) {
          mediaTag = `<audio controls src="${BACKEND_URL}/uploads/${song.filename}"></audio>`;
        } else if (filename.endsWith('.mp4') || filename.endsWith('.webm') || filename.endsWith('.mov')) {
          mediaTag = `<video controls width="320" src="${BACKEND_URL}/uploads/${song.filename}"></video>`;
        } else {
          mediaTag = `<a href="${BACKEND_URL}/uploads/${song.filename}" target="_blank">Download</a>`;
        }
        li.innerHTML = `
          <strong>${song.title || 'Untitled'}</strong><br>
          ${mediaTag}
        `;
        songList.appendChild(li);
      });
    })
    .catch(err => {
      document.getElementById('songList').innerHTML = '<li>Error loading songs/videos.</li>';
    });
}

// Handle upload form submission
document.getElementById('uploadForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(this);
  document.getElementById('uploadStatus').textContent = 'Uploading...';
  fetch(`${BACKEND_URL}/upload`, {
    method: 'POST',
    body: formData
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById('uploadStatus').textContent = 'Upload successful!';
    loadSongs(); // Refresh the list
    this.reset();
    setTimeout(() => {
      document.getElementById('uploadStatus').textContent = '';
    }, 2000);
  })
  .catch(() => {
    document.getElementById('uploadStatus').textContent = 'Upload failed. Please try again.';
  });
});

// Load songs/videos on page load
window.onload = loadSongs;
