'use client'
import React from 'react'
import { Box, Typography, Paper, Chip } from '@mui/material'
import { styled } from '@mui/material/styles'
import MarkdownEditor from './components/MarkdownEditor'

const HeaderCard = styled(Paper)(({ theme }) => ({
    background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
    border: '1px solid #e2e8f0',
    borderRadius: '12px',
    padding: '24px',
    marginBottom: '24px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease',
    '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
    },
}))

/**
 * マークダウンページ
 * @returns マークダウンページ
 */
const MarkdownPage = () => {
    return (
        <Box sx={{ py: 4 }}>
            <HeaderCard>
                <Box sx={{ textAlign: 'center', mb: 2 }}>
                    <Typography
                        variant="h3"
                        component="h1"
                        sx={{
                            background:
                                'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontWeight: 700,
                            mb: 2,
                            fontSize: { xs: '2rem', md: '3rem' },
                        }}
                    >
                        📄 マークダウンエディター
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            color: '#64748b',
                            fontWeight: 400,
                            lineHeight: 1.6,
                            mb: 2,
                        }}
                    >
                        リアルタイムプレビュー付きのMarkdownエディター
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: 1,
                            flexWrap: 'wrap',
                        }}
                    >
                        <Chip
                            label="リアルタイムプレビュー"
                            color="primary"
                            variant="outlined"
                        />
                        <Chip
                            label="GFM対応"
                            color="primary"
                            variant="outlined"
                        />
                        <Chip
                            label="コピー機能"
                            color="primary"
                            variant="outlined"
                        />
                        <Chip
                            label="文字数カウント"
                            color="primary"
                            variant="outlined"
                        />
                    </Box>
                </Box>
            </HeaderCard>
            <MarkdownEditor />
        </Box>
    )
}

export default MarkdownPage
