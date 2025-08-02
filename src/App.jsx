// import { useState, useEffect } from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import HomePage from './pages/HomePage'
// import BirthdayCountdown from './pages/BirthdayCountdown'
// import SpecialWishes from './pages/SpecialWishes'
// import Memories from './pages/Memories'
// import CakeCelebration from './pages/CakeCelebration'
// import GiftWrapper from './pages/GiftWrapper'
// import Navigation from './components/Navigation'
// import PageTransition from './components/PageTransition'

// function App() {
//   const [countdownFinished, setCountdownFinished] = useState(false)

//   const checkCountdown = () => {
//     const targetDate = new Date('2024-08-10T00:00:00')
//     const now = new Date()
//     if (now >= targetDate) {
//       setCountdownFinished(true)
//     }
//   }

//   useEffect(() => {
//     checkCountdown()
//     const timer = setInterval(checkCountdown, 1000)
//     return () => clearInterval(timer)
//   }, [])

//   return (
//     <Router>
//       <div className="min-h-screen font-sans pb-24"> {/* ✅ Padding bottom ditambahkan */}
//         <Navigation />
//         <Routes>
//           <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
//           <Route path="/countdown" element={<PageTransition><BirthdayCountdown /></PageTransition>} />
//           <Route path="/wishes" element={<PageTransition><SpecialWishes /></PageTransition>} />
//           <Route path="/memories" element={<PageTransition><Memories /></PageTransition>} />
//           <Route 
//             path="/gift" 
//             element={
//               <PageTransition><GiftWrapper /></PageTransition>
//             } 
//           />
//           <Route 
//             path="/celebration" 
//             element={
//               countdownFinished ? 
//               <PageTransition><CakeCelebration /></PageTransition> : 
//               <PageTransition><BirthdayCountdown showMessage={true} /></PageTransition>
//             } 
//           />
//         </Routes>
//       </div>
//     </Router>
//   )
// }

// export default App

import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import BirthdayCountdown from './pages/BirthdayCountdown'
import SpecialWishes from './pages/SpecialWishes'
import Memories from './pages/Memories'
import CakeCelebration from './pages/CakeCelebration'
import GiftWrapper from './pages/GiftWrapper'
import ReplyPage from './pages/ReplyPage' // Added this line
import Navigation from './components/Navigation'
import PageTransition from './components/PageTransition'

function App() {
  const [countdownFinished, setCountdownFinished] = useState(false)

  // Check if countdown is finished (August 10, 2025)
  const checkCountdown = () => {
    const targetDate = new Date('2025-08-10T00:00:00')
    const now = new Date()
    if (now >= targetDate) {
      setCountdownFinished(true)
    }
  }

  useEffect(() => {
    checkCountdown()
    const timer = setInterval(checkCountdown, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <Router>
      <div className="min-h-screen font-sans pb-24"> {/* ✅ Padding bottom ditambahkan */}
        <Navigation />
        <Routes>
          <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
          <Route path="/countdown" element={<PageTransition><BirthdayCountdown /></PageTransition>} />
          <Route path="/wishes" element={<PageTransition><SpecialWishes /></PageTransition>} />
          <Route path="/memories" element={<PageTransition><Memories /></PageTransition>} />
          <Route path="/gift" element={<PageTransition><GiftWrapper /></PageTransition>} />
          {/* Added this new route */}
          <Route path="/reply" element={<PageTransition><ReplyPage /></PageTransition>} />
          <Route 
            path="/celebration" 
            element={
              countdownFinished ? 
              <PageTransition><CakeCelebration /></PageTransition> : 
              <PageTransition><BirthdayCountdown /></PageTransition>
            } 
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App