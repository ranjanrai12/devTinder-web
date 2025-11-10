import { useEffect, useState, useRef } from "react";
import { createSocketConnection } from "../utils/socket";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { API_BASE_URL } from "../utils/constant";

const Chat = () => {
  const [message, setMessage] = useState("");
  const { toUserId } = useParams();
  const [allIncomingMessages, setAllIncomingMessages] = useState([]);
  const [isUserOnline, setIsUserOnline] = useState(false);
  const [lastSeen, setLastSeen] = useState(null);

  const user = useSelector((state) => state.user);
  const fromUserId = user?._id;

  // Keep socket instance in a ref
  const socketRef = useRef(null);

  const fetchChatMessages = async () => {
    const chat = await axios.get(`${API_BASE_URL}/user/chat/${toUserId}`, {
      withCredentials: true,
    });

    const chatMessages = chat.data.messages.map((chatMessage) => {
      const { message, senderId, createdAt } = chatMessage;
      return {
        message,
        firstName: senderId.firstName,
        senderId: senderId._id,
        createdAt,
      };
    });
    setAllIncomingMessages(chatMessages);
  };

  // Fetch the last seen from server
  const fetchLastSeenUser = async () => {
    const lastSeen = await axios.get(
      `${API_BASE_URL}/user/chat/last-seen/${toUserId}`,
      {
        withCredentials: true,
      }
    );
    setLastSeen(lastSeen.data.data.lastSeen);
  };

  const sendMessage = () => {
    if (!socketRef.current) return;
    socketRef.current.emit("sendMessage", {
      firstName: user.firstName,
      fromUserId,
      toUserId,
      message,
    });
    setMessage("");
  };

  const formatLastSeen = (time) => {
    if (!time) return "Offline";
    const date = new Date(time);
    return date.toLocaleString([], {
      hour: "2-digit",
      minute: "2-digit",
      day: "2-digit",
      month: "short",
    });
  };

  useEffect(() => {
    fetchChatMessages();
  }, [toUserId]);

  useEffect(() => {
    if (!fromUserId) return;
    // Create socket once and store in ref
    socketRef.current = createSocketConnection(fromUserId);

    socketRef.current.emit("joinChat", {
      firstName: user.firstName,
      fromUserId,
      toUserId,
    });

    socketRef.current.on("messageReceived", (msg) => {
      setAllIncomingMessages((prev) => [...prev, msg]);
    });

    // Handle online users
    socketRef.current.on("onlineUsers", (onlineUsers) => {
      const isOnline = onlineUsers.includes(toUserId);
      setIsUserOnline(isOnline);

      if (!isOnline) fetchLastSeenUser();
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [fromUserId, toUserId]);

  return (
    <div className="flex flex-col h-[calc(100vh-80px)] bg-base-200 p-2 rounded-lg shadow-inner max-w-3xl mx-auto">
      {/* Header Section */}
      {/* TODO: Last Seen properly not handle need to improved and after that UI of chat application have to improve */}
      <div className="bg-base-100 p-4 flex items-center gap-4 shadow">
        <img
          src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
          alt="User avatar"
          className="w-12 h-12 rounded-full"
        />
        <div className="">
          {/* <h2 className="text-lg font-bold">{toUserName}</h2> */}
          <p className="text-sm text-gray-500">
            {isUserOnline
              ? "Online 🟢"
              : `Last seen at ${formatLastSeen(lastSeen)}`}
          </p>
        </div>
      </div>

      {/* Chat Content */}
      <div className="flex-1 overflow-y-auto space-y-4 px-2 py-4">
        {/* Incoming Message */}
        {allIncomingMessages.map((msg, index) => {
          const isOwnMessage = msg.senderId === fromUserId;
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
                {isOwnMessage ? "You" : msg.firstName}
                <time className="text-xs opacity-50 ml-2">
                  {new Date(msg.createdAt).toLocaleTimeString([], {
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
                {msg.message}
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
