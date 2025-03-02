import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-white/20 backdrop-blur-lg shadow-2xl rounded-3xl p-10 text-center max-w-md border border-white/30"
      >
        <h1 className="text-4xl font-extrabold text-white tracking-wide mb-4">
          Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B6B] to-[#FFD93D]">BrainStorm Quiz</span>
        </h1>
        <p className="text-lg text-white mb-8">
          Test your knowledge with interesting questions!
        </p>
        <Link to="/quiz">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white/20 border border-white/40 px-6 py-3 rounded-xl text-white font-semibold hover:bg-white/40 transition-all"
          >
            Start Quiz
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}
