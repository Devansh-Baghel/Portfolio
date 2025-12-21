'use client';

import { MdWork as WorkIcon } from 'react-icons/md';
import { BsBuildingsFill as CompanyIcon } from 'react-icons/bs';
import { FaLocationDot as LocationIcon } from 'react-icons/fa6';
import AOSComponent from '@/lib/aos';

export default function WorkExperience() {
  return (
    <AOSComponent>
      <section
        id="work"
        className="relative z-10 mt-32 2xl:mt-52 p-6 text-slate-900"
      >
        <h3
          data-aos="fade-left"
          className="work-title motion-preset-blur-right mb-8 font-heading text-4xl flex items-center gap-2"
        >
          <WorkIcon />
          Work Experience
        </h3>

        <div id="experience-container" className="mb-6 flex flex-col gap-6">
          <div data-aos="fade-left">
            <div className="wrapper flex flex-col gap-4 rounded-[30px] border-[3px] border-slate-900 p-6 shadow-[4px_4px_0px_0px_#1e293b] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="font-heading text-3xl">
                    Full Stack Developer
                  </h3>
                  <p className="mt-1 text-lg font-semibold text-slate-700 flex items-center gap-2">
                    <CompanyIcon />
                    HypedX - by Digital Gimmick
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-sm mt-2 text-slate-600 md:text-base text-right">
                    November 2025 - Present
                  </p>
                  <p className="mt-1 text-md self-end font-semibold text-slate-700 flex items-center gap-2 text-right">
                    <LocationIcon />
                    Remote
                  </p>
                </div>
              </div>

              <ul className="flex flex-col gap-3 text-slate-700">
                <li className="flex gap-3 text-lg bg-white/80 rounded-lg shadow-md px-4 py-2 hover:border-l-4 border-slate-700 transition-all duration-100">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-900"></span>
                  <span>
                    Maintained and developed features for a full-stack YouTube
                    views marketplace using Next.js frontend and
                    Node.js/TypeScript backend
                  </span>
                </li>
                <li className="flex gap-3 text-lg bg-white/80 rounded-lg shadow-md px-4 py-2 hover:border-l-4 border-slate-700 transition-all duration-100">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-900"></span>
                  <span>
                    Implemented AI-powered features using OpenRouter and Vercel
                    AI SDK for automated tag generation and content optimization
                  </span>
                </li>
                <li className="flex gap-3 text-lg bg-white/80 rounded-lg shadow-md px-4 py-2 hover:border-l-4 border-slate-700 transition-all duration-100">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-900"></span>
                  <span>
                    Built automated MongoDB backup system with cron jobs (6-hour
                    intervals) and Cloudflare R2 integration for cloud storage
                    with automated cleanup policies
                  </span>
                </li>
                <li className="flex gap-3 text-lg bg-white/80 rounded-lg shadow-md px-4 py-2 hover:border-l-4 border-slate-700 transition-all duration-100">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-900"></span>
                  <span>
                    Handled API rate-limiting on all tools of the platform
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </AOSComponent>
  );
}
