import '../style/web_cafe.css'
import '../style/slide.css'
import '../style/contentslider.css'

import React from 'react';

const Home = () => {
  return (
    <main style={{width:"80%"}}>
      <section id="content">
        <header>Welcome To Our Coffee Shop</header>
        <p>
          Bringing you the best coffee flavors from around the world, we specialize in organic homegrown coffee in our
          quaint little main street shop. Stay a while and relax in our coffee house atmosphere as you sip a fresh Kona
          blend from your mug and enjoy a summer breeze. Come sit on our comfy couches and curl up with some chamomile
          tea. Get lost in a book or grab an espresso to go on your way to the office.<br /> Whatever your coffee
          conundrum commands, find it at Somewhere.
        </p>
        <div className="three_colums">
          <div>
            <img src="../images/coffee1.png" alt="1" />
          </div>
          <div>
            <img src="../images/coffee2.jpg" alt="2" />
          </div>
          <div>
            <img src="../images/coffee3.jpg" alt="3" />
          </div>
        </div>
        <h2>
          <b>NEW Maui Wauwi Blends!</b>
        </h2>
        <p>
          Straight from the sun-drenched fields of Hawaii, we are proud to bring you the very best. Our new Maui Wauwi
          blend combines the subtle Sumatra aroma with the bold taste of Kona in one single satisfying cup. For a limited
          time only.
        </p>
      </section>
    </main>
  );
};

export default Home;

