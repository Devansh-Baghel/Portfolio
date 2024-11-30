export default function GitRoll() {
  return (
    <section
      id="gitroll"
      className="mt-32 flex max-w-[630px] flex-col gap-6 p-6 pb-0 text-slate-900"
    >
      <h3 className="gitroll-title mb-4 text-4xl">GitRoll Profile</h3>

      <a
        href="https://gitroll.io/profile/uEYBeQmpK8LQdxyyFmiTOicIEPrG2"
        target="_blank"
      >
        <img
          src="https://gitroll.io/api/badges/profiles/v1/uEYBeQmpK8LQdxyyFmiTOicIEPrG2?theme=light"
          className="wrapper w-full rounded-[30px] border-[3px] border-slate-900 shadow-[4px_4px_0px_0px_#1e293b] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
          alt="GitRoll Profile Badge"
        />
      </a>
    </section>
  );
}
