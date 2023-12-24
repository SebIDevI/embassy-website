"use client";

import React from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface ModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  titlu: string;
  text: string;
}

const backdrop: Variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const Modal: React.FC<ModalProps> = ({
  showModal,
  setShowModal,
  text,
  titlu,
}) => {
  return (
    <AnimatePresence mode="wait">
      {showModal && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full z-50 bg-[#00000084]"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={() => setShowModal(false)}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-200 rounded-lg text-black p-10">
            <h5 className="font-pro text-3xl pb-5">{titlu}</h5>
            <div dangerouslySetInnerHTML={{ __html: text }} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
