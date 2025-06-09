'use client'
import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
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
                    margin: 0,
                    padding: 0,
                    background:
                        'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                    backgroundAttachment: 'fixed',
                    minHeight: '100vh',
                }}
            >
                {isRendered && (
                    <Box
                        sx={{
                            minHeight: '100vh',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <Header />
                        <Box
                            sx={{
                                display: 'flex',
                                flex: 1,
                                position: 'relative',
                            }}
                        >
                            <Sidebar />
                            <Box
                                component="main"
                                sx={{
                                    flexGrow: 1,
                                    ml: { xs: 0, md: '240px' },
                                    width: {
                                        xs: '100%',
                                        md: 'calc(100% - 240px)',
                                    },
                                    transition: 'margin-left 0.3s ease',
                                    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                                    minHeight: '100%',
                                    paddingLeft: 0,
                                }}
                            >
                                <Container
                                    maxWidth="lg"
                                    sx={{
                                        py: 3,
                                    }}
                                >
                                    {children}
                                </Container>
                            </Box>
                        </Box>
                    </Box>
                )}
            </body>
        </html>
    )
}

export default Layout
