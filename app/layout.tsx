'use client'
import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import { Container, Box, useMediaQuery, useTheme } from '@mui/material'
import '../styles/globals.css'

const Layout = ({ children }) => {
    const [isRendered, setIsRendered] = useState(false)
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))

    useEffect(() => {
        setIsRendered(true)
    }, [])

    const handleSidebarToggle = () => {
        setSidebarOpen(!sidebarOpen)
    }

    return (
        <html lang="ja">
            <body
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                    margin: 0,
                    padding: 0,
                }}
            >
                {isRendered ? (
                    <>
                        <Header onMenuClick={handleSidebarToggle} />
                        <Box sx={{ display: 'flex', flex: 1 }}>
                            <Sidebar
                                open={sidebarOpen}
                                onClose={() => setSidebarOpen(false)}
                            />
                            <Box
                                component="main"
                                sx={{
                                    flexGrow: 1,
                                    p: 2,
                                    ml: { xs: 0, md: '240px' }, // mdサイズ以上でサイドバーの幅分だけ左マージンを設定
                                    width: {
                                        xs: '100%',
                                        md: 'calc(100% - 240px)',
                                    }, // サイドバーの幅を考慮
                                    transition: 'margin-left 0.3s ease',
                                }}
                            >
                                <Container maxWidth="lg">{children}</Container>
                            </Box>
                        </Box>
                        <Footer />
                    </>
                ) : null}
            </body>
        </html>
    )
}

export default Layout
