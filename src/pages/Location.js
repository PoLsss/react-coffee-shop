import '../style/web_cafe.css'
import '../style/slide.css'
import '../style/contentslider.css'

import React from 'react';

const Locations = () => {
    return (
        <main style={{width:"80%"}}>
            <section id="content">
                <header>
                    Somewhere Coffee Shop Locations
                </header>
                <p>
                    We are conveniently located in lower Manhattan with plans to expand into Brooklyn in 2013. <br />
                    292 Union Square West at 13th St. New York, New York 10003 <br />
                    Telephone: 212.555.5555
                </p>
                <h2>
                    Takeout Available | Delivery Available
                </h2>
                <p>
                    Delivery Payment: $12 minimum <br />
                    Delivery Hours: Daily, 10am-midnight
                </p>
                <p>
                    Delivery Area: 8th St. to 26th St., Second Ave. to Seventh Ave.
                </p>
                <p>
                    &nbsp;
                </p>
                <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.361915271104!2d106.66187531474422!3d10.783568262010725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ece2f381b6f%3A0x686df1ce3ba0ef3d!2sSomewHERE%20Cafe!5e0!3m2!1svi!2s!4v1638260391174!5m2!1svi!2s" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
                </div>
            </section>
        </main>
    );
};

export default Locations;
