import { IconButton, InputAdornment, TextField } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export const SearchBar = ({ searchString, setSearchString }) => {
  const handleClear = () => {
    setSearchString("");
  };
  return (
    <div className=" mt-4 mb-4 w-full border border-gray-300 rounded">
      <TextField
        size="small"
        variant="outlined"
        placeholder="Search"
        fullWidth
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {searchString ? (
                <IconButton onClick={handleClear}>
                  <ClearIcon />
                </IconButton>
              ) : (
                <SearchOutlinedIcon />
              )}
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};
