import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send } from 'lucide-react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi there! How can we help you today?", isBot: true }
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages([...messages, { text: input, isBot: false }]);
    setInput("");

    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: "Thanks for reaching out! A consultant will be with you shortly. In the meantime, feel free to browse our services.", 
        isBot: true 
      }]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 bg-blue-600 text-white rounded-full shadow-xl flex items-center justify-center hover:bg-blue-700 transition-transform hover:scale-105 z-50 ${isOpen ? 'hidden' : 'flex'}`}
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-100 z-50 overflow-hidden flex flex-col"
            style={{ height: '500px', maxHeight: 'calc(100vh - 48px)' }}
          >
            {/* Header */}
            <div className="bg-blue-600 p-4 flex justify-between items-center text-white">
              <div>
                <h3 className="font-bold">MIT Support</h3>
                <p className="text-blue-100 text-xs">We typically reply in a few minutes</p>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-blue-100 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-grow p-4 overflow-y-auto bg-slate-50 space-y-4">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                  <div 
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      msg.isBot 
                        ? 'bg-white text-slate-700 border border-slate-100 rounded-tl-none' 
                        : 'bg-blue-600 text-white rounded-tr-none'
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-slate-100">
              <form onSubmit={handleSend} className="flex items-center space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-grow px-4 py-2 bg-slate-50 border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
                />
                <button 
                  type="submit"
                  className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors shrink-0"
                >
                  <Send className="w-4 h-4 ml-0.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
