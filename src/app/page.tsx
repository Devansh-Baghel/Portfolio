export default function Home() {
  return (
    <div className="w-screen h-screen bg-white text-3xl hero">
      <img
        src="/shape-76.svg"
        alt=""
        className="images fixed animate-spin animate-infinite animate-duration-[20000ms] animate-ease-in-out w-[400px] h-[400px] top-[-120px] left-[-120px]"
      />
      <div className="fixed">
        <h1 className="text-[3.5em] absolute top-10 left-10 text-slate-900 leading-tight">
          Devansh Baghel
          {/* baghel.dev */}
          {/* <span className="box">a</span>
          <span className="box">a</span>
          <span className="box">a</span>
          <span className="box">a</span>
          <span className="box">a</span> */}
        </h1>
      </div>
      {/* <div className="fixed bg-white right-0 top-0 h-20 w-[700px] z-10"></div> */}
      {/* <div className="fixed bg-white right-0 bottom-0 h-20 w-[700px] z-10"></div> */}
      <div className="w-[700px] h-[500px] absolute right-0 z-0 images">
        <img src="/Grad_07.png" alt="" />
        <img src="/Grad_02.png" alt="" />
        <img src="/Grad_10.png" alt="" />
        <img src="/Grad_05.png" alt="" />
      </div>
    </div>
  );
}
