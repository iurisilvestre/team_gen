let playersList = [];
let numOfTeams = 2;

playersList = [
  "Iúri",
  "Marina",
  "Fernando",
  "Nuno M",
  "Nuno E",
  "Fred",
  "Gonçalo L",
  "Gonçalo A",
  "César",
  "Fábio",
];

const shuffle = (arr) =>
  arr
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);

function createTeams(players, numOfTeams) {
  let createdTeams = [];
  const shuffledPLayers = shuffle(players);
  const numOfPlayersPerTeam = Math.floor(players.length / numOfTeams);
  for (let i = 0; i < numOfTeams; i++) {
    createdTeams.push(shuffledPLayers.splice(0, numOfPlayersPerTeam));
  }
  return {
    teams: createdTeams,
    remaining: shuffledPLayers,
  };
}

console.log(createTeams(playersList, 3));
