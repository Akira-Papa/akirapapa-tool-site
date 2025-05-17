'use client'
import React from 'react'
import Link from 'next/link'
import { List, ListItem, ListItemText, Box } from '@mui/material'

const Sidebar: React.FC = () => {
    const drawerContent = (
        <List sx={{ width: 240, bgcolor: 'background.paper' }}>
            <ListItem
                sx={{ '&:hover': { bgcolor: 'primary.light', color: 'white' } }}
            >
                <Link
                    href="/"
                    passHref
                    style={{
                        color: 'inherit',
                        textDecoration: 'none',
                        width: '100%',
                    }}
                >
                    <ListItemText primary="ホーム" sx={{ color: '#333333' }} />
                </Link>
            </ListItem>
            <ListItem
                sx={{ '&:hover': { bgcolor: 'primary.light', color: 'white' } }}
            >
                <Link
                    href="/unixtime"
                    passHref
                    style={{
                        color: 'inherit',
                        textDecoration: 'none',
                        width: '100%',
                    }}
                >
                    <ListItemText
                        primary="UNIXタイムスタンプ変換"
                        sx={{ color: 'inherit', textDecoration: 'none' }}
                    />
                </Link>
            </ListItem>
            <ListItem
                sx={{ '&:hover': { bgcolor: 'primary.light', color: 'white' } }}
            >
                <Link
                    href="/wordcount"
                    passHref
                    style={{
                        color: 'inherit',
                        textDecoration: 'none',
                        width: '100%',
                    }}
                >
                    <ListItemText
                        primary="文字数カウント"
                        sx={{ color: 'inherit', textDecoration: 'none' }}
                    />
                </Link>
            </ListItem>
            <ListItem
                sx={{ '&:hover': { bgcolor: 'primary.light', color: 'white' } }}
            >
                <Link
                    href="/password"
                    passHref
                    style={{
                        color: 'inherit',
                        textDecoration: 'none',
                        width: '100%',
                    }}
                >
                    <ListItemText
                        primary="パスワードジェネレーター"
                        sx={{ color: 'inherit', textDecoration: 'none' }}
                    />
                </Link>
            </ListItem>
            <ListItem
                sx={{ '&:hover': { bgcolor: 'primary.light', color: 'white' } }}
            >
                <Link
                    href="/qrcode"
                    passHref
                    style={{
                        color: 'inherit',
                        textDecoration: 'none',
                        width: '100%',
                    }}
                >
                    <ListItemText
                        primary="QRコード生成"
                        sx={{ color: 'inherit', textDecoration: 'none' }}
                    />
                </Link>
            </ListItem>
            <ListItem
                sx={{ '&:hover': { bgcolor: 'primary.light', color: 'white' } }}
            >
                <Link
                    href="/colorpicker"
                    passHref
                    style={{
                        color: 'inherit',
                        textDecoration: 'none',
                        width: '100%',
                    }}
                >
                    <ListItemText
                        primary="カラーピッカー"
                        sx={{ color: 'inherit', textDecoration: 'none' }}
                    />
                </Link>
            </ListItem>
            <ListItem
                sx={{ '&:hover': { bgcolor: 'primary.light', color: 'white' } }}
            >
                <Link
                    href="/markdown"
                    passHref
                    style={{
                        color: 'inherit',
                        textDecoration: 'none',
                        width: '100%',
                    }}
                >
                    <ListItemText
                        primary="マークダウンエディター"
                        sx={{ color: 'inherit', textDecoration: 'none' }}
                    />
                </Link>
            </ListItem>
        </List>
    )

    return (
        <Box
            sx={{
                width: 240,
                flexShrink: 0,
                display: 'block',
                position: { xs: 'fixed', md: 'static' },
                height: '100%',
                zIndex: 1200,
                borderRight: '1px solid',
                borderColor: 'divider',
                bgcolor: 'background.paper',
            }}
        >
            {drawerContent}
        </Box>
    )
}

export default Sidebar
