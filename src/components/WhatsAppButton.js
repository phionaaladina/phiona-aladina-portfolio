import React from "react";
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
      {/* Official WhatsApp SVG logo */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="26"
        height="26"
        fill="white"
        aria-hidden="true"
      >
        <path d="M16.003 2.667C8.637 2.667 2.667 8.637 2.667 16c0 2.365.638 4.58 1.748 6.49L2.667 29.333l7.083-1.73A13.29 13.29 0 0 0 16.003 29.333c7.363 0 13.33-5.97 13.33-13.333 0-7.363-5.967-13.333-13.33-13.333Zm0 24.267a11.024 11.024 0 0 1-5.625-1.542l-.402-.24-4.204 1.027 1.055-4.07-.264-.42A10.98 10.98 0 0 1 5.003 16c0-6.066 4.934-11 11-11s11 4.934 11 11-4.934 11-11 11Zm6.04-8.237c-.33-.165-1.955-.964-2.258-1.074-.304-.11-.524-.165-.745.165-.22.33-.854 1.074-1.047 1.294-.192.22-.385.247-.715.082-.33-.165-1.394-.514-2.655-1.638-.981-.874-1.644-1.954-1.836-2.284-.193-.33-.021-.508.144-.673.15-.148.33-.385.495-.578.165-.192.22-.33.33-.55.11-.22.055-.413-.027-.578-.083-.165-.745-1.797-1.02-2.46-.27-.647-.543-.559-.745-.57-.192-.01-.413-.013-.634-.013-.22 0-.578.082-.88.413-.303.33-1.155 1.129-1.155 2.755s1.183 3.196 1.348 3.417c.165.22 2.327 3.553 5.64 4.983.787.34 1.402.543 1.88.695.79.251 1.51.216 2.079.131.634-.094 1.955-.799 2.231-1.57.275-.771.275-1.432.192-1.57-.082-.138-.303-.22-.633-.385Z"/>
      </svg>
      <span className="whatsapp-tooltip">Chat with me</span>
    </a>
  );
};

export default WhatsAppButton;
