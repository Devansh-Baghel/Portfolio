'use client';

import { useSearchParams } from 'next/navigation';
import { MdWork as WorkIcon } from 'react-icons/md';
import { BsBuildingsFill as CompanyIcon } from 'react-icons/bs';
import { FaLocationDot as LocationIcon } from 'react-icons/fa6';
import { FaRegCalendarAlt as DateIcon } from 'react-icons/fa';
import Snowfall from 'react-snowfall';
import ScrollReveal from '@/components/ScrollReveal';
import { workExperience } from '@/data/portfolio';

export default function WorkExperience() {
  const searchParams = useSearchParams();
  const snowEnabled = searchParams.get('snow') !== 'off';

  return (
    <>
      {snowEnabled && <Snowfall />}
      <section
        id="work"
        className="relative z-10 mt-32 2xl:mt-52 p-6 text-slate-900"
      >
        <ScrollReveal>
          <h3 className="work-title mb-8 font-heading text-4xl flex items-center gap-2">
            <WorkIcon />
            Work Experience
          </h3>
        </ScrollReveal>

        <div
          id="experience-container"
          className="mb-6 flex flex-col gap-6"
          style={{
            backgroundImage: 'url("/backgrounds/Grad_03.png")',
            backgroundSize: 'contain',
            backgroundPosition: 'top',
            backgroundRepeat: 'repeat-y',
          }}
        >
          {workExperience.map((entry) => (
            <ScrollReveal key={entry.company}>
              <div className="wrapper flex flex-col gap-4 rounded-[30px] border-[3px] border-slate-900 p-6 shadow-[4px_4px_0px_0px_#1e293b] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
                <div className="flex flex-col gap-2 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <h3 className="font-heading text-3xl">{entry.role}</h3>
                    <p className="mt-1 text-lg font-semibold text-slate-700 flex items-center gap-2">
                      <CompanyIcon />
                      {entry.company}
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-sm mt-2 flex items-center gap-2 text-slate-600 md:text-base lg:text-right lg:flex-row-reverse">
                      <DateIcon />
                      {entry.date}
                    </p>
                    <p className="mt-1 text-md lg:self-end font-semibold text-slate-700 flex items-center gap-2 lg:text-right lg:flex-row-reverse">
                      <LocationIcon />
                      {entry.location}
                    </p>
                  </div>
                </div>

                <ul className="flex flex-col gap-3 text-slate-700">
                  {entry.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-3 text-lg bg-white/80 rounded-lg shadow-md px-4 py-2 hover:border-l-4 border-slate-700 transition-all duration-100"
                    >
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-900"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}
