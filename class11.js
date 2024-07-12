class Song {
  constructor(title, performer, length) {
    this.title = title;
    this.performer = performer;
    this.length = length;
  }

  playSong() {
    console.log(`Now playing: ${this.title}`);
  }

  changePerformer(newArtist) {
    this.performer = newArtist;
  }
}

class ClassicalSong extends Song {
  constructor(title, performer, length, composer) {
    super(title, performer, length);
    this.composer = composer;
  }
}

class MetalSong extends Song {
  constructor(title, performer, length, averageHairLength) {
    super(title, performer, length);
    this.averageHairLength = averageHairLength;
  }

  playSong() {
    console.log(`Now rockin: ${this.title}`);
  }
}

class DeathMetalSong extends MetalSong {
  constructor(title, performer, length, averageHairLength, decibels) {
    super(title, performer, length, averageHairLength);
    this.decibels = decibels;
  }

  playSong() {
    console.log(`INARTICULATE SCREAMING: ${this.title}`);
  }
}

const classical = new ClassicalSong(
  "Duel of Fates",
  "SLSO",
  "7:00",
  "John Williams"
);
// console.log(classical);

const metal = new MetalSong("Unforgiven", "Metallica", "6:30", 8);
// console.log(metal);

const deathMetal = new DeathMetalSong(
  "Gimmie Chococate",
  "Babymetal",
  "2:00",
  14,
  130
);
// console.log(deathMetal);
// classical.playSong();
// metal.playSong();
// deathMetal.playSong();

const songList = [classical, metal, deathMetal];

for (let index = 0; index < songList.length; index++) {
  songList[index].playSong();
}
