'use client'
import React from 'react'
import { AppBar, Toolbar, Typography, Container, Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTools } from '@fortawesome/free-solid-svg-icons'

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    background: '#ffffff',
    boxShadow: '0 1px 0 rgba(0,0,0,0.05)',
    borderBottom: '1px solid #f0f0f0',
}))

const StyledTypography = styled(Typography)(({ theme }) => ({
    color: '#1a1a1a',
    fontWeight: 500,
    fontSize: '1.125rem',
    letterSpacing: '-0.02em',
}))

const Header: React.FC = () => {
    return (
        <StyledAppBar position="static" elevation={0}>
            <Container maxWidth={false}>
                <Toolbar disableGutters sx={{ height: 64, px: 3 }}>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                        }}
                    >
                        <Box
                            sx={{
                                width: 36,
                                height: 36,
                                borderRadius: '8px',
                                background: '#000000',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <FontAwesomeIcon 
                                icon={faTools} 
                                style={{ 
                                    color: '#ffffff',
                                    fontSize: '18px'
                                }}
                            />
                        </Box>
                        <StyledTypography variant="h6" noWrap>
                            開発者ツール
                        </StyledTypography>
                    </Box>
                </Toolbar>
            </Container>
        </StyledAppBar>
    )
}

export default Header