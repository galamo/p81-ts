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
  private list: T[] = [];
  add(someElement: T) {
    this.list.push(someElement);
  }
  play(item: T) {
    this.list.splice(0, 1);
  }
}

const songs = new PlayList<Song>();
songs.add({
  artist: "veronica",
  length: 2,
  name: "i love p81",
  writer: "Snir SW",
});

//  BEFORE EXPLAIN ON EXTENDS
function mergeFunction<T extends Song, U extends Video>(
  obj1: T,
  obj2: U
): T & U {
  return {
    ...obj1,
    ...obj2,
  };
}
const combinedObj = mergeFunction(
  { artist: "test", length: 2, name: "test", writer: "test", temp: 1 },
  { artist: { firstName: "Gal" } }
);

console.log(combinedObj.artist);

const item = document.querySelector<HTMLInputElement>("#id");
