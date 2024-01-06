"use client";

import React from "react";
import Lottie, { Options } from "react-lottie";

interface LottieControlProps {
  animationData: Options["animationData"];
}

export default class LottieControl extends React.Component<LottieControlProps> {
  // set initial state property

  // state = { isPaused: true };

  render() {
    // add default lottie options
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: this.props.animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return (
      <div
      // onMouseEnter={() => this.setState({ isPaused: false })}
      // onMouseLeave={() => this.setState({ isPaused: true })}
      >
        {/* add Lottie component */}
        <Lottie
          options={defaultOptions}
          height={400}
          width={400}
          // isPaused={this.state.isPaused}
        />
      </div>
    );
  }
}
