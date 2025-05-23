'use client'
import React from 'react'
import { Box, Typography, Button, Paper, Container } from '@mui/material'
import { styled } from '@mui/material/styles'
import RefreshIcon from '@mui/icons-material/Refresh'
import HomeIcon from '@mui/icons-material/Home'

const ErrorContainer = styled(Box)(({ theme }) => ({
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
}))

const ErrorCard = styled(Paper)(({ theme }) => ({
    background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
    border: '1px solid #e2e8f0',
    borderRadius: '24px',
    padding: '3rem',
    textAlign: 'center',
    maxWidth: '600px',
    width: '100%',
    boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
}))

const StyledButton = styled(Button)(({ theme }) => ({
    borderRadius: '12px',
    padding: '12px 24px',
    textTransform: 'none',
    fontWeight: 600,
    fontSize: '1rem',
    margin: '0 8px',
    transition: 'all 0.3s ease',
    '&:hover': {
        transform: 'translateY(-2px)',
    },
}))

const PrimaryButton = styled(StyledButton)(({ theme }) => ({
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    '&:hover': {
        background: 'linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)',
        boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)',
    },
}))

const SecondaryButton = styled(StyledButton)(({ theme }) => ({
    border: '2px solid #667eea',
    color: '#667eea',
    background: 'transparent',
    '&:hover': {
        background: 'rgba(102, 126, 234, 0.05)',
        borderColor: '#5a6fd8',
    },
}))

interface GlobalErrorProps {
    error: Error & { digest?: string }
    reset: () => void
}

const GlobalError: React.FC<GlobalErrorProps> = ({ error, reset }) => {
    return (
        <html>
            <body>
                <ErrorContainer>
                    <ErrorCard>
                        <Box sx={{ mb: 4 }}>
                            <Typography
                                variant="h1"
                                sx={{
                                    fontSize: '6rem',
                                    fontWeight: 800,
                                    background:
                                        'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    lineHeight: 1,
                                    mb: 2,
                                }}
                            >
                                ⚠️
                            </Typography>
                            <Typography
                                variant="h3"
                                component="h1"
                                sx={{
                                    fontWeight: 700,
                                    color: '#1e293b',
                                    mb: 2,
                                    fontSize: { xs: '2rem', md: '3rem' },
                                }}
                            >
                                システムエラーが発生しました
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: '#64748b',
                                    fontWeight: 400,
                                    lineHeight: 1.6,
                                    mb: 3,
                                }}
                            >
                                申し訳ございません。予期しないエラーが発生しました。
                            </Typography>
                        </Box>

                        {process.env.NODE_ENV === 'development' &&
                            error.message && (
                                <Box
                                    sx={{
                                        mb: 4,
                                        p: 2,
                                        backgroundColor: '#fee2e2',
                                        borderRadius: '8px',
                                        border: '1px solid #fecaca',
                                    }}
                                >
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            color: '#dc2626',
                                            fontFamily: 'monospace',
                                            wordBreak: 'break-all',
                                        }}
                                    >
                                        エラー詳細: {error.message}
                                    </Typography>
                                </Box>
                            )}

                        <Box sx={{ mb: 4 }}>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: '#64748b',
                                    mb: 2,
                                }}
                            >
                                以下をお試しください：
                            </Typography>
                            <Box
                                sx={{
                                    textAlign: 'left',
                                    maxWidth: '400px',
                                    mx: 'auto',
                                }}
                            >
                                <Typography
                                    variant="body2"
                                    sx={{ color: '#64748b', mb: 1 }}
                                >
                                    • ページを再読み込みしてください
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ color: '#64748b', mb: 1 }}
                                >
                                    •
                                    しばらく時間をおいてからもう一度お試しください
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ color: '#64748b', mb: 1 }}
                                >
                                    •
                                    ホームページに戻って別の機能をお試しください
                                </Typography>
                            </Box>
                        </Box>

                        <Box
                            sx={{
                                display: 'flex',
                                gap: 2,
                                justifyContent: 'center',
                                flexWrap: 'wrap',
                            }}
                        >
                            <PrimaryButton
                                startIcon={<RefreshIcon />}
                                size="large"
                                onClick={reset}
                            >
                                再試行
                            </PrimaryButton>
                            <SecondaryButton
                                startIcon={<HomeIcon />}
                                size="large"
                                onClick={() => (window.location.href = '/')}
                            >
                                ホームに戻る
                            </SecondaryButton>
                        </Box>

                        <Box
                            sx={{
                                mt: 4,
                                pt: 3,
                                borderTop: '1px solid #e2e8f0',
                            }}
                        >
                            <Typography
                                variant="body2"
                                sx={{
                                    color: '#94a3b8',
                                    fontStyle: 'italic',
                                }}
                            >
                                問題が継続する場合は、ブラウザのキャッシュをクリアしてお試しください。
                            </Typography>
                        </Box>
                    </ErrorCard>
                </ErrorContainer>
            </body>
        </html>
    )
}

export default GlobalError
