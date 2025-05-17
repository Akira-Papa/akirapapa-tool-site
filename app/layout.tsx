'use client'
import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import { Container, Box } from '@mui/material'
import '../styles/globals.css'

const Layout = ({ children }) => {
    const [isRendered, setIsRendered] = useState(false)

    useEffect(() => {
        setIsRendered(true)
    }, [])

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
                {isRendered && (
                    <>
                        <Header />
                        <Box sx={{ display: 'flex', flex: 1 }}>
                            <Sidebar />
                            <Box
                                component="main"
                                sx={{
                                    flexGrow: 1,
                                    p: 2,
                                    ml: { xs: 0, md: '240px' },
                                    width: {
                                        xs: '100%',
                                        md: 'calc(100% - 240px)',
                                    },
                                    transition: 'margin-left 0.3s ease',
                                }}
                            >
                                <Container maxWidth="lg">{children}</Container>
                            </Box>
                        </Box>
                        <Footer />
                    </>
                )}
            </body>
        </html>
    )
}

export default Layout
