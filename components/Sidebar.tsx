'use client'
import React from 'react'
import Link from 'next/link'
import {
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Box,
    Typography,
    Divider,
} from '@mui/material'
import { styled } from '@mui/material/styles'

// アイコンコンポーネント（絵文字を使用）
const IconBox = styled(Box)(({ theme }) => ({
    width: 24,
    height: 24,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.2rem',
}))

const StyledListItem = styled(ListItem)(({ theme }) => ({
    margin: '4px 8px',
    borderRadius: '8px',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    '&:hover': {
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        transform: 'translateX(4px)',
        boxShadow: '0 4px 20px 0 rgba(102, 126, 234, 0.3)',
        '& .MuiListItemText-primary': {
            color: 'white',
        },
        '& .MuiListItemIcon-root': {
            color: 'white',
        },
    },
}))

const StyledSidebar = styled(Box)(({ theme }) => ({
    background: 'linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)',
    borderRight: '1px solid #e2e8f0',
    boxShadow: '2px 0 10px rgba(0,0,0,0.1)',
}))

const Sidebar: React.FC = () => {
    const menuItems = [
        { href: '/', label: 'ホーム', icon: '🏠' },
        { href: '/unixtime', label: 'UNIXタイムスタンプ変換', icon: '⏰' },
        { href: '/wordcount', label: '文字数カウント', icon: '📝' },
        { href: '/password', label: 'パスワードジェネレーター', icon: '🔐' },
        { href: '/qrcode', label: 'QRコード生成', icon: '📱' },
        { href: '/colorpicker', label: 'カラーピッカー', icon: '🎨' },
        { href: '/markdown', label: 'マークダウンエディター', icon: '📄' },
    ]

    const drawerContent = (
        <Box sx={{ padding: 2 }}>
            <Typography
                variant="h6"
                sx={{
                    mb: 2,
                    px: 2,
                    color: '#475569',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                }}
            >
                ツール一覧
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <List sx={{ padding: 0 }}>
                {menuItems.map((item, index) => (
                    <StyledListItem key={index} disablePadding>
                        <Link
                            href={item.href}
                            passHref
                            style={{
                                color: 'inherit',
                                textDecoration: 'none',
                                width: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                padding: '12px 16px',
                            }}
                        >
                            <ListItemIcon sx={{ minWidth: 40 }}>
                                <IconBox>{item.icon}</IconBox>
                            </ListItemIcon>
                            <ListItemText
                                primary={item.label}
                                sx={{
                                    '& .MuiListItemText-primary': {
                                        fontSize: '0.875rem',
                                        fontWeight: 500,
                                        color: '#475569',
                                    },
                                }}
                            />
                        </Link>
                    </StyledListItem>
                ))}
            </List>
        </Box>
    )

    return (
        <StyledSidebar
            sx={{
                width: 240,
                flexShrink: 0,
                display: 'block',
                position: { xs: 'fixed', md: 'static' },
                minHeight: '100%',
                zIndex: 1200,
                overflowY: 'auto',
            }}
        >
            {drawerContent}
        </StyledSidebar>
    )
}

export default Sidebar
