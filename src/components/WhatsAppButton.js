import React from "react";
import "../styles/WhatsAppButton.css";

const WhatsAppButton = () => {
  const phoneNumber = "256773874765"; // Your number without + or spaces
  const message = "Hi Fiona! I found your portfolio and would like to connect.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
};

export default WhatsAppButton;
