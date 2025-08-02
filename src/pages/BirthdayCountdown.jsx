import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import VidioCount from "../assets/videos/birthday-wish.mp4"

const BirthdayCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [replyMessage, setReplyMessage] = useState("");
  const navigate = useNavigate();

  // Set the target date - August 10, 2025
  const targetDate = new Date("2025-08-10T00:00:00");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleReplySubmit = (e) => {
    e.preventDefault();
    if (replyMessage.trim()) {
      const replies = JSON.parse(localStorage.getItem("birthdayReplies") || "[]");
      replies.push({
        message: replyMessage,
        date: new Date().toLocaleString()
      });
      localStorage.setItem("birthdayReplies", JSON.stringify(replies));
      setReplyMessage("");
      setShowReplyForm(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 to-purple-50 p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl"
      >
        {/* Your original content remains unchanged */}
        <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-8">
          The Birthday of <span className="text-purple-600">Tri Pratiwi</span>
        </h1>

        <div className="mb-8">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full max-w-md mx-auto rounded-lg shadow-xl"
          >
            <source src={VidioCount} />
          </video>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl text-pink-500 mb-4">Menuju Hari Spesialmu</h2>
          <div className="flex justify-center space-x-2 md:space-x-4">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <motion.div
                key={unit}
                whileHover={{ scale: 1.1 }}
                className="bg-white p-4 rounded-lg shadow-md text-center min-w-[70px]"
              >
                <div className="text-3xl font-bold text-pink-600">
                  {value.toString().padStart(2, '0')}
                </div>
                <div className="text-sm text-pink-400 uppercase">
                  {unit === 'days' ? 'hari' : 
                   unit === 'hours' ? 'jam' : 
                   unit === 'minutes' ? 'menit' : 'detik'}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
          <h3 className="text-xl font-semibold text-purple-600 mb-2">
            📅 10 Agustus 2025
          </h3>
          <p className="text-pink-500">Tanggal dimana senyumanmu akan menerangi hariku</p>
        </div>

        {/* Added message buttons */}
        <div className="flex flex-col space-y-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowReplyForm(true)}
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full shadow-lg"
          >
            💝 Tinggalkan Pesan Mu Sayang
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/reply')}
            className="bg-white text-pink-600 border border-pink-300 px-6 py-3 rounded-full shadow-lg"
          >
            📩 Lihat Pesan
          </motion.button>
        </div>
      </motion.div>

      {/* Message Form */}
      <AnimatePresence>
        {showReplyForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="bg-white rounded-xl p-6 w-full max-w-md"
            >
              <h3 className="text-xl font-bold text-pink-600 mb-4">Pesan Untuk Pacarmu</h3>
              <form onSubmit={handleReplySubmit}>
                <textarea
                  value={replyMessage}
                  onChange={(e) => setReplyMessage(e.target.value)}
                  className="w-full p-3 border border-pink-300 rounded-lg mb-4"
                  rows="4"
                  placeholder="Tulis pesan cintamu disini..."
                  required
                />
                <div className="flex justify-end space-x-3">
                  <motion.button
                    type="button"
                    onClick={() => setShowReplyForm(false)}
                    className="px-4 py-2 bg-gray-200 rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Batal
                  </motion.button>
                  <motion.button
                    type="submit"
                    className="px-4 py-2 bg-pink-500 text-white rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Kirim 💌
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BirthdayCountdown;