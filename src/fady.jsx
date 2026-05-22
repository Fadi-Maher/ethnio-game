 function Fady({count   , handleAdd , handleSubtract}) {
    

  return (
    <div className="flex flex-col gap-5 ">

      <img src="assets/fady.jpeg" width={200} height={200} alt="fady" />

      <h1 className="text-4xl font-bold text-center ">Fady</h1>

      <div className="flex gap-3 items-center text-xl font-bold  justify-center">
       <button className="  text-black text-3xl  font-bold cursor-pointer " onClick={handleSubtract}>
          -
        </button>
           <p className="text-2xl">
            {count} 
            </p>  
              <button className="  text-black text-3xl  font-bold cursor-pointer " onClick={handleAdd}>
          +
        </button>
      
      </div>
    </div>
  );
}

export default Fady;
