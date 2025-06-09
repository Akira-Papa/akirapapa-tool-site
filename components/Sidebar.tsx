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
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faHome,
    faClock,
    faFileAlt,
    faKey,
    faQrcode,
    faPalette,
    faFileCode
} from '@fortawesome/free-solid-svg-icons'

const StyledListItem = styled(ListItem)(({ theme }) => ({
    margin: '0',
    padding: '0',
    borderRadius: '0',
    '&:hover': {
        background: '#f8f8f8',
        '& a': {
            color: '#1a237e',
        },
        '& svg': {
            color: '#1a237e !important',
        },
    },
}))

const StyledSidebar = styled(Box)(({ theme }) => ({
    background: '#ffffff',
    borderRight: '1px solid #f0f0f0',
}))

const Sidebar: React.FC = () => {
    const menuItems = [
        { href: '/', label: 'ホーム', icon: faHome },
        { href: '/unixtime', label: 'UNIXタイムスタンプ', icon: faClock },
        { href: '/wordcount', label: '文字数カウント', icon: faFileAlt },
        { href: '/password', label: 'パスワード生成', icon: faKey },
        { href: '/qrcode', label: 'QRコード生成', icon: faQrcode },
        { href: '/colorpicker', label: 'カラーピッカー', icon: faPalette },
        { href: '/markdown', label: 'マークダウンエディタ', icon: faFileCode },
    ]

    const drawerContent = (
        <Box sx={{ padding: 0 }}>
            <Box sx={{ height: 24 }} />
            <List sx={{ padding: 0 }}>
                {menuItems.map((item, index) => (
                    <StyledListItem key={index} disablePadding>
                        <Link 
                            href={item.href} 
                            passHref
                            style={{
                                width: '100%',
                                padding: '12px 24px',
                                display: 'flex',
                                alignItems: 'center',
                                textDecoration: 'none',
                                color: '#666666',
                                transition: 'all 0.15s ease',
                            }}
                        >
                            <ListItemIcon sx={{ minWidth: 40 }}>
                                <FontAwesomeIcon 
                                    icon={item.icon} 
                                    style={{ 
                                        fontSize: '16px',
                                        color: '#666666'
                                    }}
                                />
                            </ListItemIcon>
                            <ListItemText
                                primary={item.label}
                                primaryTypographyProps={{
                                    fontSize: '0.875rem',
                                    fontWeight: 400,
                                    letterSpacing: '-0.01em',
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
                display: 'flex',
                flexDirection: 'column',
                position: { xs: 'fixed', md: 'absolute' },
                top: 0,
                left: 0,
                bottom: 0,
                height: '100%',
                zIndex: 1200,
            }}
        >
            <Box sx={{ flex: 1, overflowY: 'auto' }}>
                {drawerContent}
            </Box>
            <Box
                sx={{
                    p: 3,
                    borderTop: '1px solid #f0f0f0',
                }}
            >
                <Typography
                    variant="caption"
                    sx={{
                        fontSize: '0.75rem',
                        color: '#999999',
                        display: 'block',
                        textAlign: 'center',
                    }}
                >
                    © 2024 あきらパパツールサイト
                </Typography>
            </Box>
        </StyledSidebar>
    )
}

export default Sidebar