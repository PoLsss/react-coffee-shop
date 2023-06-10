import '../style/web_cafe.css'
import '../style/slide.css'
import '../style/contentslider.css'
import { ThemeContext } from './ThemeContext';
import React, {useContext} from 'react';

const Footer = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  return (
    <footer id="footer" className="footext" style={{backgroundColor: theme}}>
      <section id="link">
        <a href="../template/hours.html">Hours</a> |
        <a href="../template/news.html">News</a> |
        <a href="../template/products.html">Product</a> |
        <a href="../template/services.html">Services</a> |
        <a href="../template/feedback.html">Survey & Feedback</a>
      </section>
      <section id="copyright">
        &copy; 2023
      </section>
    </footer>
  );
};

export default Footer;
