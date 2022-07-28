import { Button } from "@mui/material"
import Link from "next/link"

export default function ProfileLink({ children, href }) {
  return (
    <Link href={href} passHref={true}>
      <Button component={"a"} className="border-solid text-emerald-300 border w-48">
        {children}
      </Button>
    </Link>
  )
}