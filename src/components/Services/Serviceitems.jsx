import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import serviceitems from "../../data/serviceitems.json";

const Serviceitems = () => {
  
  

  return (
  <div>
      <div className="flex flex-col  items-center  mb-20 mt-20">
        <button className=" text-xm bg-gradient-to-tr from-custom-red to-custom-orange w-[90px] px-4 rounded-full ">
          Our Services
        </button>
      </div>

      <div className="flex items-center justify-between m-20 ">

        
          {serviceitems.map((item, index) => (
            <Card
              key={index}
              sx={{
                maxWidth: 280,
                margin: 1,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                component="img"
                sx={{ height: 200 }}
                image={item.image}
                alt={item.title}
              />
              <CardContent
                sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
              >
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Box sx={{ maxHeight: 100, overflow: "auto" }}>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
       
      </div>
    </div>
  );
};

export default Serviceitems;
