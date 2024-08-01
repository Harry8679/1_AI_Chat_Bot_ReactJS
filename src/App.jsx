// import './App.css'
import { useState } from 'react'
import ChatBotApp from './Components/ChatBotApp'
import ChatBotStart from './Components/ChatBotStart';
// import ChatBotStart from './Components/ChatBotStart'

const App = () => {
  const [isChatting, setIsChatting] = useState(false);
  const [chats, setChats] = useState([]);

  const handleStartChat = () => {
    setIsChatting(true);

    if (chats.length === 0) {
      const newChat = {
        id: `Chat ${new Date().toLocaleDateString('en-GB')} ${new Date().toLocaleTimeString()}`,
        messages: []
      }
      setChats([newChat]);
    }
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
