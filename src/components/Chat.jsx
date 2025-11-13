import { useEffect, useState, useRef } from "react";
import { createSocketConnection } from "../utils/socket";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { API_BASE_URL } from "../utils/constant";
import { addUser } from "../utils/userSlice";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [allIncomingMessages, setAllIncomingMessages] = useState([]);
  const [isUserOnline, setIsUserOnline] = useState(false);
  const [lastSeen, setLastSeen] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { toUserId } = useParams();
  const user = useSelector((state) => state.user);
  const fromUserId = user?._id;

  const socketRef = useRef(null);
  const chatEndRef = useRef(null);

  // Scroll to bottom
  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Fetch messages
  const fetchChatMessages = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/user/chat/${toUserId}`, {
        withCredentials: true,
      });

      const messages = res.data.messages.map((chatMessage) => {
        const { message, senderId, createdAt } = chatMessage;
        return {
          message,
          firstName: senderId.firstName,
          senderId: senderId._id,
          createdAt,
        };
      });
      setAllIncomingMessages(messages);
      setTimeout(scrollToBottom, 100);
    } catch (err) {
      navigate("/login");
    }
  };

  // Fetch last seen info
  const fetchLastSeenUser = async () => {
    try {
      const res = await axios.get(
        `${API_BASE_URL}/user/chat/last-seen/${toUserId}`,
        { withCredentials: true }
      );
      setLastSeen(res.data.data.lastSeen);
    } catch (err) {
      console.error("Error fetching last seen:", err);
    }
  };

  // Send message
  const sendMessage = () => {
    if (!message.trim()) return;
    socketRef.current?.emit("sendMessage", {
      firstName: user.firstName,
      fromUserId,
      toUserId,
      message,
    });
    setMessage("");
  };

  // Format last seen
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
    const fetchUser = async () => {
      if (!fromUserId) {
        try {
          const res = await axios.get(API_BASE_URL + "/profile/view", {
            withCredentials: true,
          });
          dispatch(addUser(res.data));
        } catch (err) {
          navigate("/login");
        }
      }
    };
    fetchUser();
  }, [fromUserId]);

  useEffect(() => {
    fetchChatMessages();
  }, [toUserId]);

  // Setup socket
  useEffect(() => {
    if (!fromUserId) return;

    socketRef.current = createSocketConnection(fromUserId);

    socketRef.current.emit("joinChat", {
      firstName: user.firstName,
      fromUserId,
      toUserId,
    });

    socketRef.current.on("messageReceived", (msg) => {
      setAllIncomingMessages((prev) => [...prev, msg]);
    });

    socketRef.current.on("onlineUsers", (onlineUsers) => {
      const isOnline = onlineUsers.includes(toUserId);
      setIsUserOnline(isOnline);
      if (!isOnline) fetchLastSeenUser();
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [fromUserId, toUserId]);

  // Auto-scroll when new message added
  useEffect(() => {
    scrollToBottom();
  }, [allIncomingMessages]);

  return (
    <div className="flex flex-col bg-base-200 rounded-lg shadow-inner max-w-3xl mx-auto">
      {/* Header */}
      <div className="bg-base-100 p-4 flex items-center gap-4 shadow-md sticky top-0 z-10">
        <button className="" onClick={() => navigate(-1)}>
          <svg
            class="h-6 w-6 fill-current md:h-8 md:w-8 rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"></path>
          </svg>
        </button>
        <img
          src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
          alt="User avatar"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold text-gray-800">
            {allIncomingMessages[0]?.firstName}
          </h2>
          <p className="text-sm text-gray-500">
            {isUserOnline
              ? "Online 🟢"
              : `Last seen ${formatLastSeen(lastSeen)}`}
          </p>
        </div>
      </div>

      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-4 bg-base-200">
        {allIncomingMessages.map((msg, index) => {
          const isOwnMessage = msg.senderId === fromUserId;
          return (
            <div
              key={index}
              className={`chat ${
                isOwnMessage ? "chat-end" : "chat-start"
              } animate-fade-in`}
            >
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img
                    src={
                      isOwnMessage
                        ? "https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
                        : "https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
                    }
                    alt="avatar"
                  />
                </div>
              </div>
              <div className="chat-header">
                {isOwnMessage ? "" : msg.firstName}
                <time className="text-xs opacity-50 ml-2">
                  {formatLastSeen(msg?.createdAt)}
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
        <div ref={chatEndRef} />
      </div>

      {/* Input */}
      <div className="p-3 bg-base-100 flex gap-2 items-center sticky bottom-0 shadow-md">
        <input
          type="text"
          placeholder="Type your message..."
          className="input input-bordered flex-1"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="btn btn-primary px-6 whitespace-nowrap"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
