'use client'
import React from 'react'
import { AppBar, Toolbar, Typography, Container } from '@mui/material'

const Header: React.FC = () => {
    return (
        <AppBar
            position="static"
            color="primary"
            elevation={0}
            style={{
                margin: 0,
            }}
        >
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        color="#FFFFFF"
                        noWrap
                        sx={{ flexGrow: 1 }}
                    >
                        あきらパパツールサイト
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default Header
