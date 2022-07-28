import Link from "next/link"

export default function ProfileLink({ children, href }) {
  return (
    <Link href={href} passHref={true}>
      <button className="border-solid h-9 rounded text-slate-300 border w-52 opacity-70 hover:opacity-100 hover:text-emerald-300 transition-all duration-500 flex flex-row items-center justify-center">
        {children}
      </button>
    </Link>
  )
}