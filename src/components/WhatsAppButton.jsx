const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919876543210?text=Hello%20N-Bazar%20Team,%20I%20need%20help"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 bg-green-500 hover:bg-green-600
                 text-white p-4 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-transform
                 hover:scale-110"
    >
      <i className="fab fa-whatsapp text-2xl"></i>
    </a>
  );
};

export default WhatsAppButton;
