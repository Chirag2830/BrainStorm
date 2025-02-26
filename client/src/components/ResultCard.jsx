export default function ResultCard({ score, total, onRetry }) {
    return (
      <div className="bg-white/20 backdrop-blur-md p-10 rounded-3xl shadow-lg text-center max-w-md">
        <h2 className="text-3xl font-bold text-white">Quiz Completed! 🎉</h2>
        <p className="text-lg text-white mt-2">
          You scored <span className="font-bold">{score}</span> out of <span className="font-bold">{total}</span>
        </p>
  
        <div className="mt-6">
          {score >= total / 2 ? (
            <p className="text-xl text-green-200 font-semibold">Great Job! 🌟</p>
          ) : (
            <p className="text-xl text-red-200 font-semibold">Better Luck Next Time! 💡</p>
          )}
        </div>
  
        <button
          className="mt-6 px-6 py-3 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-all"
          onClick={onRetry}
        >
          Play Again 🔄
        </button>
      </div>
    );
  }
  