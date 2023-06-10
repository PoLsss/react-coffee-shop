import '../style/web_cafe.css'
import '../style/slide.css'
import '../style/contentslider.css'
import { ThemeContext } from '../compo/ThemeContext';

import React, {useContext} from 'react';

const About = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  return (
    <main style={{width:"80%"}}>
      <section id="content">
        <header>
          Somewhere Coffee Shop
        </header>
        <p>
          <b style={{ color: '#BC7F10' }}>Somewhere Coffee </b>Co. began as a small coffee cart on the corner of 28th and 3rd street. As the lines
          began to grow, we thought "why not open a coffee shop?" and expanded into our current location. The
          rest is Somewhere in history. We have been in the coffee business for 8 years and are masters at our
          craft. We select only the finest beans to go into our blends and strive for excellence in customer
          satisfaction. We offer quiet nooks for sipping and reading your favorite book, catching up with old
          friends or simply enjoying a cup outside and watching the world go by.<br />
          Whatever your coffee conundrum commands, find it at Somewhere.
        </p>
        <h2>
          NEW Maui Wauwi Blends!
        </h2>
        <p>
          Straight from the sun-drenched fields of Hawaii, we are proud to bring you the very best. Our new
          Maui Wauwi blend combines the subtle Sumatra aroma with the bold taste of Kona in one single
          satisfying cup. For a limited time only.
        </p>
        <p>
          <img src="../images/cafe-breve.jpg" width="300" height="225" alt="" className="img_50" />
        </p>
      </section>
    </main>
  );
};

export default About;
