import nlp from "compromise/three";

export function formatBreedsNLP(breeds: string[]): {
  formattedBreeds: string[];
  breedLookup: { [key: string]: string };
} {
  const compoundWords: { [key: string]: string } = {
    bullterrier: "Bull Terrier",
    austreliancattledog: "Australian Cattle Dog",
    germanshepherd: "German Shepherd",
    stbernard: "St Bernard",
    greatdane: "Great Dane",
    cattledog: "Cattle Dog",
    mexicanhairless: "Mexican Hairless",
  };

  const formattedBreeds: string[] = [];
  const breedLookup: { [key: string]: string } = {};

  breeds.forEach((breed) => {
    const lowerBreed = breed.toLowerCase();
    const formattedBreed =
      compoundWords[lowerBreed] || nlp(breed).toTitleCase().out();

    formattedBreeds.push(formattedBreed);
    breedLookup[formattedBreed] = breed;
  });

  return { formattedBreeds, breedLookup };
}
