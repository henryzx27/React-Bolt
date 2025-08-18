// src/App.jsx
import { FaReact } from "react-icons/fa";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <FaReact className="text-blue-400 text-7xl mb-4 animate-spin-slow" />
        <h1 className="text-4xl font-bold">⚡ React Bolt Starter Kit</h1>
        <p className="text-gray-400 mt-2 text-center max-w-md">
          A prebuilt setup with <span className="text-blue-400">Vite</span>,{" "}
          <span className="text-teal-400">Tailwind CSS</span>,{" "}
          <span className="text-pink-400">Framer Motion</span>, and{" "}
          <span className="text-yellow-400">React Icons</span>.
        </p>
        <p className="mt-4 text-sm text-gray-500">
          Edit <code>src/App.jsx</code> and start building your project!
        </p>
      </motion.div>
    </div>
  );
}
