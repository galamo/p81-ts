// Partial

enum WorldRegion {
  ASIA,
  AFRICA,
  EUROPE,
  AMERICA,
}
type Country = {
  name: string;
  population: number;
  region: WorldRegion;
  location: { long: number; lan: number };
  flag: { svg: string; png: string };
};

function getCountry(): Country {
  // async operation for country
  // async operaiton for location
  // async operation for flag

  return {
    name: "ISRAEL",
    population: 9,
    region: WorldRegion.AMERICA,
    location: { long: 1242435, lan: 1323535 },
    flag: { png: "https://flags/country.flag.israel.jpg", svg: "noSVG" },
  };
}

type PartialCountry = Partial<Country>;
function getCountryFlag(cId: string): PartialCountry {
  return {
    flag: { png: "https://flags/country.flag.israel.jpg", svg: "noSVG" },
  };
}

// Required
type GameUser = {
  player: string;
  gameType?: string;
};

const gameUserInstance: GameUser = {
  player: "player1",
};

function getUserGameInstance(): Required<GameUser> {
  const gameUserInstance = {
    player: "player1",
    gameType: "aa",
  };
  return gameUserInstance;
}
