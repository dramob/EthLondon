'use client'
import { useState } from 'react';

import Header from './Header';
import ChatbotGPT from './ChatbotGPT';

export default function Home() {
  const [chatHistory, setChatHistory] = useState([]);

  const handleSendMessage = (text) => {


      return (
    <>
    <Header/>
      <ChatbotGPT/>
      </> )
}}