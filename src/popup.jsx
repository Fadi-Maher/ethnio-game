function Popup({ winner , onClose}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      
      {/* Popup Card */}
      <div className="bg-white rounded-3xl shadow-2xl px-10 py-8 w-[350px] animate-bounce">
        
        {/* Emoji */}
        <div className="text-6xl text-center mb-4">
          🎉
        </div>

        {/* Title */}
        <h1 className="text-3xl font-extrabold text-center text-gray-800">
          Winner!
        </h1>

        {/* Winner Name */}
        <p className="text-xl text-center text-gray-600 mt-4">
          Congratulations,
          <span className="font-bold text-black ml-2">
            {winner}
          </span>
          !
        </p>

     
      </div>
    </div>
  );
}

export default Popup;