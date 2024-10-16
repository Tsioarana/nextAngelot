// app/components/Contact.tsx
"use client";

import { motion } from "framer-motion";
import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#030014]">
      {/* En-tête avec animation */}
      <motion.h1
        className="text-5xl font-bold text-white mb-10"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Contactez-nous
      </motion.h1>

      {/* Formulaire de contact */}
      <motion.form
        className="bg-[#1e1e2f] p-8 rounded-lg shadow-lg w-full max-w-md"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="mb-4">
          <label className="block text-gray-300" htmlFor="name">Nom</label>
          <input
            type="text"
            id="name"
            required
            className="w-full p-2 mt-2 bg-transparent border-b border-gray-600 text-gray-200 focus:outline-none focus:border-purple-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            required
            className="w-full p-2 mt-2 bg-transparent border-b border-gray-600 text-gray-200 focus:outline-none focus:border-purple-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300" htmlFor="message">Message</label>
          <textarea
            id="message"
            required
            rows="4"
            className="w-full p-2 mt-2 bg-transparent border-b border-gray-600 text-gray-200 focus:outline-none focus:border-purple-500"
          />
        </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white py-2 rounded-lg transition duration-300 hover:scale-105"
          >
            Envoyer
          </button>
      </motion.form>
    </div>
  );
};

export default Contact;
