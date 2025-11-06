import io from "socket.io-client";

export const createSocketConnection = () => {
  return io(import.meta.env.VITE_SOCKET_URL, {
    path: import.meta.env.VITE_SOCKET_PATH,
    withCredentials: true,
  });
};
