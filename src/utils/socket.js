import io from "socket.io-client";

export const createSocketConnection = () => {
  //   if (location.hostname === "localhost") {
  //     return io(import.meta.env.VITE_SOCKET_URL);
  //   }
  //   return io("/", {
  //     path: "/api/socket.io",
  //   });
  return io(import.meta.env.VITE_SOCKET_URL, {
    withCredentials: true,
  });
};
