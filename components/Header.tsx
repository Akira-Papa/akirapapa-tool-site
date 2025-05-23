'use client'
import React from 'react'
import { AppBar, Toolbar, Typography, Container, Box } from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    boxShadow:
        '0 4px 20px 0 rgba(0,0,0,0.14), 0 7px 10px -5px rgba(103,126,234,0.4)',
    backdropFilter: 'blur(10px)',
    borderRadius: 0,
}))

const StyledTypography = styled(Typography)(({ theme }) => ({
    background: 'linear-gradient(45deg, #FFF 30%, #E8F5E8 90%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 700,
    letterSpacing: '0.5px',
    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
}))

const Header: React.FC = () => {
    return (
        <StyledAppBar position="static" elevation={0}>
            <Container maxWidth="lg">
                <Toolbar disableGutters sx={{ minHeight: 70 }}>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            flexGrow: 1,
                        }}
                    >
                        <Box
                            sx={{
                                width: 40,
                                height: 40,
                                borderRadius: '50%',
                                background:
                                    'linear-gradient(45deg, #FFF 30%, #E8F5E8 90%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginRight: 2,
                                boxShadow: '0 2px 10px rgba(255,255,255,0.3)',
                            }}
                        >
                            <Typography
                                variant="h6"
                                sx={{ color: '#667eea', fontWeight: 'bold' }}
                            >
                                🛠️
                            </Typography>
                        </Box>
                        <StyledTypography variant="h5" noWrap>
                            あきらパパツールサイト
                        </StyledTypography>
                    </Box>
                </Toolbar>
            </Container>
        </StyledAppBar>
    )
}

export default Header
