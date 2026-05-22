 function Tony({ count, handleAdd, handleSubtract }) {
 

  return (
    <div className="flex flex-col gap-5 ">

      <img src="assets/tony.jpeg" width={200} height={200} alt="tony" />

      <h1 className="text-4xl font-bold text-center ">Tony</h1>

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

export default Tony;
