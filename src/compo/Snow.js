import React, { useEffect } from 'react';

const ie4up = document.all ? 1 : 0;
const ns6up = document.getElementById && !document.all ? 1 : 0;
const snowsrc = "../images/snow.gif";
const SnowAnimation = () => {
  useEffect(() => {
    const no = 10;
    const snowsrc = "../images/snow.gif";
    const hidesnowtime = 0;
    const snowdistance = "pageheight";
    const ie4up = document.all ? 1 : 0;
    const ns6up = document.getElementById && !document.all ? 1 : 0;

    function iecompattest() {
      return document.compatMode && document.compatMode !== "BackCompat"
        ? document.documentElement
        : document.body;
    }

    let dx = [];
    let xp = [];
    let yp = [];
    let am = [];
    let stx = [];
    let sty = [];
    let i;
    let doc_width = 800;
    let doc_height = 600;

    if (ns6up) {
      doc_width = window.innerWidth;
      doc_height = window.innerHeight;
    } else if (ie4up) {
      doc_width = iecompattest().clientWidth;
      doc_height = iecompattest().clientHeight;
    }

    dx = new Array(no);
    xp = new Array(no);
    yp = new Array(no);
    am = new Array(no);
    stx = new Array(no);
    sty = new Array(no);

    for (i = 0; i < no; ++i) {
      dx[i] = 0;
      xp[i] = Math.random() * (doc_width - 50);
      yp[i] = Math.random() * doc_height;
      am[i] = Math.random() * 20;
      stx[i] = 0.02 + Math.random() / 10;
      sty[i] = 0.7 + Math.random();
    }

    let snowtimer;

    function snowIE_NS6() {
      doc_width = ns6up
        ? window.innerWidth - 10
        : iecompattest().clientWidth - 10;
      doc_height =
        window.innerHeight && snowdistance === "windowheight"
          ? window.innerHeight
          : ie4up && snowdistance === "windowheight"
            ? iecompattest().clientHeight
            : ie4up && !window.opera && snowdistance === "pageheight"
              ? iecompattest().scrollHeight
              : iecompattest().offsetHeight;

      if (snowdistance === "windowheight") {
        doc_height = window.innerHeight || iecompattest().clientHeight;
      } else {
        doc_height = iecompattest().scrollHeight;
      }

      for (i = 0; i < no; ++i) {
        yp[i] += sty[i];
        if (yp[i] > doc_height - 50) {
          xp[i] = Math.random() * (doc_width - am[i] - 30);
          yp[i] = 0;
          stx[i] = 0.02 + Math.random() / 10;
          sty[i] = 0.7 + Math.random();
        }
        dx[i] += stx[i];
        const dotElement = document.getElementById("dot" + i);
        if (dotElement) {
          dotElement.style.top = yp[i] + "px";
          dotElement.style.left = xp[i] + am[i] * Math.sin(dx[i]) + "px";
        }
      }
      snowtimer = setTimeout(snowIE_NS6, 10);
    }

    function hidesnow() {
      if (snowtimer) clearTimeout(snowtimer);
      for (i = 0; i < no; i++) {
        const dotElement = document.getElementById("dot" + i);
        if (dotElement) {
          dotElement.style.visibility = "hidden";
        }
      }
    }

    if (ie4up || ns6up) {
      snowIE_NS6();
      if (hidesnowtime > 0) {
        setTimeout(hidesnow, hidesnowtime * 1000);
      }
    }

    return () => {
      if (snowtimer) clearTimeout(snowtimer);
    };
  }, []);

  return (
    <div>
      {Array.from({ length: 10 }, (_, i) => (
        <div
          key={i}
          id={`dot${i}`}
          style={{
            position: 'absolute',
            zIndex: i,
            visibility: 'visible',
            top: '15px',
            left: '15px',
          }}
        >
          {ie4up || ns6up ? (
            <a >
              <img src={snowsrc} border="0" alt="snow" />
            </a>
          ) : (
            <img src={snowsrc} border="0" alt="snow" />
          )}
        </div>
      ))}
    </div>
  );
};

export default SnowAnimation;
