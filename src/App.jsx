// import './App.css'
import { useState } from 'react'
import ChatBotApp from './Components/ChatBotApp'
import ChatBotStart from './Components/ChatBotStart';
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
      {isChatting ? (
        <ChatBotApp onGoBack={handleGoBack} />
      ) : (
        <ChatBotStart onStartChat={handleStartChat} />
      )}
      <ChatBotApp />
    </div>
  )
}

export default App
