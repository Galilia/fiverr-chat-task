import React, { useState, useEffect } from 'react';
import './messages.scss';

// window.Chat.onMessage((message) => {
//   console.log(message);
// });

const Messages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    window.Chat.onMessage((mes) => {
      setMessages((messages) => {
        return [...messages, mes.content];
      });
    });
  }, []);

  return (
    <div className="messages">
      {messages.map((el) => (
        <div className="message">{el}</div>
      ))}
    </div>
  );
};

export default Messages;
