// import React from "react";

// const Contact = () => {
//   return (
//     <div style={{ fontFamily: "Poppins, sans-serif", textAlign: "center", padding: "30px" }}>

//       {/* Title */}
//       <h1 style={{ color: "#e63946", marginBottom: "10px" }}>📞 Contact Us</h1>
//       <p style={{ color: "#555", fontSize: "1.1rem", marginBottom: "30px" }}>
//         We'd love to hear from you! Reach out for reservations, feedback, or queries.
//       </p>

//       {/* Contact Info */}
//       <div style={{ marginBottom: "30px" }}>
//         <p><b>📍 Address:</b> shop no. 4 Babra chowk, Rohtak, Haryana, India</p>
//         <p><b>📞 Phone:</b> <a href="tel:+919876543210" style={{ color: "#e63946", textDecoration: "none" }}>+91 9896777679,9138338538</a></p>
//         <p><b>✉️ Email:</b> <a href="mailto:contact@swaad ka adda.com" style={{ color: "#e63946", textDecoration: "none" }}>contact@swaad ka adda.com</a></p>
//         <p><b>🕒 Opening Hours:</b> Mon - Sun: 09:00 AM – 11:00 PM</p>
//       </div>

//       {/* Contact Form */}
//       <div style={{
//         maxWidth: "500px",
//         margin: "0 auto",
//         background: "#fff",
//         padding: "20px",
//         borderRadius: "12px",
//         boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
//         marginBottom: "30px"
//       }}>
//         <h2 style={{ marginBottom: "15px" }}>Send Us a Message</h2>
//         <form>
//           <input type="text" placeholder="Your Name" required
//             style={inputStyle} /><br />
//           <input type="email" placeholder="Your Email" required
//             style={inputStyle} /><br />
//           <textarea placeholder="Your Message" rows="4" required
//             style={{ ...inputStyle, height: "80px" }}></textarea><br />
//           <button type="submit" style={{
//             background: "#e63946",
//             color: "white",
//             padding: "10px 20px",
//             border: "none",
//             borderRadius: "8px",
//             cursor: "pointer",
//             fontSize: "1rem"
//           }}>Send</button>
//         </form>
//       </div>

//       {/* Google Map */}
//       <div style={{ marginBottom: "30px" }}>
//         <h2>📍 Find Us</h2>
//         <iframe
//           title="Google Map"
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3492.9024552380843!2d76.5738135!3d28.9012466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d85166bcb7ac1%3A0x2e2c19d83f56f9d4!2zU3dhZCDgpJXgpL4gYWRkYQ!5e0!3m2!1sen!2sin!4v1758265548079!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
//           width="100%"
//           height="300"
//           style={{ border: 0, borderRadius: "12px" }}
//           allowFullScreen=""
//           loading="lazy"
//         ></iframe>
//       </div>

//       {/* Social Media Links */}
//       <div>
//         <h2>🤝 Connect With Us</h2>
//         <a href="https://instagram.com" target="_blank" rel="noreferrer" style={iconStyle}>📷</a>
//         <a href="https://facebook.com" target="_blank" rel="noreferrer" style={iconStyle}>👍</a>
//         <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" style={iconStyle}>💬</a>
//       </div>
//     </div>
//   );
// };

// // Inline styles for inputs
// const inputStyle = {
//   width: "90%",
//   padding: "10px",
//   margin: "8px 0",
//   border: "1px solid #ccc",
//   borderRadius: "8px",
//   fontSize: "1rem"
// };

// // Inline styles for social icons
// const iconStyle = {
//   margin: "0 10px",
//   fontSize: "2rem",
//   textDecoration: "none"
// };

// export default Contact;

import React from "react";

const Contact = () => {
  return (
    <div style={{ fontFamily: "Poppins, sans-serif", textAlign: "center", padding: "30px" }}>

      <h1 style={{ color: "#e63946", marginBottom: "10px" }}>📞 Contact Us</h1>
      <p style={{ color: "#555", fontSize: "1.1rem", marginBottom: "30px" }}>
        We'd love to hear from you! Reach out for reservations, feedback, or queries.
      </p>

      <div style={{ marginBottom: "30px" }}>
        <p><b>📍 Address:</b> shop no. 4 Babra chowk, Rohtak, Haryana, India</p>
        <p><b>📞 Phone:</b>
          <a href="tel:+919896777679" style={{ color: "#e63946", textDecoration: "none" }}>
            +91 9896777679, 9138338538
          </a>
        </p>
        <p><b>✉️ Email:</b>
          <a href="mailto:contact@swaadkaadda.com" style={{ color: "#e63946", textDecoration: "none" }}>
            contact@swaadkaadda.com
          </a>
        </p>
        <p><b>🕒 Opening Hours:</b> Mon - Sun: 09:00 AM – 11:00 PM</p>
      </div>

      <div style={{
        maxWidth: "500px",
        margin: "0 auto",
        background: "#fff",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        marginBottom: "30px"
      }}>
        <h2 style={{ marginBottom: "15px" }}>Send Us a Message</h2>
        <form>
          <input type="text" placeholder="Your Name" required style={inputStyle} /><br />
          <input type="email" placeholder="Your Email" required style={inputStyle} /><br />
          <textarea placeholder="Your Message" rows="4" required style={{ ...inputStyle, height: "80px" }}></textarea><br />
          <button type="submit" style={{
            background: "#e63946",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "1rem"
          }}>
            Send
          </button>
        </form>
      </div>

      {/* ✅ Fixed Google Map */}
      <div style={{ marginBottom: "30px" }}>
        <h2>📍 Find Us</h2>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3492.9024552380843!2d76.5738135!3d28.9012466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d85166bcb7ac1%3A0x2e2c19d83f56f9d4!2zU3dhZCDgpJXgpL4gYWRkYQ!5e0!3m2!1sen!2sin!4v1758265548079!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0, borderRadius: "12px" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div>
        <h2>🤝 Connect With Us</h2>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" style={iconStyle}>📷</a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer" style={iconStyle}>👍</a>
        <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" style={iconStyle}>💬</a>
      </div>
    </div>
  );
};

const inputStyle = {
  width: "90%",
  padding: "10px",
  margin: "8px 0",
  border: "1px solid #ccc",
  borderRadius: "8px",
  fontSize: "1rem"
};

const iconStyle = {
  margin: "0 10px",
  fontSize: "2rem",
  textDecoration: "none"
};

export default Contact;

