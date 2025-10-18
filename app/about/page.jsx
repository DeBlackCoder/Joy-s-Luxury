// pages/about.jsx
import React from "react";
import joysluxurylogo from "/public/joysluxurylogo.jpg"; // update path if needed
import Image from "next/image";

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
         <Image
            src={joysluxurylogo}
            alt="Joy's Luxury Logo"
            width={120}
            height={120}
            className="rounded-full"
          />
        <h1>About JOY'S LUXURY</h1>
        <p className="tagline">Elegance Crafted for Every Personality</p>
      </header>

      <section className="about-story">
        <h2>Our Story</h2>
        <p>
          Founded with passion and purpose, <strong>Joy's Luxury</strong> began as a
          small boutique in 2022. Our mission has always been simple — to blend
          timeless design, comfort, and confidence into every piece of clothing,
          shoe, or bag we craft. From our humble beginnings, we’ve grown into a
          trusted name in fashion, bringing quality and affordability together
          for the modern trendsetter.
        </p>
        <p>
          Every thread we sew and every stitch we design reflects the beauty and
          brilliance of a diamond — unique, polished, and made to stand out.
        </p>
      </section>

      <section className="about-values">
        <h2>Our Philosophy</h2>
        <div className="value-grid">
          <div className="value-item">
            <h3>Quality</h3>
            <p>
              We prioritize top-notch materials and craftsmanship that speak for
              themselves. Every product is made to last and made to impress.
            </p>
          </div>
          <div className="value-item">
            <h3>Style</h3>
            <p>
              Our designs capture the essence of modern elegance — from chic
              streetwear to classy event outfits, we celebrate all styles.
            </p>
          </div>
          <div className="value-item">
            <h3>Affordability</h3>
            <p>
              Fashion should be accessible to everyone. We price fairly, without
              compromising on the luxury feel or quality of our products.
            </p>
          </div>
        </div>
      </section>

      <section className="about-gallery">
        <h2>Our World in Pictures</h2>
        <div className="gallery-grid">
          <img src="https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg" alt="Model in cream outfit" />
          <img src="https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg" alt="Fashion design studio" />
          <img src="https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg" alt="Accessories display" />
          <img src="/otherimages/otherclothing.jpg" alt="Designer hands working" />
        </div>
      </section>

      <section className="about-footer">
        <h2>Visit or Contact Us</h2>
        <p>
          📍 Port Harcourt, Nigeria <br />
          📞 +234 814 306 6493 <br />
          ✉️ joysluxury039@gmail.com
        </p>
        <p className="thankyou">Thank you for being part of our fashion journey 💎</p>
      </section>
    </div>
  );
};

export default About;
