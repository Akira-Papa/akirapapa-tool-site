'use client'
import React from 'react'
import { Box, Typography, Button, Paper, Container } from '@mui/material'
import { styled } from '@mui/material/styles'
import Link from 'next/link'
import HomeIcon from '@mui/icons-material/Home'
import SearchIcon from '@mui/icons-material/Search'

const NotFoundContainer = styled(Box)(({ theme }) => ({
    minHeight: 'calc(100vh - 140px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
}))

const NotFoundCard = styled(Paper)(({ theme }) => ({
    background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
    border: '1px solid #e2e8f0',
    borderRadius: '24px',
    padding: '3rem',
    textAlign: 'center',
    maxWidth: '600px',
    width: '100%',
    boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
    transition: 'all 0.3s ease',
    '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: '0 12px 50px rgba(0,0,0,0.15)',
    },
}))

const StyledButton = styled(Button)(({ theme }) => ({
    borderRadius: '12px',
    padding: '12px 24px',
    textTransform: 'none',
    fontWeight: 600,
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)',
    },
}))

const PrimaryButton = styled(StyledButton)(({ theme }) => ({
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    '&:hover': {
        background: 'linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)',
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

const ErrorNumber = styled(Typography)(({ theme }) => ({
    fontSize: '8rem',
    fontWeight: 800,
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    lineHeight: 1,
    marginBottom: '1rem',
    textShadow: '0 4px 20px rgba(102, 126, 234, 0.3)',

    '@media (max-width: 600px)': {
        fontSize: '5rem',
    },
}))

const NotFoundPage = () => {
    return (
        <Container maxWidth="lg">
            <NotFoundContainer>
                <NotFoundCard>
                    <Box sx={{ mb: 4 }}>
                        <ErrorNumber>404</ErrorNumber>
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
                            ページが見つかりません
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
                            お探しのページは存在しないか、移動された可能性があります。
                        </Typography>
                    </Box>

                    <Box sx={{ mb: 4 }}>
                        <Typography
                            variant="body1"
                            sx={{
                                color: '#64748b',
                                mb: 2,
                            }}
                        >
                            以下の方法をお試しください：
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
                                • URLが正しく入力されているか確認してください
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ color: '#64748b', mb: 1 }}
                            >
                                • ブラウザの更新ボタンを押してみてください
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ color: '#64748b', mb: 1 }}
                            >
                                • サイドバーから目的のページを選択してください
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
                        <Link href="/" style={{ textDecoration: 'none' }}>
                            <PrimaryButton
                                startIcon={<HomeIcon />}
                                size="large"
                            >
                                ホームに戻る
                            </PrimaryButton>
                        </Link>
                        <SecondaryButton
                            startIcon={<SearchIcon />}
                            size="large"
                            onClick={() => window.history.back()}
                        >
                            前のページに戻る
                        </SecondaryButton>
                    </Box>

                    <Box sx={{ mt: 4, pt: 3, borderTop: '1px solid #e2e8f0' }}>
                        <Typography
                            variant="body2"
                            sx={{
                                color: '#94a3b8',
                                fontStyle: 'italic',
                            }}
                        >
                            それでも問題が解決しない場合は、ブラウザのキャッシュをクリアしてお試しください。
                        </Typography>
                    </Box>
                </NotFoundCard>
            </NotFoundContainer>
        </Container>
    )
}

export default NotFoundPage
