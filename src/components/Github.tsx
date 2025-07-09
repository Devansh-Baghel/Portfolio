"use client";
import AOSComponent from "@/lib/aos";
import GitHubCalendar from "react-github-calendar";

export default function Github() {
  return (
    <AOSComponent>
      <section
        id="github"
        className="mt-32 flex max-w-[630px] flex-col gap-6 p-6 pb-0 text-slate-900"
      >
        <h3 className="gitroll-title mb-4 text-4xl" data-aos="fade-left">
          Github Profile
        </h3>

        {/* <a
          href="https://gitroll.io/profile/uEYBeQmpK8LQdxyyFmiTOicIEPrG2"
          target="_blank"
          className="group relative"
          data-aos="fade-left"
        >
          <img
            src="/gitroll_18.avif"
            className="wrapper w-full rounded-[30px] border-[3px] border-slate-900 shadow-[4px_4px_0px_0px_#1e293b] transition-all duration-200 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none"
            alt="GitRoll Profile Badge"
          />
        </a> */}

        <div className="flex flex-col gap-4">
          <GitHubCalendar username="Devansh-Baghel" colorScheme="light" year={2025}/>
          <GitHubCalendar
            username="Devansh-Baghel"
            colorScheme="light"
            year={2024}
            hideColorLegend
            hideMonthLabels
          />
          <GitHubCalendar
            username="Devansh-Baghel"
            colorScheme="light"
            year={2023}
            hideColorLegend
            hideMonthLabels
          />
        </div>
      </section>
    </AOSComponent>
  );
}
