interface Video {
  title: string;
  creator: string;
  resolution: string;
}

interface Song {
  artist: string;
  length: number;
  name: string;
  writer: string;
}

class PlayList<T> {
  private queue: T[] = [];
  add(someElement: T) {
    this.queue.push(someElement);
  }
}

const songs = new PlayList<Song>();
songs.add({
  artist: "veronica",
  length: 2,
  name: "i love p81",
  writer: "Snir SW",
});

function mergeFunction<T extends Song, U>(obj1: T, obj2: U): T & U {
  return {
    ...obj1,
    ...obj2,
  };
}
const combinedObj = mergeFunction(
  { artist: "test", length: 2, name: "test", writer: "test", temp: 1 },
  { user: "Gal", age: 34 }
);

console.log(combinedObj.artist);
