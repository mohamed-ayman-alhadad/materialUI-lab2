import { Box, Container, Typography } from "@mui/material";
import React from "react";

export default function Landing() {
  return (
    <>
      <Box sx={{ padding: "50px 30px", maxWidt: "100vw" , borderBottom: "4px solid  #000" }}>
        <Box sx={{ position: "relative" }}>
          <img
            style={{ width: "100%", height: "100%" , objectFit: "cover"}}
            src="https://images.eq3.com/image-service/086b8e80-dedb-41b1-a158-f3020044e4f8/eq3-marcel-walnut-bundle_COMPRESSED.jpg"
          />
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              height: "99.5%",
              backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5))",
              top: "0",
              left: "0",
            }}
          ></Box>
          <Typography variant="h3" color="#fff" sx={{ position: "absolute", top: "80%", left: "50%", transform: "translate(-50%)" , width: "60%" , textAlign: "center"}}>INTRODUCING EQ3 BUNDELS</Typography>
          <Typography variant="h5" color="#fff" sx={{ position: "absolute", top: "90%", left: "50%", transform: "translate(-50%)", width: "60%", textAlign: "center" }}>
            Enjoy exclusive savings when you purchase design pairings, created by EQ3.
          </Typography>
        </Box>
      </Box>
    </>
  );
}
