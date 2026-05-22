import Fady from "./fady";
import Tony from "./tony";
import { useState   , useEffect} from "react";
import Popup from "./popup";

function App() {
  const [countFady, setCountFady] = useState(0);
  const [countTony, setCountTony] = useState(0);
   const [winner, setWinner] = useState("");

  const handleAddFady = () => setCountFady((prev) => prev + 1);
  const handleSubtractFady = () => setCountFady((prev) => prev - 1);
  const handleAddTony = () => setCountTony((prev) => prev + 1);
  const handleSubtractTony = () => setCountTony((prev) => prev - 1);

 
  
useEffect(() => {
  if (countTony === 10 || countFady === 10) {
    setWinner(countFady === 10 ? "Fady" : "Tony");
  }
}, [countTony, countFady]);



  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 flex flex-col items-center py-10">
      
      {/* Decorative Top Bar */}
      <div className="w-full max-w-4xl h-1 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 rounded-full mb-8"></div>
      
      {/* Title with Shadow */}
      <h1 className="text-8xl font-extrabold text-white tracking-wide mb-4 drop-shadow-2xl">
        Ethnio
      </h1>
      <div className="flex gap-2 mb-12">
        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
        <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
        <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
      </div>

      {/* Cards Container */}
      <div className="flex flex-col md:flex-row gap-12 items-center">
        
        {/* Tony Card with Blue Theme */}
        <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl p-1 shadow-2xl hover:shadow-blue-500/50 transition-shadow">
          <div className="bg-white rounded-2xl p-6">
            <div className="text-center mb-4">
         
            </div>
            <Tony
              count={countTony}
              handleAdd={handleAddTony}
              handleSubtract={handleSubtractTony}
            />
          </div>
        </div>

        {/* VS with Gradient */}
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full w-20 h-20 flex items-center justify-center shadow-xl transform rotate-12">
          <span className="text-3xl font-black text-white">VS</span>
        </div>

        {/* Fady Card with Pink Theme */}
        <div className="bg-gradient-to-br from-pink-500 to-purple-700 rounded-3xl p-1 shadow-2xl hover:shadow-pink-500/50 transition-shadow">
          <div className="bg-white rounded-2xl p-6">
            <div className="text-center mb-4">
         
            </div>
            <Fady
              count={countFady}
              handleAdd={handleAddFady}
              handleSubtract={handleSubtractFady}
            />
          </div>
        </div>
      </div>

      
      
        {winner && (
        <Popup
          winner={winner}
          onClose={() => setWinner("")}
        />
      )}
    
    </main>
  );
}

export default App;