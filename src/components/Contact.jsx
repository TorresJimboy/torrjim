export default function Contact() {
  return (
<section id="contact" aria-labelledby="contact-title">
    <div className="contact container">
      <div className="section-heading">
        <span className="section-eyebrow">Let's connect</span>
        <h1 id="contact-title" className="section-title gradient-text slide-up">Contact info</h1>
      </div>
      <div className="contact-items">
        <a href="tel:+639199516857" className="contact-item">
          <img src="./img/phone.png" alt="" />
          <div className="contact-info">
            <h2>Phone</h2>
            <p>+63 919 951 6857</p>
          </div>
        </a>
        <a href="mailto:torresguarino17@gmail.com" className="contact-item">
          <img src="./img/mail.png" alt="" />
          <div className="contact-info">
            <h2>Email</h2>
            <p>torresguarino17@gmail.com</p>
          </div>
        </a>
        <a href="https://www.google.com/maps/search/?api=1&query=North+Fairview+Quezon+City+Philippines" target="_blank" rel="noopener noreferrer"
          className="contact-item">
          <img src="./img/home1.png" alt="" />
          <div className="contact-info">
            <h2>Address</h2>
            <p>North Fairview, Quezon City, Philippines</p>
          </div>
        </a>
      </div>
    </div>
  </section>
  );
}
