"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { TbAdjustmentsCog } from "react-icons/tb";
import { ChevronDown } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface EasterEgg {
  emoji: string;
  name: string;
  description: string;
  link?: string;
}

const easterEggs: EasterEgg[] = [
  {
    emoji: "🌀",
    name: "Fast Spin",
    description: "The background blob goes brrrrr",
    link: "/?spin=faster",
  },
  {
    emoji: "🖤",
    name: "B&W Mode",
    description: "Everything turns grayscale",
    link: "/?bw=true",
  },
  {
    emoji: "💻",
    name: "Console Secrets",
    description: "Open DevTools & type showSecrets()",
  },
  {
    emoji: "👀",
    name: "Spinning Favicon",
    description: "Look at your browser tab icon!",
  },
  {
    emoji: "✨",
    name: "Grid Distortion",
    description: "Hover over the hero image",
  },
  {
    emoji: "❄️",
    name: "Snowfall",
    description: "It's snowing in work experience",
  },
];

function Toggle({
  label,
  isOn,
  onToggle,
}: {
  label: string;
  isOn: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="flex w-full items-center justify-between rounded-xl border-2 border-slate-900 bg-white px-3.5 py-2.5 shadow-[3px_3px_0px_0px_#84cc16] transition-all duration-200 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
    >
      <span className="text-sm font-semibold text-slate-900">{label}</span>
      <div
        className={`relative h-6 w-11 rounded-full border-2 border-slate-900 transition-colors duration-200 ${
          isOn ? "bg-lime-400" : "bg-slate-200"
        }`}
      >
        <div
          className={`absolute top-0.5 h-4 w-4 rounded-full border-2 border-slate-900 bg-white transition-transform duration-200 ${
            isOn ? "translate-x-5" : "translate-x-0.5"
          }`}
        />
      </div>
    </button>
  );
}

export default function FunBox() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const isBW = searchParams.get("bw") === "true";
  const isFastSpin = searchParams.get("spin") === "faster";
  const isSnowOn = searchParams.get("snow") !== "off";

  function toggleParam(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (params.get(key) === value) {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    const query = params.toString();
    router.push(query ? `?${query}` : "/", { scroll: false });
  }

  function toggleSnow() {
    const params = new URLSearchParams(searchParams.toString());
    if (params.get("snow") === "off") {
      params.delete("snow");
    } else {
      params.set("snow", "off");
    }
    const query = params.toString();
    router.push(query ? `?${query}` : "/", { scroll: false });
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 hidden lg:block">
      <Popover>
        <PopoverTrigger asChild>
          <button
            type="button"
            aria-label="Open The Fun Box"
            className="rounded-full border-[3px] border-slate-900 bg-white p-2.5 shadow-[3px_3px_0px_0px_#84cc16] transition-all duration-200 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
          >
            <TbAdjustmentsCog className="text-2xl text-slate-900" />
          </button>
        </PopoverTrigger>
        <PopoverContent
          side="top"
          align="end"
          sideOffset={12}
          className="w-80 rounded-[20px] border-[3px] border-slate-900 bg-white p-4 shadow-[4px_4px_0px_0px_#1e293b]"
        >
          <div className="space-y-4">
            {/* Easter Eggs Collapsible */}
            {/*<Collapsible defaultOpen={false}>
              <CollapsibleTrigger className="group flex w-full items-center justify-between mb-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Easter Eggs
                </h4>
                <ChevronDown className="h-4 w-4 text-slate-500 transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="space-y-1.5">
                  {easterEggs.map((egg) => (
                    <div
                      key={egg.name}
                      className="flex items-start gap-2.5 rounded-xl border border-slate-200 bg-slate-50 p-2.5"
                    >
                      <span className="mt-px text-base">{egg.emoji}</span>
                      <div className="min-w-0 flex-1">
                        {egg.link ? (
                          <a
                            href={egg.link}
                            className="text-sm font-semibold text-slate-900 underline decoration-dashed underline-offset-2 hover:text-lime-600"
                          >
                            {egg.name}
                          </a>
                        ) : (
                          <p className="text-sm font-semibold text-slate-900">
                            {egg.name}
                          </p>
                        )}
                        <p className="text-xs text-slate-500">
                          {egg.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>*/}

            <div>
              <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                Quick Toggles
              </h4>
              <div className="space-y-2">
                <Toggle
                  label="B&W Mode"
                  isOn={isBW}
                  onToggle={() => toggleParam("bw", "true")}
                />
                <Toggle
                  label="Fast Spin"
                  isOn={isFastSpin}
                  onToggle={() => toggleParam("spin", "faster")}
                />
                <Toggle
                  label="Snowfall"
                  isOn={isSnowOn}
                  onToggle={toggleSnow}
                />
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
