import { useLocation, useNavigate } from "react-router-dom";
import ResultCard from "../components/ResultCard";

export default function ResultPage() {
  const location = useLocation();
  const { score, total } = location.state || { score: 0, total: 10 };
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-red-400 to-pink-500">
      <ResultCard score={score} total={total} onRetry={() => navigate("/")} />
    </div>
  );
}
