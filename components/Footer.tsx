'use client'
import React from 'react'
import { Box, Typography, Container } from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledFooter = styled(Box)(({ theme }) => ({
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: '20px 0',
    marginTop: 'auto',
    boxShadow: '0 -2px 10px rgba(0,0,0,0.1)',
}))

const Footer = () => {
    return (
        <StyledFooter component="footer">
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center' }}>
                    <Typography
                        variant="body2"
                        sx={{
                            opacity: 0.9,
                            fontSize: '0.875rem',
                            letterSpacing: '0.5px',
                        }}
                    >
                        © 2024 あきらパパツールサイト. All rights reserved.
                    </Typography>
                    <Typography
                        variant="caption"
                        sx={{
                            opacity: 0.7,
                            mt: 0.5,
                            display: 'block',
                            fontSize: '0.75rem',
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
