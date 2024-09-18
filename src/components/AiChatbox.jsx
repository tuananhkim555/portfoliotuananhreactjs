/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from "../context/AuthContext";
import { BackgroundGradient } from './ui/background-gradient';
import axios from 'axios';

const AiChatbox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const { user } = useContext(AuthContext);
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

  useEffect(() => {
    if (user) {
      setMessages([{ text: "Hello, how can I help you?", isUser: false }]);
    }
  }, [user]);

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
    <div className="h-[700px] mt-[110px]">
      <BackgroundGradient className="h-[700px]">
        <div className="flex flex-col h-full bg-[#190b1f] rounded-3xl border-2 border-[#2e2e2e]">
          {user ? (
            <>
              <div className="flex-1 overflow-y-auto p-4 space-y-4 mt-10">
                {messages.map((message, index) => (
                  <div key={index} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                    <div className={`flex items-end ${message.isUser ? 'flex-row-reverse' : 'flex-row'}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${message.isUser ? 'bg-yellow-600' : 'bg-gray-200'}`}>
                        {message.isUser ? (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                            <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                          </svg>
                        )}
                      </div>
                      <div className={`max-w-xs mx-2 p-3 rounded-lg ${message.isUser ? 'bg-purple-700 text-white' : 'bg-white'}`}>
                        {message.text}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t border-gray-200">
                <form onSubmit={handleSubmit} className="flex space-x-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-900"
                    placeholder="Type a message..."
                  />
                  <button
                    type="submit"
                    className="bg-purple-800 text-white rounded-full p-2 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </form>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-white text-xl">Please log in with Google to use this service.</p>
            </div>
          )}
        </div>
      </BackgroundGradient>
    </div>
  )
}

export default AiChatbox
