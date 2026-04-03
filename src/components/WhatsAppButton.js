import React from "react";
import { MessageCircle } from "lucide-react";
import "../styles/WhatsAppButton.css";

const WhatsAppButton = () => {
  const phoneNumber = "256773874765";
  const message = "Hi Fiona! I found your portfolio and would like to connect.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-premium-float"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={30} />
      <span className="whatsapp-tooltip">Chat with me</span>
    </a>
  );
};

export default WhatsAppButton;
