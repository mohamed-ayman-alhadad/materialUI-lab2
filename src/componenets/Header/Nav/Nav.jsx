import {
  Box,
  Container,
  Typography,
  Breadcrumbs,
  Link,
  Button,
} from "@mui/material";
import * as React from "react";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
export default function Nav() {
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "80px",
          backgroundColor: "#fff",
          
          borderTop: "4px solid #000",
          borderBottom: "0.5px solid lightgrey",
          margin: "0",
          padding: "0",
        }}
      >
        <Box sx={{ display: "flex", flexGrow: 1 }}>
          <Typography variant="h4">EQ3</Typography>
        </Box>
        <Box sx={{ display: "flex", flexGrow: 0 }}>
          <Breadcrumbs aria-label="breadcrumb">
            <PlaceOutlinedIcon sx={{ color: "#000", mx: 1 }} />
            <HelpOutlineOutlinedIcon sx={{ color: "#000", mx: 1 }} />
            <FavoriteBorderOutlinedIcon sx={{ color: "#000", mx: 1 }} />
            <Button
              sx={{
                display: "flex",
                alignItems: "center",
                mx: 1,
              }}
            >
              <PersonOutlineOutlinedIcon
                sx={{ color: "#000", fontSize: "28px" }}
              />
              <Typography variant="p" sx={{ ml: 1, color: "#000" }}>
                Join/Login to EQ3
              </Typography>
            </Button>
            <Button
              sx={{
                display: "flex",
                alignItems: "center",
                mx: 1,
              }}
            >
             <LanguageOutlinedIcon sx={{ color: "#000", fontSize: "28px" }}/>  
              <Typography variant="p" sx={{ ml: 1, color: "#000" }}>
                EN / USD
              </Typography>
            </Button>
            <Button
            variant="contained"
            color="black"
            sx={{
              display: "flex",
              alignItems: "center",
              mx: 1,
            }}
            >
            <ShoppingCartOutlinedIcon sx={{ color: "#000", fontSize: "28px" }}/>  
              <Typography variant="p" sx={{ ml: 1, color: "#000" }}>
                Cart (0)
              </Typography>
            </Button>
          </Breadcrumbs>
        </Box>
      </Container>
    </>
  );
}
