// components/ChatHistory.js
import chatmessage from './chatMessage';

export default function chathistory({ chatHistory }) {
  return (
    <div className="chat-history">
      {chatHistory.map((message, index) => (
        <chatmessage key={index} text={message.text} type={message.type} />
      ))}
      <style jsx>{`
        .chat-history {
          padding: 20px;
          overflow-y: auto;
          height: calc(100vh - 100px);
        }
      `}</style>
    </div>
  );
}