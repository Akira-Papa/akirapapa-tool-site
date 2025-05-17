'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import {
    AppBar,
    Toolbar,
    Typography,
    Container,
    IconButton,
    useMediaQuery,
    useTheme,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Sidebar from './Sidebar'

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false)
    const theme = useTheme()
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    const isMobile = useMediaQuery(theme.breakpoints.down('lg'))

    const [isMobileState, setIsMobileState] = useState(true)
    useEffect(() => {
        setIsMobileState(isMobile)
    }, [isMobile])

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
                    {isMobileState ? (
                        <IconButton
                            size="large"
                            edge="start"
                            aria-label="menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleDrawerToggle}
                            color="inherit"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                    ) : null}
                    <Typography
                        variant="h6"
                        color="#FFFFFF"
                        noWrap
                        sx={{ flexGrow: 1 }}
                    >
                        あきらパパツールサイト
                    </Typography>
                    {isMobileState ? (
                        <Sidebar open={mobileOpen} onClose={handleDrawerToggle} />
                    ) : (
                        <nav>
                            <Link
                                href="/"
                                passHref
                                style={{
                                    textDecoration: 'none',
                                }}
                            >
                                <Typography
                                    variant="button"
                                    color="#FFFFFF"
                                    sx={{
                                        margin: '0 10px',
                                    }}
                                >
                                    ホーム
                                </Typography>
                            </Link>
                            <Link
                                href="/unixtime"
                                style={{
                                    textDecoration: 'none',
                                }}
                                passHref
                            >
                                <Typography
                                    variant="button"
                                    color="#FFFFFF"
                                    sx={{
                                        margin: '0 10px',
                                    }}
                                >
                                    UNIXタイムスタンプ変換
                                </Typography>
                            </Link>
                            <Link
                                href="/wordcount"
                                style={{
                                    textDecoration: 'none',
                                }}
                                passHref
                            >
                                <Typography
                                    variant="button"
                                    color="#FFFFFF"
                                    sx={{
                                        margin: '0 10px',
                                    }}
                                >
                                    文字数カウント
                                </Typography>
                            </Link>
                            <Link
                                href="/password"
                                style={{
                                    textDecoration: 'none',
                                }}
                                passHref
                            >
                                <Typography
                                    variant="button"
                                    color="#FFFFFF"
                                    sx={{
                                        margin: '0 10px',
                                    }}
                                >
                                    パスワードジェネレーター
                                </Typography>
                            </Link>
                            <Link
                                href="/qrcode"
                                style={{
                                    textDecoration: 'none',
                                }}
                                passHref
                            >
                                <Typography
                                    variant="button"
                                    color="#FFFFFF"
                                    sx={{
                                        margin: '0 10px',
                                    }}
                                >
                                    QRコード生成
                                </Typography>
                            </Link>
                            <Link
                                href="/colorpicker"
                                style={{
                                    textDecoration: 'none',
                                }}
                                passHref
                            >
                                <Typography
                                    variant="button"
                                    color="#FFFFFF"
                                    sx={{
                                        margin: '0 10px',
                                    }}
                                >
                                    カラーピッカー
                                </Typography>
                            </Link>
                            <Link
                                href="/markdown"
                                style={{
                                    textDecoration: 'none',
                                }}
                                passHref
                            >
                                <Typography
                                    variant="button"
                                    color="#FFFFFF"
                                    sx={{
                                        margin: '0 10px',
                                    }}
                                >
                                    マークダウンエディター
                                </Typography>
                            </Link>
                        </nav>
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default Header
