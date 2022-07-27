import { Box, Typography } from "@mui/material"

import styles from "../styles/Foot.module.css"

export default function Foot() {
    return (
        <Box className={styles.footer}>
          <div className={styles.footerText}> © {(new Date().getFullYear())} Andrew Neeley. All Rights Reserved</div>
        </Box>
    )
}