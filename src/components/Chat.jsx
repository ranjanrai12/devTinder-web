import React from "react";

const Chat = () => {
  return (
    <div className="flex flex-col h-[calc(100vh-80px)] bg-base-200 p-2 rounded-lg shadow-inner max-w-3xl mx-auto">
      {/* Chat Content */}
      <div className="flex-1 overflow-y-auto space-y-4 px-2 py-4">
        {/* Incoming Message */}
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="User avatar"
                src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
              />
            </div>
          </div>
          <div className="chat-header">
            Obi-Wan Kenobi
            <time className="text-xs opacity-50 ml-2">12:45</time>
          </div>
          <div className="chat-bubble chat-bubble-primary">
            You were the Chosen One!
          </div>
        </div>

        {/* Outgoing Message */}
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="User avatar"
                src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
              />
            </div>
          </div>
          <div className="chat-header">
            Anakin
            <time className="text-xs opacity-50 ml-2">12:46</time>
          </div>
          <div className="chat-bubble chat-bubble-secondary">I hate you!</div>
        </div>
      </div>

      {/* Input Box */}
      <div className="p-2 bg-base-100 flex gap-2 sticky bottom-0">
        <input
          type="text"
          placeholder="Type your message…"
          className="input input-bordered flex-1"
        />
        <button className="btn btn-primary px-6">Send</button>
      </div>
    </div>
  );
};

export default Chat;
