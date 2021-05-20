import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import illustrations from "../Data/illustrations";

export default class IllCarousel extends Component {
  state = {
    goToSlide: 0,
  };

  slides = illustrations.map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  render() {
    return (
      <div className={this.props.darkMode ? "illusDark carousel-wrapper"  : "carousel-wrapper"}>
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={2}
          showNavigation={false}
          animationConfig={config.gentle}
        />
      </div>
    );
  }
}
