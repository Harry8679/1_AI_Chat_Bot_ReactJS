// import './App.css'
import { useState } from 'react'
import ChatBotApp from './Components/ChatBotApp'
// import ChatBotStart from './Components/ChatBotStart'

const App = () => {
  const [isChatting, setIsChatting] = useState(false);

  const handleStartChat = () => {
    setIsChatting(true);
  }

  const handleGoBack = () => {
    setIsChatting(false);
  }

  return (
    <div className='container'>
      {/* <ChatBotStart /> */}
      <ChatBotApp />
    </div>
  )
}

export default App
