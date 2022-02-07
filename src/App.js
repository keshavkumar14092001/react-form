function App() {
  return (
    <div className="App bg-gray-900 w-screen h-screen relative overflow-hidden flex items-center justify-end pr-10">
      <div className="container h-[30rem] w-[30rem] bg-white bg-opacity-10 relative z-10 rounded-2xl shadow-5xl border border-r-0 border-b-0 border-opacity-10 backdrop-filter backdrop-blur-sm">
        <form className="h-full flex flex-col justify-evenly items-center">
          <div className="font-poppins text-white text-4xl tracking-wider font-semibold w-[100%] pl-6">Log In</div>
          <input type="text" placeholder="Username" className="w-[80%] mr-[55px] font-poppins text-white bg-transparent focus:outline-none border border-r-0 border-l-0 border-t-0 tracking-wide p-2" />
          <input type="password" placeholder="Password" className="w-[80%] mr-[55px] font-poppins text-white bg-transparent focus:outline-none border border-r-0 border-l-0 border-t-0 tracking-wide p-2" />
          <div className="w-[100%] flex items-center justify-evenly mr-[55px]">
            <button className="font-poppins bg-white bg-opacity-5 border px-12 py-2 rounded-lg text-white tracking-wide cursor-pointer hover:bg-opacity-80 hover:text-slate-800 hover:font-bold transition-all">Log In</button>
            <button className="font-poppins bg-white bg-opacity-5 border px-12 py-2 rounded-lg text-white tracking-wide cursor-pointer hover:bg-opacity-80 hover:text-slate-800 hover:font-bold transition-all">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
