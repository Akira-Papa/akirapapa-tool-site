'use client'
import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Container } from '@mui/material'
import '../styles/globals.css'

const Layout = ({ children }) => {
    const [isRendered, setIsRendered] = useState(false)
    useEffect(() => {
        setIsRendered(true)
    }, [isRendered])

    return (
        <html lang="ja">
            <body
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                }}
            >
                {isRendered ? (
                    <>
                        <Header />
                        <main style={{ flex: 1 }}>
                            <Container maxWidth="lg">{children}</Container>
                        </main>
                        <Footer />
                    </>
                ) : null}
            </body>
        </html>
    )
}

export default Layout
