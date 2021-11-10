import React from 'react';
import Lottie from 'react-lottie';

import animationData from '../../assets/restaurants-loading.json';

export default () => {
  const defaultOptions = {
    loopt: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preservAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie options={defaultOptions} />;
};
