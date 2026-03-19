import { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, User, Bot } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const QUICK_REPLIES = [
  "Ticket Prices",
  "Park Hours",
  "Location",
  "Top Rides"
];

const BOT_RESPONSES: Record<string, string> = {
  price: "Our tickets start at ₹799 for kids and ₹999 for adults. We also have special family combos! Check the 'Tickets' section for more details.",
  ticket: "Our tickets start at ₹799 for kids and ₹999 for adults. We also have special family combos! Check the 'Tickets' section for more details.",
  cost: "Our tickets start at ₹799 for kids and ₹999 for adults. We also have special family combos! Check the 'Tickets' section for more details.",
  location: "We are located in Bihta, Patna, 801103. You can find us easily on Google Maps by searching for 'The Atlanttis Water Park'.",
  address: "We are located in Bihta, Patna, 801103. You can find us easily on Google Maps by searching for 'The Atlanttis Water Park'.",
  where: "We are located in Bihta, Patna, 801103. You can find us easily on Google Maps by searching for 'The Atlanttis Water Park'.",
  hours: "We are open every day from 8:00 AM to 5:00 PM. Always fresh, always open!",
  time: "We are open every day from 8:00 AM to 5:00 PM. Always fresh, always open!",
  open: "We are open every day from 8:00 AM to 5:00 PM. Always fresh, always open!",
  ride: "We have over 20+ world-class rides including the Giant Wave Pool, Thunder Drop Slide, and the Poseidon Playground for kids!",
  slide: "We have over 20+ world-class rides including the Giant Wave Pool, Thunder Drop Slide, and the Poseidon Playground for kids!",
  pool: "Our Giant Wave Pool is a fan favorite! We also have a massive Rain Dance Arena with professional lighting and sound.",
  hello: "Hello! Welcome to The Atlanttis. How can I assist you with your visit today?",
  hi: "Hi there! Welcome to The Atlanttis. Looking to beat the heat? I can help with prices, rides, and more!",
  thanks: "You're very welcome! Hope to see you at the park soon. Have a splash-tastic day!",
  thank: "You're very welcome! Hope to see you at the park soon. Have a splash-tastic day!",
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Welcome to The Atlanttis! 👋 I'm your AI guide. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot thinking
    setTimeout(() => {
      const lowerText = text.toLowerCase();
      let response = "I'm not sure about that. Would you like to speak with our support team at +91 95997 22391?";

      for (const [key, val] of Object.entries(BOT_RESPONSES)) {
        if (lowerText.includes(key)) {
          response = val;
          break;
        }
      }

      const botMessage: Message = {
        id: Date.now() + 1,
        text: response,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[999]">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-br from-[var(--cyan)] to-[var(--aqua)] text-white shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300"
        aria-label="Toggle Chat"
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] sm:w-[400px] h-[500px] bg-[#020b18] border border-slate-800 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
          
          {/* Header */}
          <div className="p-6 bg-gradient-to-r from-slate-900 to-[#020b18] border-b border-slate-800 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[var(--cyan)]/20 flex items-center justify-center border border-[var(--cyan)]/30">
              <Bot className="text-[var(--cyan)]" size={20} />
            </div>
            <div>
              <h3 className="text-white font-bold text-sm tracking-tight">Atlanttis AI Guide</h3>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[0.65rem] text-slate-400 font-medium uppercase tracking-wider">Online Now</span>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex gap-3 max-w-[85%] ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-[0.6rem] border ${
                    msg.sender === 'user' 
                      ? 'bg-slate-800 border-slate-700 text-slate-300' 
                      : 'bg-[var(--cyan)]/10 border-[var(--cyan)]/20 text-[var(--cyan)]'
                  }`}>
                    {msg.sender === 'user' ? <User size={14} /> : <Bot size={14} />}
                  </div>
                  <div className={`p-4 rounded-2xl text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[var(--cyan)] text-white'
                      : 'bg-slate-900 text-slate-300 border border-slate-800'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex gap-3 items-center bg-slate-900 p-3 rounded-2xl border border-slate-800">
                  <span className="w-1.5 h-1.5 bg-[var(--cyan)] rounded-full animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-1.5 h-1.5 bg-[var(--cyan)] rounded-full animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-1.5 h-1.5 bg-[var(--cyan)] rounded-full animate-bounce" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Footer & Input */}
          <div className="p-6 bg-slate-900/50 border-t border-slate-800 space-y-4">
            
            {/* Quick Replies */}
            {messages.length < 5 && (
              <div className="flex flex-wrap gap-2">
                {QUICK_REPLIES.map(reply => (
                  <button
                    key={reply}
                    onClick={() => handleSend(reply)}
                    className="px-3 py-1.5 rounded-full border border-slate-700 text-[0.7rem] text-slate-400 hover:text-white hover:border-[var(--cyan)] transition-all"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            )}

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(inputValue);
              }}
              className="flex gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask anything..."
                className="flex-1 bg-slate-800 border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[var(--cyan)] transition-all"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="w-10 h-10 rounded-xl bg-[var(--cyan)] text-white flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[var(--aqua)] transition-colors"
              >
                <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      )}
    </div>
  );
}
