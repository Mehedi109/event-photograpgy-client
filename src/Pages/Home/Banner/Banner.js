import React from "react";
import Slider from "react-slick";
import "./Banner.css";
import wedding from "../../../images/wedding.jpg";
import birthday from "../../../images/birthday.jpg";
import exibitions from "../../../images/exibitions.jfif";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    width: "300px",
  };

  return (
    <div style={{ margin: "10px" }} className="slider">
      {/* <div> */}
      <Slider
        autoplay
        autoplaySpeed={2000}
        dots
        initialSlide={2}
        infinite
        customPaging={(i) => {
          return <div></div>;
        }}
        dotsClass="slick-dots custom-indicator"
      >
        <img src={wedding} style={{ width: "100%", height: "100%" }} alt="" />
        <img src={birthday} style={{ width: "100%", height: "100px" }} alt="" />
        <img
          src={exibitions}
          style={{ width: "100%", height: "100px" }}
          alt=""
        />
      </Slider>
      {/* <h2> Single Item</h2>
      <Slider {...settings}>
        <div sx={{ width: 300 }}>
          <img src={wedding} alt="" />
        </div>
        <div>
          <img src={wedding} alt="" />
        </div>
        <div>
          <img src={wedding} alt="" />
        </div>
        <div>
          <img src={wedding} alt="" />
        </div>
      </Slider> */}
      {/* </div> */}
    </div>
  );
};

export default Banner;

// export default function Banner() {
//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };
//   return (
//     <Slider {...settings}>
//       <div>
//         <img src={wedding} alt="" />
//       </div>
//       <div>
//         <h3>2</h3>
//       </div>
//       <div>
//         <img src={wedding} alt="" />
//       </div>
//       <div>
//         <img src={wedding} alt="" />
//       </div>
//       <div>
//         <h3>5</h3>
//       </div>
//       <div>
//         <h3>6</h3>
//       </div>
//     </Slider>
//   );
// }
