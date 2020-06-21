import React from "react";
import Button from "@material-ui/core/Button";

export default function CustomButton({ text }) {
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        disableElevation
        style={{
          maxHeight: "30px"
        }}
      >
        {text}
      </Button>
    </div>
  );
}
