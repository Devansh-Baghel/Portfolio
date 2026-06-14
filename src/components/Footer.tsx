import Link from "next/link"
import { FaGithub as GithubIcon } from "react-icons/fa"
import { FaLinkedin as LinkedinIcon } from "react-icons/fa"
import { FaXTwitter as TwitterIcon } from "react-icons/fa6"
import { MdOutgoingMail as MailIcon } from "react-icons/md"
import { HandHeartIcon } from "./ui/hand-heart"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const navLinks: ReadonlyArray<{
  href: string;
  label: string;
  external?: boolean;
}> = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/resume.pdf", label: "Resume", external: true },
]

const socialLinks = [
  { href: "https://github.com/devansh-baghel", label: "GitHub", Icon: GithubIcon },
  { href: "https://linkedin.com/in/devanshbaghel", label: "LinkedIn", Icon: LinkedinIcon },
  { href: "https://twitter.com/bagheldotdev", label: "Twitter", Icon: TwitterIcon },
  { href: "mailto:hello@baghel.dev", label: "Email", Icon: MailIcon },
] as const

export default function Footer() {
  return (
    <footer className="relative z-10 mt-24 border-t-2 border-slate-900/10 p-6 pb-20 text-slate-600">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-6 text-center">
        <nav aria-label="Primary">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-base font-medium text-slate-900">
            {navLinks.map((link) =>
              link.external ? (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 hover:text-lime-600"
                  >
                    {link.label}
                  </a>
                </li>
              ) : (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="underline underline-offset-4 hover:text-lime-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <ul className="flex items-center gap-5">
          {socialLinks.map(({ href, label, Icon }) => (
            <li key={href}>
              <a
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                aria-label={label}
                className="inline-flex text-slate-700 hover:text-lime-600"
              >
                <Icon className="h-6 w-6" />
              </a>
            </li>
          ))}
        </ul>

        <span className="text-base flex gap-1.5 items-center justify-center">
          Made with <HandHeartIcon className="size-7" /> by yours truly.
        </span>

        <TooltipProvider delayDuration={200}>
          <Tooltip>
            <TooltipTrigger>
              <p className="text-sm text-slate-400 underline decoration-dashed underline-offset-2 hidden md:block">
                notice anything?
              </p>
            </TooltipTrigger>
            <TooltipContent side="right" className="mt-2 text-white bg-slate-900 rounded-xl">
              <p>Look at the browser tab icon 👀</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </footer>
  )
}
