'use client'
import React from 'react'
import { AppBar, Toolbar, Typography, Container, Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import Link from 'next/link'
import HammerIcon from './HammerIcon'

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    background: '#ffffff',
    boxShadow: '0 1px 0 rgba(0,0,0,0.05)',
    borderBottom: '1px solid #f0f0f0',
}))

const StyledTypography = styled(Typography)(({ theme }) => ({
    color: '#1a237e',
    fontWeight: 500,
    fontSize: '1.125rem',
    letterSpacing: '-0.02em',
}))

const Header: React.FC = () => {
    return (
        <StyledAppBar position="static" elevation={0}>
            <Container maxWidth={false}>
                <Toolbar disableGutters sx={{ height: 64, px: 3 }}>
                    <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 16 }}>
                        <Box
                            sx={{
                                width: 36,
                                height: 36,
                                borderRadius: '8px',
                                background: '#1a237e',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                    boxShadow: '0 4px 12px rgba(26, 35, 126, 0.3)',
                                },
                            }}
                        >
                            <HammerIcon size={24} color="#ffffff" />
                        </Box>
                        <StyledTypography variant="h6" noWrap>
                            あきらパパの開発者ツール
                        </StyledTypography>
                    </Link>
                </Toolbar>
            </Container>
        </StyledAppBar>
    )
}

export default Header