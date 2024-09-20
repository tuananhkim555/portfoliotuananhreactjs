/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React, { useState, useContext, useEffect, useRef } from 'react';
import { AuthContext } from "../context/AuthContext";
import { BackgroundGradient } from './ui/background-gradient';
import axios from 'axios';

const AiChatbox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const { user } = useContext(AuthContext);
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
  const chatboxRef = useRef(null);

  useEffect(() => {
    if (user) {
      setMessages([{ text: "Hello, how can I help you?", isUser: false }]);
    }
  }, [user]);

  useEffect(() => {
    if (chatboxRef.current) {
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.trim()) {
      const userMessage = { text: input, isUser: true };
      setMessages(prevMessages => [...prevMessages, userMessage]);
      setInput('');

      try {
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: "You are a helpful assistant." },
            { role: "user", content: input }
          ]
        }, {
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
          }
        });

        const aiMessage = { text: response.data.choices[0].message.content, isUser: false };
        setMessages(prevMessages => [...prevMessages, aiMessage]);
      } catch (error) {
        console.error('Error calling API:', error);
        setMessages(prevMessages => [...prevMessages, { text: "Sorry, I encountered an error. Please try again.", isUser: false }]);
      }
    }
  };

  return (
    <div className={`mt-[120px] px-2 sm:px-4 md:px-0 mx-auto ${user ? 'w-full max-w-[90%] sm:max-w-[80%] md:max-w-[1000px]' : 'w-full max-w-[90%] sm:max-w-[500px]'} transition-all duration-300`}>
      <BackgroundGradient className={`${user ? 'h-[500px] sm:h-[550px] md:h-[650px]' : 'h-[150px] sm:h-[180px] md:h-[200px]'} transition-all duration-300`}>
        <div className="flex flex-col h-full bg-[#190b1f] rounded-3xl p-[10px] sm:p-[15px]">
          {user ? (
            <>
              <div 
                ref={chatboxRef} 
                className="flex-1 overflow-y-auto space-y-4 pt-[15px] sm:pt-[25px] pr-2 sm:pr-4 scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-transparent"
                style={{ paddingRight: '4px', marginRight: '-4px' }}
              >
                {messages.map((message, index) => (
                  <div key={index} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                    <div className={`flex items-end ${message.isUser ? 'flex-row-reverse' : 'flex-row'}`}>
                      <div className={`w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center ${message.isUser ? 'bg-yellow-600' : 'bg-gray-200'}`}>
                        {message.isUser ? (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                            <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                          </svg>
                        )}
                      </div>
                      <div className={`max-w-[70%] sm:max-w-xs mx-1 sm:mx-2 p-2 sm:p-3 rounded-lg text-xs sm:text-sm md:text-base ${message.isUser ? 'bg-purple-700 text-white' : 'bg-white'}`}>
                        {message.text}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-2 sm:p-4 border-t border-gray-200">
                <form onSubmit={handleSubmit} className="flex space-x-1 sm:space-x-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 border border-gray-300 rounded-full px-2 py-1 sm:px-3 sm:py-2 text-xs sm:text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-purple-900"
                    placeholder="Type a message..."
                  />
                  <button
                    type="submit"
                    className="bg-purple-800 text-white rounded-full p-2 sm:p-3 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </form>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-full py-2 md:py-4">
              <p className="text-white text-sm sm:text-base md:text-lg text-center px-2 md:px-4">Please log in with Google to use this service.</p>
            </div>
          )}
        </div>
      </BackgroundGradient>
    </div>
  )
}

export default AiChatbox
