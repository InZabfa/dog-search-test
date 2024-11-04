import React from "react";
import { Autocomplete, TextField, Box } from "@mui/material";

interface BreedAutocompleteProps {
  breeds: string[];
  value: string | null;
  inputValue: string;
  onChange: (breed: string | null) => void;
  onInputChange: (input: string) => void;
}

const BreedAutocomplete: React.FC<BreedAutocompleteProps> = ({
  breeds,
  value,
  inputValue,
  onChange,
  onInputChange,
}) => {
  const filterBreeds = (input: string) =>
    input.length <= 1
      ? breeds
      : breeds.filter((breed) =>
          breed.toLowerCase().includes(input.toLowerCase())
        );

  return (
    <Autocomplete
      options={filterBreeds(inputValue)}
      value={value}
      onChange={(_, newValue) => onChange(newValue as string | null)}
      inputValue={inputValue}
      onInputChange={(_, newInputValue) => onInputChange(newInputValue)}
      renderInput={(params) => (
        <TextField
          {...params}
          fullWidth
          color="secondary"
          size="medium"
          label="Search by dog breed"
          variant="outlined"
        />
      )}
      renderOption={(props, option) => (
        <Box component="li" {...props} key={option} sx={{ "& > img": { mr: 2, flexShrink: 0 } }}>
          {option}
        </Box>
      )}
    />
  );
};

export default BreedAutocomplete;
