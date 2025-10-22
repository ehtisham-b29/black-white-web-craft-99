import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Card } from '~/components/ui/card';
import { ScrollArea } from '~/components/ui/scroll-area';
import { toast } from 'sonner';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hello! I\'m your AI assistant. How can I help you today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (!isOpen) {
      // Show popup after 2 seconds
      const showTimer = setTimeout(() => {
        setShowPopup(true);
      }, 2000);

      // Hide popup after 8 seconds
      const hideTimer = setTimeout(() => {
        setShowPopup(false);
      }, 8000);

      // Repeat every 20 seconds
      const interval = setInterval(() => {
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
        }, 6000);
      }, 20000);

      return () => {
        clearTimeout(showTimer);
        clearTimeout(hideTimer);
        clearInterval(interval);
      };
    }
  }, [isOpen]);

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      // TODO: Replace with backend API call that uses Gemini key
      const response = await fetch(`/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: inputMessage
                }
              ]
            }
          ]
        })
      });

      if (!response.ok) {
        throw new Error('Failed to get response from Gemini API');
      }

      const data = await response.json();
      const botResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, I couldn\'t process your request.';

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      toast.error('Failed to get response. Please check your API key.');
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'Sorry, I encountered an error. Please check your internet connection and API key.',
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-20 right-6 z-50">
        {/* Popup Message */}
        {showPopup && (
          <div className="absolute bottom-16 right-0 mb-2 animate-fade-in">
            <div className="bg-primary-foreground text-primary px-4 py-3 rounded-lg shadow-xl relative whitespace-nowrap">
              <div className="absolute -bottom-2 right-6 w-4 h-4 bg-primary-foreground transform rotate-45"></div>
              <p className="text-sm font-semibold inline">Hi there! 👋 How can I assist you today?</p>
            </div>
          </div>
        )}

        {/* Chat Button */}
        <Button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-primary-foreground hover:bg-primary-foreground/90 text-primary"
          size="icon"
        >
          <MessageCircle className="w-6 h-6 stroke-primary" strokeWidth={3} />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-20 right-6 z-50">
      {/* Chat Window - Above the button */}
      <Card className="absolute bottom-20 right-0 w-80 h-96 shadow-2xl flex flex-col mb-4">
        {/* Header */}
        <div className="flex items-center gap-2 p-4 border-b">
          <Bot className="w-5 h-5 text-primary" />
          <span className="font-semibold">Realz Guru 💡</span>
        </div>


      {/* Messages */}
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start gap-2 ${
                message.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {message.sender === 'bot' && (
                <Bot className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              )}
              <div
                className={`max-w-[70%] p-3 rounded-lg ${
                  message.sender === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted'
                }`}
              >
                <p className="text-sm whitespace-pre-wrap">{message.content}</p>
              </div>
              {message.sender === 'user' && (
                <User className="w-6 h-6 text-muted-foreground mt-1 flex-shrink-0" />
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex items-start gap-2">
              <Bot className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div className="bg-muted p-3 rounded-lg">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>

      {/* Input */}
      <div className="p-4 border-t">
        <div className="flex gap-2 mb-2">
          <Input
            placeholder="Type your message..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={isLoading}
          />
          <Button
            onClick={sendMessage}
            disabled={isLoading || !inputMessage.trim()}
            size="icon"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
        <div className="text-center">
          <p className="text-xs text-muted-foreground">
            Powered by{" "}
            <a
              href="https://www.telphiconsulting.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline hover:text-primary transition-colors"
            >
              Telphi Consulting
            </a>
          </p>
        </div>
      </div>
    </Card>

      {/* Close Button - Floating X Icon */}
      <Button
        onClick={() => setIsOpen(false)}
        className="w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-primary-foreground hover:bg-primary-foreground/90 text-primary"
        size="icon"
      >
        <X className="w-6 h-6 stroke-primary" strokeWidth={3} />
      </Button>
    </div>
  );
};

export default Chatbot;