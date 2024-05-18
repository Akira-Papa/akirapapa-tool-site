'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import {
    AppBar,
    Toolbar,
    Typography,
    Container,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    useMediaQuery,
    useTheme,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

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

    const drawer = (
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        >
            <ListItem
                onClick={handleDrawerToggle}
                sx={{ '&:hover': { bgcolor: 'primary.light', color: 'white' } }}
            >
                <Link
                    href="/"
                    passHref
                    style={{ color: 'inherit', textDecoration: 'none' }}
                >
                    <ListItemText primary="ホーム" sx={{ color: '#333333' }} />
                </Link>
            </ListItem>
            <ListItem
                onClick={handleDrawerToggle}
                sx={{ '&:hover': { bgcolor: 'primary.light', color: 'white' } }}
            >
                <Link
                    href="/unixtime"
                    passHref
                    style={{ color: 'inherit', textDecoration: 'none' }}
                >
                    <ListItemText
                        primary="UNIXタイムスタンプ変換"
                        sx={{ color: 'inherit', textDecoration: 'none' }}
                    />
                </Link>
            </ListItem>
            <ListItem
                onClick={handleDrawerToggle}
                sx={{ '&:hover': { bgcolor: 'primary.light', color: 'white' } }}
            >
                <Link
                    href="/wordcount"
                    passHref
                    style={{ color: 'inherit', textDecoration: 'none' }}
                >
                    <ListItemText
                        primary="文字数カウント"
                        sx={{ color: 'inherit', textDecoration: 'none' }}
                    />
                </Link>
            </ListItem>
            <ListItem
                onClick={handleDrawerToggle}
                sx={{ '&:hover': { bgcolor: 'primary.light', color: 'white' } }}
            >
                <Link
                    href="/password"
                    passHref
                    style={{ color: 'inherit', textDecoration: 'none' }}
                >
                    <ListItemText
                        primary="パスワードジェネレーター"
                        sx={{ color: 'inherit', textDecoration: 'none' }}
                    />
                </Link>
            </ListItem>
            <ListItem
                onClick={handleDrawerToggle}
                sx={{ '&:hover': { bgcolor: 'primary.light', color: 'white' } }}
            >
                <Link
                    href="/qrcode"
                    passHref
                    style={{ color: 'inherit', textDecoration: 'none' }}
                >
                    <ListItemText
                        primary="QRコード生成"
                        sx={{ color: 'inherit', textDecoration: 'none' }}
                    />
                </Link>
            </ListItem>
            <ListItem
                onClick={handleDrawerToggle}
                sx={{ '&:hover': { bgcolor: 'primary.light', color: 'white' } }}
            >
                <Link
                    href="/colorpicker"
                    passHref
                    style={{ color: 'inherit', textDecoration: 'none' }}
                >
                    <ListItemText
                        primary="カラーピッカー"
                        sx={{ color: 'inherit', textDecoration: 'none' }}
                    />
                </Link>
            </ListItem>
        </List>
    )

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
                        <Drawer
                            variant="temporary"
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                            sx={{
                                display: { xs: 'block', lg: 'none' },
                                '& .MuiDrawer-paper': {
                                    boxSizing: 'border-box',
                                    width: 240,
                                    bgcolor: 'background.paper',
                                    borderRight: '1px solid',
                                    borderColor: 'divider',
                                },
                            }}
                        >
                            {drawer}
                        </Drawer>
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
                        </nav>
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default Header
