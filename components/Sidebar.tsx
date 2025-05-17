'use client'
import React from 'react'
import Link from 'next/link'
import { Drawer, List, ListItem, ListItemText, Box } from '@mui/material'

interface SidebarProps {
    open: boolean
    onClose: () => void
}

const Sidebar: React.FC<SidebarProps> = ({ open, onClose }) => {
    const drawerContent = (
        <List
            sx={{ width: 240, bgcolor: 'background.paper' }} // Adjusted width for consistency
            onClick={onClose} // Close drawer when any item is clicked
            onKeyDown={onClose} // Close drawer on keydown for accessibility
        >
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
        <>
            {/* モバイル表示用のドロワー（md未満で表示） */}
            <Drawer
                variant="temporary"
                open={open}
                onClose={onClose}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: 240,
                        bgcolor: 'background.paper',
                        borderRight: '1px solid',
                        borderColor: 'divider',
                    },
                }}
            >
                {drawerContent}
            </Drawer>

            {/* デスクトップ表示用の固定サイドバー（md以上で表示） */}
            <Box
                sx={{
                    width: 240,
                    flexShrink: 0,
                    display: { xs: 'none', md: 'block' },
                    borderRight: '1px solid',
                    borderColor: 'divider',
                }}
            >
                {drawerContent}
            </Box>
        </>
    )
}

export default Sidebar
