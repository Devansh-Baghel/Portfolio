import { HandHeartIcon } from "./ui/hand-heart"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative z-10 mt-24 p-6 pb-20 text-slate-600">
      <div className="p-6 text-center">
        <span className="text-lg flex gap-1.5 items-center justify-center">
          Made with <HandHeartIcon className="size-7" /> by yours truly.
        </span>
        <p className="mt-2 text-sm text-slate-400">
          © {currentYear} Devansh Baghel
        </p>
      </div>
    </footer>
  )
}
