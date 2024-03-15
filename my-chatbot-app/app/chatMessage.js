// components/ChatMessage.js
export default function chatmessage({ text, type }) {
    return (
      <div className={`message ${type}`}>
        {text}
        <style jsx>{`
          .message {
            padding: 10px;
            border-radius: 5px;
            margin-bottom: 10px;
            max-width: 60%;
          }
          .user {
            background-color: #dcf8c6;
            margin-left: auto;
          }
          .bot {
            background-color: #f0f0f0;
          }
        `}</style>
      </div>
    );
  }