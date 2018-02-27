import React from 'react';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import one from './imgs/one.jpg'
import two from './imgs/two.jpg'
import three from './imgs/one.jpg'
import four from './imgs/two.jpg'
import './slick.css'

export default class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500
      // centerMode: true
    };
    var images = [one, two, three, four]

    return (
      <div className="SimpleSlider">
        <Slider {...settings}>
          {images.map((img, indx) => (
            <div className="imrg" style={{ backgroundImage: `url(${img})` }}>
              {/* <h2>TEXT</h2> */}
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}