import React, { useEffect, useRef } from 'react';
import '../style/web_cafe.css';
import '../style/slide.css';
import '../style/contentslider.css';
import {featuredcontentslider} from '../scripts/contentslider.js';

const BlackCoffeePage = () => {
    const sliderRef = useRef(null);

    useEffect(() => {
        featuredcontentslider.init({
            id: 'slider2',
            contentsource: ['inline', ''],
            toc: 'markup',
            nextprev: ['Previous', 'Next'],
            revealtype: 'click',
            enablefade: [true, 0.2],
            autorotate: [true, 3000],
            onChange: function (previndex, curindex, contentdivs) { },
        });
    }, []);
    return (
        <main>
            <section id="content">
                <header>
                    Black Coffee
                </header>
                <div style={{ width: '100%', height: '300px' }}>
                    <div className="buy">
                        <form>
                            <input type="number" name="number" id="number" min="1" value="1" className="txt" style={{ width: '35px' }} />
                            <select className="txt" id="select">
                                <option value="S" style={{ color: '#4B2802' }}>$2.0 (S)</option>
                                <option value="M" style={{ color: '#4B2802' }}>$2.5 (M)</option>
                                <option value="L" style={{ color: '#4B2802' }}>$3.0 (L)</option>
                            </select>
                            <input type="submit" className="but" value="Buy" />
                        </form>
                    </div>
                    <div id="slider2" className="sliderwrapper">
                        <div className="contentdiv" >
                            <img src="../images/black-coffee.jpg" alt="" className='img-ml'/>
                        </div>
                        <div className="contentdiv">
                            <img src="../images/cafe-breve.jpg" alt=""className='img-ml' />
                        </div>
                        <div className="contentdiv">
                            <img src="../images/espresso-coffee.jpg" alt="" className='img-ml'/>
                        </div>
                    </div>
                    <div id="paginate-slider2" className="pagination">
                        <a href="#" className="toc">
                            <img src="../images/black-coffee.jpg" width="80" height="55" alt="" />
                        </a>
                        <a href="#" className="toc anotherclass">
                            <img src="../images/cafe-breve.jpg" width="80" height="55" alt="" />
                        </a>
                        <a href="#" className="toc">
                            <img src="../images/espresso-coffee.jpg" width="80" height="55" alt="" />
                        </a>
                        <a href="#" className="prev" style={{ marginLeft: '10px' }}></a>
                        <a href="#" className="next"></a>
                    </div>
                    <div ref={sliderRef}></div>
                </div>
                <br />
                <div>
                    <h2>
                        Benefits &amp; Effects
                    </h2>
                    <p>
                        You may love your <b>black coffee</b> in the morning to help you feel energized and get ready
                        for the day, but how much do you know about it? Do you know how drinking <b>black coffee</b> affects your
                        body and your mind? Are you aware of the benefits of <b>black coffee</b> and its side effects?
                    </p>
                    <p>
                        <b>Black coffee</b> is simply coffee that is normally brewed without the addition of additives
                        such as sugar, milk, cream, or added flavors. While it has a slightly bitter taste compared to when it is
                        flavored with additives, many people love a strong cup of <b>black coffee</b>. In fact, for some, it is
                        part of their everyday diet.
                    </p>
                    <p>
                        In this article, we talk about the benefits of drinking <b>black coffee</b>, how it can help you
                        in losing weight, potential side effects, as well as how to make the perfect cup of <b>black coffee</b>.
                    </p>
                </div>
            </section>
        </main>
    );
};

export default BlackCoffeePage;
