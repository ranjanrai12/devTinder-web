import React, { useEffect, useState } from "react";
import { createSocketConnection } from "../utils/socket";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Chat = () => {
  const [message, setMessage] = useState("");
  const { toUserId } = useParams();
  const [allIncomingMessages, setAllIncomingMessages] = useState([]);
  const user = useSelector((state) => state.user);
  const fromUserId = user?._id;

  const sendMessage = () => {
    try {
      const socket = createSocketConnection();
      socket.emit("sendMessage", {
        firstName: user.firstName,
        fromUserId,
        toUserId,
        message,
      });
      setMessage("");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!fromUserId) return;
    console.log("Start");
    const socket = createSocketConnection();
    socket.emit("joinChat", {
      firstName: user.firstName,
      fromUserId,
      toUserId,
    });

    socket.on("messageReceived", ({ message, firstName, senderId, createdAt }) => {
      setAllIncomingMessages((prev) => [
        ...prev,
        { message, firstName, senderId, createdAt },
      ]);
      console.log(allIncomingMessages);
    });

    return () => {
      socket.disconnect();
    };
  }, [fromUserId, toUserId]);

  return (
    <div className="flex flex-col h-[calc(100vh-80px)] bg-base-200 p-2 rounded-lg shadow-inner max-w-3xl mx-auto">
      {/* Chat Content */}
      <div className="flex-1 overflow-y-auto space-y-4 px-2 py-4">
        {/* Incoming Message */}
        {allIncomingMessages.map((message, index) => {
          const isOwnMessage = message.senderId === fromUserId;
          return (
            <div
              key={index}
              className={`chat ${isOwnMessage ? "chat-end" : "chat-start"}`}
            >
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="User avatar"
                    src={
                      isOwnMessage
                        ? "https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
                        : "https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
                    }
                  />
                </div>
              </div>

              <div className="chat-header">
                {isOwnMessage ? "You" : message.firstName}
                <time className="text-xs opacity-50 ml-2">
                  {new Date(message.createdAt).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </time>
              </div>

              <div
                className={`chat-bubble ${
                  isOwnMessage ? "chat-bubble-secondary" : "chat-bubble-primary"
                }`}
              >
                {message.message}
              </div>
            </div>
          );
        })}
      </div>

      {/* Input Box */}
      <div className="p-2 bg-base-100 flex gap-2 sticky bottom-0">
        <input
          type="text"
          placeholder="Type your message…"
          className="input input-bordered flex-1"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendMessage} className="btn btn-primary px-6">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
