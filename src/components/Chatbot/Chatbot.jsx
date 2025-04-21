// import React, { useState } from "react";
// import "./Chatbot.css";

// const Chatbot = () => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");

//   const handleSend = async (e) => {
//     e.preventDefault();
//     if (!input.trim()) return;
  
//     const newMessage = { sender: "user", text: input };
  
//     // First: Add user message
//     setMessages((prev) => [...prev, newMessage]);
  
//     // Then: Simulate bot response after a short delay
//     setTimeout(() => {
//       const botResponse = {
//         sender: "bot",
//         text: "I'm your AI assistant. How can I help you?",
//       };
//       setMessages((prev) => [...prev, botResponse]);
//     }, 500); // slight delay to mimic response
  
//     setInput(""); // Clear input
//   };
  

//   return (
//     <>

//    <div className="top-heading">
//    <h1>Live Therapy for Various Issues</h1>
//     <p>Support for issues like grief, addiction, eating disorders, self-esteem, anger management, and more</p>
//      <h4>Messaging & Live Sessions</h4>
//      <h5>Unlimited messaging with Ai chat therapist</h5>
//    </div>

//     <div className="chatbot-container">
     
//       <div className="chatbox">
//         {messages.map((msg, index) => (
//           <div key={index} className={`message ${msg.sender}`}>
//             {msg.text}
//           </div>
//         ))}
//       </div>
//       <form onSubmit={handleSend} className="chat-input">
//         <input
//           type="text"
//           placeholder="Type your message..."
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//         />
//         <button type="submit">Send</button>
//       </form>
//     </div>

//     </>
//   );
// };

// export default Chatbot;





import React, { useState } from "react";
import { useEffect } from "react";
import "./Chatbot.css";
import { useNavigate } from "react-router-dom";



const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");


  const navigate =useNavigate();

  const userId = localStorage.getItem("userId"); // 🔐 You must store userId after login

  useEffect(() => {
    const checkSubscription = async () => {
      const res = await fetch(`http://localhost:5000/api/check-subscription/${userId}`);
      const data = await res.json();

      if (!data.valid) {
        alert("Your subscription has expired. Please renew.");
        navigate("/billing");
      }
    };

    checkSubscription();
  }, [navigate]);

  

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);

    try {
      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      const botMsg = { sender: "bot", text: data.reply };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      const errMsg = { sender: "bot", text: "Error talking to AI." };
      setMessages((prev) => [...prev, errMsg]);
    }

    setInput("");
  };

  return (
 
 
 <>

    <div className="top-heading">
        <h1>Live Therapy for Various Issues</h1>
       <p>Support for issues like grief, addiction, eating disorders, self-esteem, anger management, and more</p>
        <h4>Messaging & Live Sessions</h4>
      <h5>Unlimited messaging with Ai chat therapist</h5>
   </div> 


  
    <div className="chatbot-container">
      <div className="chatbox">
        {messages.map((msg, i) => (
          <div key={i} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSend} className="chat-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>

    </>
  );
};

export default Chatbot;

