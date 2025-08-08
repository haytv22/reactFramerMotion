import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { clients } from "../constants";

function Clients() {
  const trackRef = useRef(null);
  const [trackWidth, setTrackWidth] = useState(0);

  // Nhân đôi để loop mượt
  const repeatedClients = [...clients, ...clients];

  // Tính chiều rộng thật khi render xong
  useEffect(() => {
    if (trackRef.current) {
      setTrackWidth(trackRef.current.scrollWidth / 2); // chỉ lấy nửa vì nhân đôi
    }
  }, []);

  return (
    <div className="overflow-hidden w-full py-8 ">
      <motion.div
        ref={trackRef}
        className="flex w-max gap-16"
        animate={{ x: [0, -trackWidth] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 50, // <== chỉnh số này để đổi tốc độ
          ease: "linear",
        }}
      >
        {repeatedClients.map((client, index) => (
          <div key={index} className="flex-shrink-0">
            <img
              src={client.logo}
              alt=""
              className="h-10 w-auto object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default Clients;
