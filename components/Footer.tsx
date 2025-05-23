'use client'
import React from 'react'
import { Box, Typography, Container, Divider } from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledFooter = styled(Box)(({ theme }) => ({
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: '32px 0 24px 0',
    boxShadow: '0 -2px 10px rgba(0,0,0,0.1)',
    width: '100%',
    borderTop: '1px solid rgba(255,255,255,0.1)',
}))

const Footer = () => {
    return (
        <StyledFooter component="footer">
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center' }}>
                    <Typography
                        variant="h6"
                        sx={{
                            mb: 1,
                            fontWeight: 600,
                            fontSize: '1.1rem',
                            opacity: 0.95,
                        }}
                    >
                        🛠️ あきらパパツールサイト
                    </Typography>
                    <Divider
                        sx={{
                            mb: 2,
                            backgroundColor: 'rgba(255,255,255,0.2)',
                            maxWidth: '200px',
                            mx: 'auto',
                        }}
                    />
                    <Typography
                        variant="body2"
                        sx={{
                            opacity: 0.9,
                            fontSize: '0.875rem',
                            letterSpacing: '0.5px',
                            mb: 1,
                        }}
                    >
                        © 2024 あきらパパツールサイト. All rights reserved.
                    </Typography>
                    <Typography
                        variant="caption"
                        sx={{
                            opacity: 0.7,
                            fontSize: '0.75rem',
                            display: 'block',
                        }}
                    >
                        Made with ❤️ using Next.js & Material-UI
                    </Typography>
                </Box>
            </Container>
        </StyledFooter>
    )
}

export default Footer
