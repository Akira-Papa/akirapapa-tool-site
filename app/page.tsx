'use client'
import React from 'react'
import {
    Typography,
    Box,
    Grid,
    Paper,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faClock,
    faFileAlt,
    faKey,
    faQrcode,
    faPalette,
    faMarkdown,
    faArrowRight
} from '@fortawesome/free-solid-svg-icons'

const StyledCard = styled(Paper)(({ theme }) => ({
    padding: '32px',
    borderRadius: '12px',
    background: '#ffffff',
    border: '1px solid #f0f0f0',
    transition: 'all 0.2s ease',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
        border: '1px solid #e0e0e0',
        '& .arrow-icon': {
            transform: 'translateX(4px)',
        },
    },
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: '#000000',
        transform: 'translateX(-100%)',
        transition: 'transform 0.3s ease',
    },
    '&:hover::before': {
        transform: 'translateX(0)',
    },
}))

const IconWrapper = styled(Box)(({ theme }) => ({
    width: '48px',
    height: '48px',
    borderRadius: '12px',
    background: '#f8f8f8',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
}))

const HomePage = () => {
    const tools = [
        {
            name: 'UNIXタイムスタンプ',
            description: 'UNIXタイムスタンプと日付を相互変換',
            icon: faClock,
            href: '/unixtime',
        },
        {
            name: '文字数カウント',
            description: '文字数、単語数をカウントし、テキスト統計を分析',
            icon: faFileAlt,
            href: '/wordcount',
        },
        {
            name: 'パスワード生成',
            description: 'カスタム要件に応じた安全なパスワードを生成',
            icon: faKey,
            href: '/password',
        },
        {
            name: 'QRコード生成',
            description: 'テキストやURLから瞬時にQRコードを作成',
            icon: faQrcode,
            href: '/qrcode',
        },
        {
            name: 'カラーピッカー',
            description: '色を選択して、複数のフォーマットで値を取得',
            icon: faPalette,
            href: '/colorpicker',
        },
        {
            name: 'マークダウンエディター',
            description: 'リアルタイムレンダリングでMarkdownを作成・プレビュー',
            icon: faMarkdown,
            href: '/markdown',
        },
    ]

    return (
        <Box sx={{ py: 4 }}>
            {/* Hero Section */}
            <Box sx={{ mb: 8, textAlign: 'center' }}>
                <Typography
                    variant="h1"
                    sx={{
                        fontSize: { xs: '2.5rem', md: '3.5rem' },
                        fontWeight: 700,
                        color: '#000000',
                        mb: 2,
                        letterSpacing: '-0.03em',
                    }}
                >
                    開発者ツール
                </Typography>
                <Typography
                    variant="h5"
                    sx={{
                        color: '#666666',
                        fontWeight: 400,
                        fontSize: '1.25rem',
                        maxWidth: '600px',
                        mx: 'auto',
                        lineHeight: 1.6,
                    }}
                >
                    開発者やデザイナーのための便利なWebツール集
                </Typography>
            </Box>

            {/* Tools Grid */}
            <Grid container spacing={3} sx={{ mb: 8 }}>
                {tools.map((tool, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Link
                            href={tool.href}
                            style={{ textDecoration: 'none', display: 'block', height: '100%' }}
                        >
                            <StyledCard>
                                <IconWrapper>
                                    <FontAwesomeIcon 
                                        icon={tool.icon} 
                                        style={{ 
                                            fontSize: '24px',
                                            color: '#000000'
                                        }}
                                    />
                                </IconWrapper>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        color: '#000000',
                                        fontWeight: 600,
                                        mb: 1,
                                        fontSize: '1.125rem',
                                    }}
                                >
                                    {tool.name}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: '#666666',
                                        lineHeight: 1.6,
                                        mb: 3,
                                        flex: 1,
                                    }}
                                >
                                    {tool.description}
                                </Typography>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        color: '#000000',
                                        fontSize: '0.875rem',
                                        fontWeight: 500,
                                    }}
                                >
                                    ツールを開く
                                    <FontAwesomeIcon 
                                        icon={faArrowRight} 
                                        className="arrow-icon"
                                        style={{ 
                                            fontSize: '14px',
                                            marginLeft: '8px',
                                            transition: 'transform 0.2s ease',
                                        }}
                                    />
                                </Box>
                            </StyledCard>
                        </Link>
                    </Grid>
                ))}
            </Grid>

            {/* Footer Info */}
            <Box
                sx={{
                    textAlign: 'center',
                    pt: 4,
                    borderTop: '1px solid #f0f0f0',
                }}
            >
                <Typography
                    variant="body2"
                    sx={{
                        color: '#999999',
                        fontSize: '0.875rem',
                    }}
                >
                    さらに多くのツールを追加予定 • Next.jsとMaterial-UIで構築
                </Typography>
            </Box>
        </Box>
    )
}

export default HomePage