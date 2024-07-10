import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cartItems from "../../data/cartItems.json";

const CartCard = () => {
  
  const settings = {
    dots: false,
    infinite: false,
    autoplay: true,
    autoplaySpeed:1000,
    speed: 5000,
    slidesToShow: 4,
    slidesToScroll: 2,
  };

  return (
    <div className="w-full py-[4rem] mb-20">
      <div className="flex flex-col space-y-4 xl:flex-row xl:space-y-0 items-center justify-between">
        <button className="text-[1.1rem] bg-[#e77e0d] px-3 py-2 rounded-full font-bold text-center ml-20 mb-20">
          Add to Cart
        </button>
        <button className="text-xm bg-gradient-to-tr from-custom-red to-custom-orange w-[90px] py-2 rounded-full mr-20 mb-20">
          SEE ALL
        </button>
      </div>

      <div className="">
        <Slider {...settings}>
          {cartItems.map((item, index) => (
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
        </Slider>
      </div>
    </div>
  );
};

export default CartCard;
