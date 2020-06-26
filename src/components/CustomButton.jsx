import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export default function CustomButton({ text, func, path }) {
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        disableElevation
        style={{
          maxHeight: "30px",
        }}
        onClick={func}
        component={Link}
        to={path}
      >
        {text}
      </Button>
    </div>
  );
}
