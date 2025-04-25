const songs = [
  {
    title: "Wonderwall",
    artist: "Oasis",
    chords: "Em7 G Dsus4 A7sus4",
    link: "https://www.ultimate-guitar.com/pro/?artist=Oasis&song=Wonderwall&utm_source=911tabs&utm_medium=Song&utm_campaign=List",
    lyrics: `[Verse 1]
Em7        G              Dsus4      A7sus4
Today is gonna be the day that they're gonna throw it back to you
Em7        G              Dsus4      A7sus4
By now you should've somehow realized what you gotta do`
  },
  {
    title: "Blackbird",
    artist: "The Beatles",
    chords: "G Am7 G/B C D/F#",
    link: "https://www.ultimate-guitar.com/pro/?artist=The+Beatles&song=Blackbird&utm_source=911tabs&utm_medium=Song&utm_campaign=List",
    lyrics: `[Verse 1]
G        Am7       G/B     C        D/F#
Blackbird singing in the dead of night
G        Am7       G/B     C        D/F#
Take these broken wings and learn to fly`
  },
  {
    title: "Hotel California",
    artist: "Eagles",
    chords: "Bm F# A E G D Em F#",
    link: "https://www.ultimate-guitar.com/pro/?artist=Eagles&song=Hotel+California&utm_source=911tabs&utm_medium=Song&utm_campaign=List",
    lyrics: `[Verse 1]
Bm        F#           A              E
On a dark desert highway, cool wind in my hair
G           D              Em             F#
Warm smell of colitas, rising up through the air`
  },
  {
    title: "Kryptonite",
    artist: "3 Doors Down",
    chords: "Bm G6 Asus2",
    link: "https://tabs.ultimate-guitar.com/tab/3-doors-down/kryptonite-chords-126580",
    lyrics: `[Verse 1]
Bm          G6           Asus2
I took a walk around the world to ease my troubled mind
Bm          G6           Asus2
I left my body lying somewhere in the sands of time`
  },
  {
    title: "Boulevard of Broken Dreams",
    artist: "Green Day",
    chords: "Em G D A",
    link: "https://www.songsterr.com/a/wsa/green-day-boulevard-of-broken-dreams-chords-s92866",
    lyrics: `[Verse 1]
Em           G
I walk a lonely road
D                A
The only one that I have ever known`
  },
  {
    title: "Let It Be",
    artist: "The Beatles",
    chords: "C G Am F",
    link: "https://www.youtube.com/watch?v=fwJYl0NwrQE",
    lyrics: `[Verse 1]
C             G        Am        F
When I find myself in times of trouble
C       G          F  C
Mother Mary comes to me`
  },
  {
    title: "Dancing with Myself",
    artist: "Billy Idol",
    chords: "A D E",
    link: "https://tabs.ultimate-guitar.com/tab/billy-idol/dancing-with-myself-chords-123456", // Placeholder
    lyrics: `[Verse 1]
A                D
On the floors of Tokyo
E
Or down in London town to go, go`
  },
  {
    title: "Dark Red",
    artist: "Steve Lacy",
    chords: "Bb Abm Gb B",
    link: "https://www.chordify.net/chords/steve-lacy-songs/dark-red-2-chords",
    lyrics: `[Verse 1]
Bb              Abm
Something bad is 'bout to happen to me
Gb              B
Why I feel this way, I don't know, maybe`
  },
  {
    title: "1979",
    artist: "The Smashing Pumpkins",
    chords: "G C D Em",
    link: "https://tabs.ultimate-guitar.com/tab/smashing-pumpkins/1979-chords-123456", // Placeholder
    lyrics: `[Verse 1]
G                C
Shakedown 1979
D                 Em
Cool kids never have the time`
  },
  {
    title: "Black Magic Woman",
    artist: "Fleetwood Mac",
    chords: "Dm Am Gm Dm7 Am7 Gm7",
    link: "https://tabs.ultimate-guitar.com/tab/fleetwood-mac/black-magic-woman-chords-446054",
    lyrics: `[Verse 1]
Dm                    Am
Got a black magic woman
Gm                   Dm
Got a black magic woman`
  },
  {
    title: "Creep",
    artist: "Radiohead",
    chords: "G B C Cm",
    link: "https://m.e-chords.com/chords/radiohead/creep",
    lyrics: `[Verse 1]
G         B           C         Cm
When you were here before, couldn't look you in the eye`
  },
  {
    title: "Fire and Rain",
    artist: "James Taylor",
    chords: "D Am7 G A C Em7 Bm",
    link: "https://www.laurenbateman.com/fire-and-rain-guitar-chords/",
    lyrics: `[Verse 1]
D           Am7        G
Just yesterday morning, they let me know you were gone`
  },
  {
    title: "Sparks",
    artist: "Coldplay",
    chords: "C Am F G",
    link: "https://tabs.ultimate-guitar.com/tab/coldplay/sparks-chords-123456", // Placeholder
    lyrics: `[Verse 1]
C                Am
Did I drive you away?
F                G
I know what you'll say`
  },
  {
    title: "Somebody That I Used to Know",
    artist: "Gotye",
    chords: "Dm G C Am",
    link: "https://tabs.ultimate-guitar.com/tab/gotye/somebody-that-i-used-to-know-chords-123456", // Placeholder
    lyrics: `[Verse 1]
Dm                 G
Now and then I think of when we were together`
  },
  {
    title: "505",
    artist: "Arctic Monkeys",
    chords: "Dm Em",
    link: "https://tabs.ultimate-guitar.com/tab/arctic-monkeys/505-chords-538427",
    lyrics: `[Verse 1]
Dm
I'm going back to 505
Em
If it's a seven hour flight or a forty-five minute drive`
  },
  {
    title: "Freaking Out on the Interstate",
    artist: "Brady Seals",
    chords: "G C D",
    link: "https://tabs.ultimate-guitar.com/tab/brady-seals/freaking-out-on-the-interstate-chords-123456", // Placeholder
    lyrics: `[Verse 1]
G                      C
I'm freaking out on the interstate
D
Rolling down the windows, baby, I can't hear a thing you say`
  },
  {
    title: "Mony Mony",
    artist: "Tommy James & The Shondells",
    chords: "E A B",
    link: "https://tabs.ultimate-guitar.com/tab/tommy-james-and-the-shondells/mony-mony-chords-123456", // Placeholder
    lyrics: `[Verse 1]
E
Here she comes now, say Mony Mony
A                B
Shoot 'em down, turn around, come on, Mony`
  },
  {
    title: "Will I See You Again",
    artist: "Unknown",
    chords: "C G Am F",
    link: "#", // Unknown link
    lyrics: `[Verse 1]
C             G
Will I see you again?
Am            F
Standing in the pouring rain`
  },
  {
    title: "She's Always a Woman to Me",
    artist: "Billy Joel",
    chords: "C F G Am",
    link: "https://tabs.ultimate-guitar.com/tab/billy-joel/shes-always-a-woman-chords-123456", // Placeholder
    lyrics: `[Verse 1]
C             F
She can kill with a smile
G             Am
She can wound with her eyes`
  },
];

// Display the list of songs
function displaySongs(songArray) {
  const songList = document.getElementById("songList");
  songList.innerHTML = "";
  songArray.forEach((song) => {
    const li = document.createElement("li");
    li.textContent = `${song.title} — ${song.artist}`;
    li.style.cursor = "pointer";
    li.onclick = () => showSongDetails(song);
    songList.appendChild(li);
  });
}

// Show details for a selected song
function showSongDetails(song) {
  const details = document.getElementById("songDetails");
  details.innerHTML = `
    <h3>${song.title} — ${song.artist}</h3>
    <p><strong>Chords:</strong> ${song.chords}</p>
    <p><a href="${song.link}" target="_blank" rel="noopener noreferrer">View Tabs/Chords</a></p>
    ${song.lyrics ? `<pre>${song.lyrics}</pre>` : ""}
  `;
}

// Filter songs based on search input
function filterSongs(query) {
  return songs.filter(song =>
    song.title.toLowerCase().includes(query) ||
    song.artist.toLowerCase().includes(query)
  );
}

// Set up search functionality
document.getElementById("searchBar").addEventListener("input", function () {
  const query = this.value.trim().toLowerCase();
  const filtered = filterSongs(query);
  displaySongs(filtered);
  document.getElementById("songDetails").innerHTML = "";
});

// Initial load: display all songs
window.onload = function () {
  displaySongs(songs);
};
