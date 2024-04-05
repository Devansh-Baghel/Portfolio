export default function Home() {
  return (
    <main className="w-screen h-screen bg-white text-3xl hero max-w-[1400px] relative m-auto">
      <aside className="fixed text-slate-900 max-w-[600px]">
        <img
          src="/shape-76.svg"
          alt=""
          className="images absolute animate-spin animate-infinite animate-duration-[20000ms] animate-ease-in-out w-[400px] h-[400px] top-[-120px] left-[-80px]"
        />
        <h1 className="text-[3.5em] absolute left-10 top-10 leading-tight">
          Devansh Baghel
          {/* baghel.dev */}
          {/* <span className="box">a</span>
          <span className="box">a</span>
          <span className="box">a</span>
          <span className="box">a</span>
          <span className="box">a</span> */}
        </h1>
        <h3 className="mt-[350px] ml-[50px] text-[38px] text-slate-800">
          Fullstack Developer
        </h3>
        <p className="ml-[50px] text-2xl mt-4">
          Hello there 👋, I'm Devansh Baghel and I build fullstack web apps with{" "}
          <span className="underline  cursor-pointer underline-offset-4">
            modern tools
          </span>
          .
        </p>
      </aside>
      {/* <div className="fixed bg-white right-0 top-0 h-20 w-[700px] z-10"></div> */}
      {/* <div className="fixed bg-white right-0 bottom-0 h-20 w-[700px] z-10"></div> */}
      <div className="w-[700px] h-[500px] absolute right-0 z-0 images">
        <img src="/Grad_07.png" alt="" />
        <img src="/Grad_02.png" alt="" />
        <img src="/Grad_10.png" alt="" />
        <img src="/Grad_05.png" alt="" />
      </div>
    </main>
  );
}
