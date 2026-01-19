import { HandHeartIcon } from "./ui/hand-heart"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative z-10 mt-24 p-6 pb-20 text-slate-600">
      <div className="p-6 text-center">
        <span className="text-lg flex gap-1.5 items-center justify-center">
          Made with <HandHeartIcon className="size-7" /> by yours truly.
        </span>
        {/* <p className="mt-2 text-sm text-slate-400">
          © {currentYear} Devansh Baghel
        </p> */}

        <TooltipProvider delayDuration={200}>
          <Tooltip>
            <TooltipTrigger>
              <p className="mt-2 text-sm text-slate-400 underline decoration-dashed underline-offset-2">
                easter egg?
              </p>
            </TooltipTrigger>
            <TooltipContent side="right" className="mt-2 text-white bg-slate-900 rounded-xl">
              <p>Look at the favicon</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </footer>
  )
}
