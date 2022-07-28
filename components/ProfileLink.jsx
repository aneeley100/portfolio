import Link from "next/link"

export default function ProfileLink({ children, href }) {
  return (
    <Link href={href} passHref={true}>
      <button className="border-solid h-9 rounded hover:text-slate-300 border w-52 hover:opacity-70 opacity-100 text-mint-900 transition-all duration-200 flex flex-row items-center justify-center">
        {children}
      </button>
    </Link>
  )
}