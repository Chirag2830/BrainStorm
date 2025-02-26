import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-indigo-500">
      <div className="bg-white/20 backdrop-blur-md p-10 rounded-3xl shadow-lg text-center max-w-md">
        <h1 className="text-4xl font-bold text-white">Welcome to QuizVerse! 🚀</h1>
        <p className="text-white mt-4">Test your knowledge & challenge yourself.</p>
        <Link to="/quiz">
          <button className="mt-6 px-6 py-3 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-all">
            Start Quiz 🎯
          </button>
        </Link>
      </div>
    </div>
  );
}
