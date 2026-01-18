import { HandHeartIcon } from "./ui/hand-heart"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative z-10 mt-24 p-6 pb-20 text-slate-900">
      <div className="p-6 text-center">
        <p className="text-lg flex gap-1.5 items-center justify-center">
          Made with <HandHeartIcon className="size-7" /> and <span className="text-lime-500">not ai</span> by yours truly.
        </p>
        <p className="mt-2 text-sm text-slate-600">
          © {currentYear} Devansh Baghel
        </p>
      </div>
    </footer>
  )
}
