import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { fetchDogImage } from "../api/dog";
import BreedAutocomplete from "./breedAutocomplete";
import ImageContainer from "./imageContainer";
import { useBreeds } from "../hooks/useBreeds";

const SearchBox = () => {
  const { breeds, breedLookup } = useBreeds();
  const [value, setValue] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const onSuggestionSelected = async (formattedBreed: string | null) => {
    if (formattedBreed) {
      const originalBreed = breedLookup[formattedBreed];
      const image = await fetchDogImage(originalBreed.toLowerCase());
      setImageUrl(image);
    }
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 360, mx: "auto", mt: 5 }}>
      <Typography variant="h5" sx={{ mb: 2, textAlign: "center" }}>
        Find a Dog
      </Typography>
      <BreedAutocomplete
        breeds={breeds}
        value={value}
        inputValue={inputValue}
        onChange={(newValue) => {
          setValue(newValue);
          onSuggestionSelected(newValue);
        }}
        onInputChange={(newInputValue) => setInputValue(newInputValue)}
      />
      <ImageContainer imageUrl={imageUrl} />
    </Box>
  );
};

export default SearchBox;
