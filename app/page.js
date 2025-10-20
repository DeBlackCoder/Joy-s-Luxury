export default function Home() {
  return (
    <section className="home">
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-text">
          <h1>Shine with <span>JOY'S LUXURY</span> </h1>
          <p>
            Discover premium fashion that blends elegance, confidence, and comfort. 
            From luxury dresses to stylish bags, we help you express your sparkle every day.
          </p>
          <a href="/products" className="btn">Explore Collection</a>
        </div>
        <div className="hero-image">
          <img src="/otherimages/pageimage.jpg" alt="Fashion model" />
        </div>
      </div>

      {/* Collections Section */}
      <div className="collections">
        <h2>Our Featured Collections</h2>
        <div className="collection-grid">
          <div className="collection-card">
            <img src="/otherimages/otherClothing.jpg" alt="Clothes" />
            <h3>Clothing</h3>
            <p>Elegant dresses, tops, and casual wear — designed to make you feel confident and classy.</p>
          </div>
          <div className="collection-card">
            <img src="/otherimages/otherBags.jpeg" alt="Bags" />
            <h3>Bags</h3>
            <p>Luxury handbags and totes that elevate your outfit and showcase your unique style.</p>
          </div>
          <div className="collection-card">
            <img src="/otherimages/otherShoes2.jpg" alt="Accessories" />
            <h3>Shoes</h3>
            <p>Complete your look with trendy accessories that define elegance and charm.</p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="why-us">
        <h2>Why Choose Joy's Luxury?</h2>
        <div className="why-grid">
          <div className="why-card">
            <h3>✨ Elegant Quality</h3>
            <p>Each outfit is made from premium fabrics and crafted with attention to detail.</p>
          </div>
          <div className="why-card">
            <h3>💎 Affordable Luxury</h3>
            <p>We believe in making luxury accessible. Style shouldn’t come with a huge price tag.</p>
          </div>
          <div className="why-card">
            <h3>🚚 Fast Delivery</h3>
            <p>Shop with confidence — your order arrives quickly and beautifully packaged.</p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial">
            <p>“I love every piece I’ve bought from Joy's Luxury — it makes me feel confident!”</p>
            <span>- Jessica, Lagos</span>
          </div>
          <div className="testimonial">
            <p>“The quality of their handbags is unmatched. I get compliments all the time!”</p>
            <span>- Amaka, Port Harcourt</span>
          </div>
          <div className="testimonial">
            <p>“Stylish, elegant, and comfortable — my go-to brand for classy outfits.”</p>
            <span>- Faith, Abuja</span>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta">
        <h2>Step Into Your Sparkle</h2>
        <p>Join the Joy's Luxury family today — shop your next favorite outfit.</p>
        <a href="/products" className="btn">Shop Now</a>
      </div>
    </section>
  );
}
