import namor from "namor";

const range = (len) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => {
  const statusChance = Math.random();
  return {
    ref: namor.generate({ words: 1, numbers: 0 }),
    datecode: namor.generate({ words: 1, numbers: 0 }),
    description: Math.floor(Math.random() * 30),
    date: Math.floor(Math.random() * 100),
    progression: Math.floor(Math.random() * 100),
    conformite:
      statusChance > 0.66
        ? "conforme"
        : statusChance > 0.33
        ? "erreur"
        : "en cours",
  };
};

export default function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map((d) => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      };
    });
  };

  return makeDataLevel();
}
