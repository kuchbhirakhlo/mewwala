"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Plus } from "lucide-react";
import {
  ChatMessage,
  generateMessageId,
  generateBotResponse,
  formatBotMessage,
} from "@/lib/chatbot-utils";
import { SUGGESTED_QUESTIONS } from "@/lib/chatbot-data";

export function ProcoAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: generateMessageId(),
      text: "Hello! 👋 I'm ProcoAI, your Menu Wala assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async (message?: string) => {
    const textToSend = message || inputValue.trim();

    if (!textToSend) return;

    // Add user message
    const userMessage: ChatMessage = {
      id: generateMessageId(),
      text: textToSend,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    // Simulate bot thinking time (200-500ms)
    setTimeout(() => {
      const botResponse = generateBotResponse(textToSend);
      const botMessage: ChatMessage = {
        id: generateMessageId(),
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
    }, 300 + Math.random() * 400);
  };

  return (
    <>
      {/* Chatbot Widget Container */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 w-96 max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-gray-200 z-40 flex flex-col h-[32rem] max-h-[90vh]">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-white/20 p-2 rounded-full">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg">ProcoAI</h3>
                <p className="text-xs text-white/80">Menu Wala Assistant</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-2 rounded-full transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-orange-50 to-white">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    message.sender === "user"
                      ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-br-none"
                      : "bg-gray-100 text-gray-900 rounded-bl-none"
                  }`}
                >
                  <p className="text-sm">
                    {message.sender === "bot" ? (
                      <span
                        dangerouslySetInnerHTML={{
                          __html: formatBotMessage(message.text),
                        }}
                      />
                    ) : (
                      message.text
                    )}
                  </p>
                  <span className="text-xs opacity-70 mt-1 block">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
              </div>
            ))}

            {/* Loading indicator */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-900 px-4 py-3 rounded-lg rounded-bl-none">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-orange-500 animate-bounce" />
                    <div className="w-2 h-2 rounded-full bg-orange-500 animate-bounce delay-100" />
                    <div className="w-2 h-2 rounded-full bg-orange-500 animate-bounce delay-200" />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Questions - Show only when chat is short */}
          {messages.length <= 2 && !isLoading && (
            <div className="px-4 py-2 border-t border-gray-200 bg-white max-h-24 overflow-y-auto">
              <p className="text-xs text-gray-500 font-medium mb-2">
                Popular questions:
              </p>
              <div className="flex flex-col gap-2">
                {SUGGESTED_QUESTIONS.slice(0, 3).map((question, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(question)}
                    className="text-left text-xs bg-orange-50 hover:bg-orange-100 text-orange-700 px-3 py-2 rounded-lg transition flex items-center gap-2"
                  >
                    <Plus className="w-3 h-3" />
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="border-t border-gray-200 p-3 bg-white rounded-b-2xl">
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="Ask me anything..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleSendMessage();
                  }
                }}
                disabled={isLoading}
                className="flex-1 text-sm"
              />
              <Button
                size="sm"
                onClick={() => handleSendMessage()}
                disabled={isLoading || !inputValue.trim()}
                className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-4 right-4 z-50 w-14 h-14 rounded-full shadow-2xl transition-all transform hover:scale-110 flex items-center justify-center group ${
          isOpen
            ? "bg-red-500 hover:bg-red-600"
            : "bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600"
        }`}
      >
        <div className="relative">
          {!isOpen ? (
            <>
              <MessageCircle className="w-6 h-6 text-white" />
              {/* Pulse animation */}
              <div className="absolute inset-0 rounded-full bg-orange-500 animate-pulse opacity-30" />
            </>
          ) : (
            <X className="w-6 h-6 text-white" />
          )}
        </div>

        {/* Tooltip */}
        {!isOpen && (
          <div className="absolute right-16 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Chat with ProcoAI
          </div>
        )}
      </button>
    </>
  );
}
