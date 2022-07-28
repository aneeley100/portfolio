import { Button } from "@mui/material"
import Link from "next/link"

export default function ProfileLink({ children, href }) {
  return (
    <Link href={href} passHref={true}>
      <Button component={"a"} className="border-solid text-slate-300 border w-52 opacity-70 hover:opacity-100 hover:text-emerald-300 transition-all duration-500">
        {children}
      </Button>
    </Link>
  )
}