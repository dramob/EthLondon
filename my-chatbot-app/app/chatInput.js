// components/ChatInput.js
export default function chatinput({ onSendMessage }) {
    const handleSubmit = (e) => {
      e.preventDefault();
      const message = e.target.message.value.trim();
      if (message) {
        onSendMessage(message);
        e.target.reset();
      }
    };
  
    return (
      <form onSubmit={handleSubmit} className="chat-input">
        <input type="text" name="message" autoComplete="off" placeholder="Type your message here..." />
        <button type="submit">Send</button>
        <style jsx>{`
          .chat-input {
            display: flex;
            padding: 10px;
            background-color: #f0f0f0;
          }
          input {
            flex: 1;
            padding: 10px;
            border: 1px solid #ccc;
            margin-right: 10px;
            border-radius: 5px;
          }
          button {
            padding: 10px 20px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }
          button:hover {
            background-color: #0056b3;
          }
        `}</style>
      </form>
    );
  }