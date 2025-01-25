import React from 'react';

const navbar = () => {
  const links = ['Home', 'About', 'Service', 'Contact Us'];
  return (
    <nav
      className="flex justify-between items-center w-[600px] border-white border absolute top-5 rounded-full
    px-10 h-12 left-1/2 -translate-x-1/2"
    >
      <div className="logo text-white">
        {<h1 className="text-2xl">First</h1>}
      </div>
      <div id="link" className="flex justify-between items-center gap-5">
        {links.map((e, i) => (
          <a href="" key={i} className="text-white">
            <h2>{e}</h2>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default navbar;
