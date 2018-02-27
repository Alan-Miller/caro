import React from 'react';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import one from './imgs/one.jpg'
import two from './imgs/two.jpg'

export default class SimpleSlider extends React.Component {
  render () {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Slider {...settings}>
        <div className="imrg"><img height="200" src={one}/></div>
        <div className="imrg"><img height="200" src={two}/></div>
        <div className="imrg"><h3>4</h3></div>
        <div className="imrg"><h3>5</h3></div>
        <div className="imrg"><h3>6</h3></div>
      </Slider>
    );
  }
}