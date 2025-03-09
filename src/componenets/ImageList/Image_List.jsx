import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Box, Typography } from '@mui/material';

export default function Image_List() {
  return (<>
  <Typography variant="h4" sx={{paddingLeft:"30px", paddingTop:"20px"}}>SHOP BY CATEGORY</Typography>
    <ImageList sx={{ width: "100%", padding:"40px 30px" , borderBottom: "4px solid #000"}} cols={4} rowHeight={230} gap={15}>
      {itemData.map((item) => (
        <Box sx={{ display: "flex", justifyContent: "center" , backgroundColor: "#fafafa" , padding: "10px"}}>
        <ImageListItem key={item.img} >
          <img
          style={{ width: "180px", height: "180px" , objectFit: "cover"}}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            sx={{
              textAlign: "center"
            }}
            title={item.title}
            position="below"
          />
        </ImageListItem>
        </Box>
      ))}
    </ImageList>
    </>
  );
}

const itemData = [
  {
    img: 'https://images.eq3.com/homepage/US_EN/featured-category/6b288bb2-3fa4-456a-80bc-fbb672e04ea3.png',
    title: 'Ready to Ship Upholstery',
  },
  {
    img: 'https://images.eq3.com/homepage/US_EN/featured-category/5e328e25-4634-45d2-a64b-3593ecca2dcd.png',
    title: 'Dining',
  },
  {
    img: 'https://images.eq3.com/homepage/US_EN/featured-category/a3ef7912-bdbf-4f02-a572-7a41d5fea05d.png',
    title: 'Storage Beds',
  },
  {
    img: ' https://images.eq3.com/homepage/US_EN/featured-category/c0872078-79fe-4675-81dd-0ddcdbe743d4.png',
    title: 'Lighting',
  },
  {
    img: 'https://images.eq3.com/homepage/US_EN/featured-category/707538ba-84a4-4968-95d4-31a4604c5796.png',
    title: 'Accent Tabels',
  },
  {
    img: 'https://images.eq3.com/homepage/US_EN/featured-category/a6730147-277e-47d0-8be2-bb9a517da317.png',
    title: 'Rugs',
  },
  {
    img: 'https://images.eq3.com/homepage/US_EN/featured-category/70131eb9-8bc1-496c-94b7-6e1a8b14b78a.png',
    title: 'Bar & Counter Stols',
  },
  {
    img: ' https://images.eq3.com/homepage/US_EN/featured-category/cedee41a-26ee-45c2-9fb0-cc564753dc7c.png',
    title: 'Accent Stools',
  },
  {
    img: ' https://images.eq3.com/homepage/US_EN/featured-category/398e4550-abb1-4722-8975-3678b3200f48.png',
    title: 'Accessories',
  },
  {
    img: ' https://images.eq3.com/homepage/US_EN/featured-category/b3fa3943-25fb-4d32-b895-16c1b1a14c22.png',
    title: 'Accent Chairs',
  },
  {
    img: 'https://images.eq3.com/homepage/US_EN/featured-category/8ff511dc-4791-423a-acf7-b42fa222f2d7.png',
    title: 'Outdoor',
  },
  {
    img: ' https://images.eq3.com/homepage/US_EN/featured-category/b0add484-52bf-40ea-b320-a1e5c4ffadd3.png',
    title: 'Media & Storage',
  },
];
