<script>
    export let phoneNumber = "+91-99133-82221"; // Replace with your WhatsApp number
    const whatsappLink = `https://wa.me/${phoneNumber}`;
  </script>
  
  <style>
    .whatsapp-button {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 60px;
      height: 60px;
      background-color: #25d366;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
      transition: transform 0.3s ease-in-out;
      cursor: pointer;
    }
  
    .whatsapp-button img {
      width: 35px;
      height: 35px;
    }
  
    .whatsapp-button::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: rgba(37, 211, 102, 0.5);
      animation: pulse-animation 1.5s infinite;
    }
  
    @keyframes pulse-animation {
      0% {
        transform: scale(1);
        opacity: 0.6;
      }
      50% {
        transform: scale(1.4);
        opacity: 0;
      }
      100% {
        transform: scale(1);
        opacity: 0;
      }
    }
  </style>
  
  <a class="whatsapp-button" href={whatsappLink} target="_blank" rel="noopener noreferrer">
    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
  </a>
  