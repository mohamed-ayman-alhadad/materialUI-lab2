import { Box, Button, Stack } from "@mui/material";
import React from "react";

export default function CenterSection() {
  const items = [
    {
      image:
        "https://images.eq3.com/homepage/US_EN/must-have/d11c2227-942c-409f-86ff-e0d13fc62bea.jpg",
      title: "AS LOW AS 0% APR FINANCING UPON APPROVAL WITH AFFIRM",
      description:
        "Affirm provides flexible payment solutions, allowing you to buy better and pay over time.",
      BtnText: "Learn More",
    },
    {
      image:
        "https://images.eq3.com/homepage/US_EN/must-have/58b23475-689f-451a-918c-d0477c870ec8.jpg",
      title: "CHOOSE WITH CONFIDENCE",
      description:
        "Remove the guesswork in choosing your upholstery design by ordering complimentary swatches.",
      BtnText: "Order Swatches",
    },
    {
      image:
        "https://images.eq3.com/homepage/US_EN/must-have/fd5e217b-e34b-4e36-92c6-0f3854923efc.jpg",
      title: "Complimentary Design Services",
      description: "Let's create your dream space together",
      BtnText: "Book a Consultation ",
    },
  ];
  return (
    <>
      <Stack direction="column" spacing={6} padding={4}>
        {items.map((item, index) => {
          if (index % 2 !== 0) {
            return (
              <Box sx={{ display: "flex" }}>
                <div
                  style={{
                    width: "50%",
                    padding: "100px",
                    backgroundColor: "#f5f5f5",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: "20px",
                  }}
                >
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                  <Button
                    style={{
                      backgroundColor: "#000",
                      borderRadius: "5px",
                      color: "#fff",
                      padding: "10px 20px",
                      width: "fit-content",
                    }}
                  >
                    {item.BtnText}
                  </Button>
                </div>
                <div style={{ width: "50%" }}>
                  <img src={item.image} alt="" style={{ width: "100%" }} />
                </div>
              </Box>
            );
          } else {
            return (
              <Box sx={{ display: "flex" }}>
                <div style={{ width: "50%" }}>
                  <img src={item.image} alt="" style={{ width: "100%" }} />
                </div>
                <div
                  style={{
                    width: "50%",
                    padding: "100px",
                    backgroundColor: "#f5f5f5",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: "20px",
                  }}
                >
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                  <Button
                    style={{
                      backgroundColor: "#000",
                      borderRadius: "5px",
                      color: "#fff",
                      padding: "10px 20px",
                      width: "fit-content",
                    }}
                  >
                    {item.BtnText}
                  </Button>
                </div>
              </Box>
            );
          }
        })}
      </Stack>
    </>
  );
}
