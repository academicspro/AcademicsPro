'use client'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const AnnouncementBar = () => {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full bg-blue-600 text-white py-2 px-4 flex items-center justify-between text-sm md:text-base"
        >
          <p className="flex-1 text-center">
            📢 Exciting updates! Check out our latest features.
          </p>
          <div className="flex items-center gap-2">
            <button className="bg-white text-blue-600 px-2 py-1 rounded text-sm cursor-pointer" onClick={() => setVisible(false)}>
              Close
            </button>
            <button onClick={() => setVisible(false)} className="text-white cursor-pointer">
              <X size={20} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnnouncementBar;