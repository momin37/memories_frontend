import React from "react";
import { TextField, Grid, InputAdornment, IconButton } from "@material-ui/core";

import Visibilty from "@material-ui/icons/Visibilty";
import VisibiltyOff from "@material-ui/icons/VisibiltyOff";

const Input = ({
  half,
  name,
  handleChange,
  label,
  autoFocus,
  type,
  handleShowPassword,
}) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField
        name={name}
        onChange={handleChange}
        variant="outlined"
        required
        fullWidth
        label={label}
        autoFocus={autoFocus}
        InputProps={
          name === "password"
            ? {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword}>
                      {type === "password" ? <Visibilty /> : <VisibiltyOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }
            : null
        }
      />
    </Grid>
  );
};

export default Input;
