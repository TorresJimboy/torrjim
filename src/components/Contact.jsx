export default function Contact() {
  return (
<section id="contact">
    <div className="contact container">
      <div>
        <h1 className="section-title gradient-text slide-up">Contact info</h1>
      </div>
      <div className="contact-items">
        <a href="tel:+639199516857" className="contact-item">
          <img src="./img/phone.png" alt="" />
          <div className="contact-info">
            <h1>Phone</h1>
            <h2>+63 919 951 6857</h2>
          </div>
        </a>
        <a href="mailto:torresguarino17@gmail.com" className="contact-item">
          <img src="./img/mail.png" alt="Email icon" />
          <div className="contact-info">
            <h1>Email</h1>
            <h2>torresguarino17@gmail.com</h2>
          </div>
        </a>
        <a href="https://www.google.com/maps/search/?api=1&query=North+Fairview+Quezon+City+Philippines" target="_blank" rel="noopener noreferrer"
          className="contact-item">
          <img src="./img/home1.png" alt="" />
          <div className="contact-info">
            <h1>Address</h1>
            <h2>North Fairview, Quezon City, Philippines</h2>
          </div>
        </a>
      </div>
    </div>
  </section>
  );
}
