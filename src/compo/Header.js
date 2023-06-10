import '../style/web_cafe.css'
import '../style/slide.css'
import '../style/contentslider.css'
import { ThemeContext } from './ThemeContext';
import { BackgContext } from './BackgroundContext';
import React, { useEffect, useState, useContext } from 'react';

const getBackgColor = (theme) => {
  if (theme === "#4e2801") {
    return {
      light: '#f0bd5e',
      native: '#bd7f10',
      dark: '#946207'
    };
  } else if (theme === "#377802") {
    return {
      light: '#80e763',
      native: '#36c223',
      dark: '#26a113'
    };
  } else {
    return {
      light: '#e599d4', 
      native: '#e15dc4', 
      dark: '#d213a9'
    };
  }
};

const Header = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  function plusSlides(n) {
    setSlideIndex((prevIndex) => (prevIndex + n) % 3);
  }

  function currentSlide(n) {
    setSlideIndex(n);
  }
  const [theme, setTheme] = useContext(ThemeContext);
  const [backg, setBackg] = useContext(BackgContext);
  const backgColors = getBackgColor(theme);

  return (
    <header id="header" style={{ backgroundColor: theme }}>
      <div className="block-left">
        <button onClick={() => { setTheme("#4e2801"); setBackg('#f0bd5e') }}>
          <img src="../images/yellow-css.jpg" alt="yellow" />
        </button>
        <button onClick={() => {setTheme("#377802"); setBackg('#80e763')}}>
          <img src="../images/green-css.jpg" alt="green" />
        </button>
        <button onClick={() => {setTheme("#bf0879"); setBackg('#e599d4')}}>
          <img src="../images/pink-css.jpg" alt="pink" />
        </button>
      </div>
      <div className="select">
        <select id="switch_mode" onChange={(event) => { setBackg(event.target.value) }}>
          <option value={backgColors.light}>Light</option>
          <option value={backgColors.native}>Native</option>
          <option value={backgColors.dark}>Dark</option>
        </select>
      </div>

      <section id="banner">
        <div className="slideshow-container">
          <div
            className={`mySlides fade ${slideIndex === 0 ? 'active' : ''}`}
            style={{ display: slideIndex === 0 ? 'block' : 'none' }} >
            <div className="numbertext">1 / 3</div>
            <img src="../images/banner1.jpg" style={{ width: '100%' }} alt="banner1" />
            <div className="sub-image ">
              <p className="sub-p ">The scent of spring invigorates her as she inhales whilst the warm breeze brings a wave of tranquility.</p>
            </div>
          </div>

          <div
            className={`mySlides fade ${slideIndex === 1 ? 'active' : ''}`}
            style={{ display: slideIndex === 1 ? 'block' : 'none' }}
          >
            <div className="numbertext">2 / 3</div>
            <img src="../images/banner2.jpg" style={{ width: '100%' }} alt="banner2" />
            <div className="sub-image">
              <p className="sub-p">
                <b><span style={{ fontSize: '22px' }}>Autumn Day</span></b>
                <br />
                The sun peaks through the trees, a knife that cuts through the chill, crisp air.
              </p>
            </div>
          </div>
          <div
            className={`mySlides fade ${slideIndex === 2 ? 'active' : ''}`}
            style={{ display: slideIndex === 2 ? 'block' : 'none' }}>
            <div className="numbertext">3 / 3</div>
            <img src="../images/banner3.jpg" style={{ width: '100%' }} alt="banner3" />
            <div className="sub-image">
              <p className="sub-p">
                <b> <span style={{ fontSize: '22px' }}>Wind Chime</span></b>
                <br />
                The bellwether of the sky, the chime speaks of impending turmoil.
              </p>
            </div>
          </div>

          <a className="prev" onClick={() => plusSlides(-1)}>
            <img src="../images/left.gif" alt="left" />
          </a>
          <a className="next" onClick={() => plusSlides(1)}>
            <img src="../images/right.gif" alt="right" />
          </a>

          <div style={{ textAlign: 'center', position: 'absolute', bottom: '0px', right: '50%' }}>
            <span className={`dot ${slideIndex === 0 ? 'active' : ''}`} onClick={() => currentSlide(0)}></span>
            <span className={`dot ${slideIndex === 1 ? 'active' : ''}`} onClick={() => currentSlide(1)}></span>
            <span className={`dot ${slideIndex === 2 ? 'active' : ''}`} onClick={() => currentSlide(2)}></span>
          </div>
        </div>
      </section>
      <section id="logo">
        <a href="#">
          <img src="../images/logo.png" width="436" height="55" alt="logo" />
        </a>
      </section>
    </header>
  );
};

export default Header;
