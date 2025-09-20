import { useRef, useState, useEffect } from "react";
import "./App.css";

function App() {
  const [currentCount, setCurrentCount] = useState(0);
  const timer = useRef(null);

  function startClock() {
    if (timer.current) return;
    const value = setInterval(() => {
      setCurrentCount((c) => c + 1);
    }, 1000);
    timer.current = value;
  }

  function stopClock() {
    clearInterval(timer.current);
    timer.current = null;
  }

  function restartClock() {
    setCurrentCount(0);
    stopClock();
  }

  useEffect(() => {
    return () => clearInterval(timer.current);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="backdrop-blur-lg bg-white/5 border border-white/10 shadow-2xl rounded-2xl p-10 text-center space-y-6">
        <h2 className="text-xl font-medium text-gray-300">Stopwatch</h2>
        <h1 className="text-6xl font-bold tracking-wider text-white">
          {currentCount}
        </h1>
        <div className="flex gap-4 justify-center">
          <button
            onClick={startClock}
            className="px-6 py-2 rounded-lg bg-white/10 border border-white/20 text-gray-200 hover:bg-white/20 transition"
          >
            Start
          </button>
          <button
            onClick={stopClock}
            className="px-6 py-2 rounded-lg bg-white/10 border border-white/20 text-gray-200 hover:bg-white/20 transition"
          >
            Stop
          </button>
          <button
            onClick={restartClock}
            className="px-6 py-2 rounded-lg bg-white/10 border border-white/20 text-gray-200 hover:bg-white/20 transition"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
