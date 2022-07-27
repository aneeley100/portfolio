import { Box, Button, Typography } from "@mui/material"
import Link from "next/link"

export default function ProfileLink({ children, href }) {
  return (
    <Link href={href} passHref={true}>
      <Button component={"a"} sx={{ borderStyle: "solid", borderWidth: 1, width: 200, color: "primary" }}>
        {children}
      </Button>
    </Link>
  )
}