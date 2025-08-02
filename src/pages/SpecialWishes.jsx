import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import vidioWishes from '../assets/videos/Wishes.mp4'

const SpecialWishes = () => {
  const [showHeart, setShowHeart] = useState(false)

  const wishes = `
Sayangku 💖, hari ini adalah momen yang paling indah karena hari ini kamu lahir ke dunia 🎉. Aku ingin berdoa agar kamu selalu dalam lindungan Tuhan 🙏, diberi kesehatan 💪, kekuatan 🛡️, dan kebahagiaan yang tiada akhir 🌈✨.

Aku tahu hidup tidak selalu mudah 🌧️, tapi aku ingin kamu tahu bahwa kamu tidak sendiri 🤝. Aku akan selalu mendukungmu 💞, menyemangati kamu 💫, dan menjadi pundakmu saat kamu lelah 😔➡️💆‍♀️.

Semoga setiap langkahmu penuh keberkahan 🕌, dan setiap impianmu satu per satu menjadi kenyataan 🌠. Kamu punya hati yang tulus 💓, senyum yang menenangkan 😊, dan jiwa yang cantik luar dalam 🌹. Dunia butuh lebih banyak orang sepertimu 🌍❤️.

Aku ingin kamu tahu bahwa aku percaya padamu sepenuhnya 🙌. Kamu kuat 💥, kamu hebat 🦋, dan kamu pantas mendapatkan yang terbaik 🏆. Jangan pernah ragukan dirimu sendiri 🙅‍♀️, karena kamu adalah cahaya dalam hidup banyak orang 🌟, termasuk hidupku 💘.

Jika suatu hari kamu merasa ragu atau takut 😟, ingatlah doaku ini: Semoga kamu selalu dikelilingi orang-orang baik 👨‍👩‍👧‍👦, rezeki yang cukup 💰, dan cinta yang tulus dari semua arah 💗. Termasuk dariku 🫶.

Aku cinta kamu ❤️, dan akan selalu mencintaimu 💍.
  `

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100 p-4 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl w-full"
      >
        <h1 className="text-4xl font-bold text-center text-pink-600 mb-8">
          Pesan Spesial Untukmu
        </h1>
        
        <div className="mb-8">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full max-w-md mx-auto rounded-lg shadow-xl"
          >
            <source src={vidioWishes} />
            Your browser does not support the video tag.
          </video>
        </div>

        <motion.div
          whileHover={{ scale: 1.01 }}
          className="bg-white bg-opacity-80 backdrop-blur-sm p-6 rounded-xl shadow-lg mb-8"
        >
          <div className="prose max-w-none">
            {wishes.split('\n').map((paragraph, i) => (
              <p key={i} className="text-pink-800 mb-4 text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>

        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowHeart(!showHeart)}
            className="bg-pink-500 text-white px-6 py-3 rounded-full shadow-lg"
          >
            {showHeart ? 'Sembunyikan Cintaku' : 'Lihat Cintaku'}
          </motion.button>
        </div>

        <AnimatePresence>
          {showHeart && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
            >
              <motion.div
                className="relative text-pink-500"
                animate={{ scale: [1, 1.1, 1], opacity: [0.9, 1, 0.9] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="text-[12rem] select-none text-center">
                  ❤️
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold drop-shadow-lg">
                  Tri Pratiwi 💖
                </div>
                <div className="text-white text-lg text-center mt-4">
                  Hanya kamu di hatiku, sayang 🥹
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default SpecialWishes
