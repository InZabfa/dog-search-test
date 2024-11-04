import { useState, useEffect } from "react";
import { fetchBreeds } from "../api/dog";
import { formatBreedsNLP } from "../helper/breedHelper";

export const useBreeds = () => {
  const [breeds, setBreeds] = useState<string[]>([]);
  const [breedLookup, setBreedLookup] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const loadBreeds = async () => {
      const breedList = await fetchBreeds();
      const { formattedBreeds, breedLookup } = formatBreedsNLP(breedList);
      setBreeds(formattedBreeds);
      setBreedLookup(breedLookup);
    };
    loadBreeds();
  }, []);

  return { breeds, breedLookup };
};
