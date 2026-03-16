import React, { useState, useRef, useEffect } from 'react';
import { Send, Plus, MoreVertical } from 'lucide-react';
import { motion } from 'motion/react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: string;
}

export const ChatPage = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'euismod? magna aliquam erat volutpat. Ut wisi enim ad minim veniam, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismodmagna aliquam erat volutpat. Ut wisi',
      sender: 'bot',
      timestamp: '12:05'
    },
    { id: '2', text: 'Lorem ipsum', sender: 'user', timestamp: '12:06' },
    { id: '3', text: 'Lorem ipsum Lorem ipsum', sender: 'user', timestamp: '12:06' },
    { id: '4', text: 'Lorem ipsum', sender: 'user', timestamp: '12:22' },
    { id: '5', text: 'Lorem ipsum Lorem ipsum', sender: 'user', timestamp: '12:22' },
  ]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages([...messages, newMessage]);
    setInput('');
    
    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Merci pour votre message. Un conseiller va vous répondre sous peu.',
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col pt-20">
      {/* Chat Header */}
      <div className="bg-white border-b border-gray-100 p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center relative">
            <div className="w-8 h-8 bg-black flex items-center justify-center rotate-45">
              <span className="text-white text-[6px] -rotate-45 font-bold">KK</span>
            </div>
            <div className="absolute top-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
          </div>
          <div>
            <h1 className="text-lg font-bold uppercase tracking-widest">KING KUNTA</h1>
            <p className="text-xs text-gray-400">Customer service</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs text-gray-400">12:00</span>
          <div className="bg-green-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">3</div>
          <MoreVertical size={20} className="text-gray-400" />
        </div>
      </div>

      {/* Messages Area */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-6 space-y-8 bg-[#f8f8f8]"
      >
        <div className="flex items-center justify-center">
          <div className="bg-white px-4 py-1 rounded-full text-[10px] text-gray-400 uppercase tracking-widest border border-gray-100">
            Aujourd'hui
          </div>
        </div>

        {messages.map((msg) => (
          <div 
            key={msg.id}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} items-end gap-2`}
          >
            {msg.sender === 'bot' && (
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-gray-100 shrink-0">
                <div className="w-5 h-5 bg-black flex items-center justify-center rotate-45">
                  <span className="text-white text-[4px] -rotate-45">KK</span>
                </div>
              </div>
            )}
            <div className="flex flex-col gap-1 max-w-[70%]">
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className={`p-4 rounded-2xl text-sm leading-relaxed ${
                  msg.sender === 'user' 
                    ? 'bg-[#4ade80] text-white rounded-br-none' 
                    : 'bg-white text-gray-600 border border-gray-100 rounded-bl-none'
                }`}
              >
                {msg.text}
              </motion.div>
              <span className="text-[8px] text-gray-400 uppercase tracking-widest self-end">
                {msg.timestamp}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="p-6 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto flex items-center gap-4 bg-gray-50 rounded-full px-6 py-3 border border-gray-200">
          <button className="text-gray-400 hover:text-black transition-colors">
            <Plus size={24} />
          </button>
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Lorem ipsum"
            className="flex-1 bg-transparent border-none focus:outline-none text-sm"
          />
          <button 
            onClick={handleSend}
            className="text-gray-400 hover:text-black transition-colors"
          >
            <Send size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};
