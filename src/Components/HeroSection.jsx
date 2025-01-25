import React from 'react';

function HeroSection() {
  return (
    <section className="w-full h-full">
      {' '}
      <video
        muted
        autoPlay
        loop
        className="w-full h-full object-center object-cover"
        src="public\6973-197914400_small.mp4"
      ></video>{' '}
    </section>
  );
}

export default HeroSection;
