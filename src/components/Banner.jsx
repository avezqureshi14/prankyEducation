import React from 'react';

const BannerSection = () => {
  const handleButtonClick = () => {
    const section = document.getElementById('section-to-scroll');
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="overlay"></div>
      <section className="site-title">
        <div className="site-background" data-aos="fade-up" data-aos-delay="100">
          <h3>Place where Dreams come True</h3>
          <h1>Sinhgad Academy of Engineering</h1>
          <button className="btn" onClick={handleButtonClick}>Explore</button>
        </div>
      </section>
      <section id="section-to-scroll" style={{ height: '10px' }}>
        {/* Content of the section you want to scroll to */}
      </section>
    </>
  );
};

export default BannerSection;
