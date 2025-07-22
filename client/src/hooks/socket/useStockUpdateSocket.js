import React, { useEffect } from "react";
import io from "socket.io-client";

const useStockUpdateSocket = (setProductDashboardData) => {
  useEffect(() => {
    // For same-origin deployment, use window.location.origin
    // For separate deployment, use the env variable
    const socketUrl = import.meta.env.VITE_HARVESTHUB_API || window.location.origin;
    
    const socket = io(socketUrl, {
      transports: ["websocket"],
    });

    socket.on("stockUpdate", (stockLeft) => {
      setProductDashboardData((prevData) => {
        return {
          ...prevData,
          quantity: stockLeft,
        };
      });
    });

    return () => {
      socket.disconnect();
    };
  }, []);
};

export default useStockUpdateSocket;
