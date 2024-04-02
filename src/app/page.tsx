export default function Home() {
  return (
    <div className="w-screen h-screen bg-white text-3xl hero">
      {/*       <img src="/shape-120.svg" alt="" /> */}
      {/* <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_231_793)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M50 0H200V50V150L150 200L150 50H0L50 0ZM0 165.067V100L65.067 100L0 165.067ZM100 200H35.7777L100 135.778L100 200Z" fill="url(#paint0_linear_231_793)"/> </g> <defs> <linearGradient id="paint0_linear_231_793" x1="177" y1="-9.23648e-06" x2="39.5" y2="152.5" gradientUnits="userSpaceOnUse"> <stop stop-color="#B0B9FF"/> <stop offset="1" stop-color="#E7E9FF"/> </linearGradient> <clipPath id="clip0_231_793"> <rect width="200" height="200" fill="white"/> </clipPath> </defs> </svg> */}
      <div className="fixed">
        <h1 className="text-[3.5em] absolute top-20 left-10 text-slate-900 leading-tight">
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
