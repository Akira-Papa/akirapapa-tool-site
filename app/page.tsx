'use client'
import React from 'react'
import {
    Typography,
    Box,
    Card,
    CardContent,
    Grid,
    Chip,
    Paper,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import Link from 'next/link'

const StyledCard = styled(Card)(({ theme }) => ({
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: '16px',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    border: 'none',
    boxShadow: '0 4px 20px 0 rgba(102, 126, 234, 0.3)',
    '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: '0 12px 40px 0 rgba(102, 126, 234, 0.4)',
    },
}))

const FeatureCard = styled(Paper)(({ theme }) => ({
    padding: '24px',
    borderRadius: '12px',
    background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
    border: '1px solid #e2e8f0',
    transition: 'all 0.3s ease',
    '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
    },
}))

const HomePage = () => {
    const tools = [
        {
            name: 'UNIXタイムスタンプ変換',
            description: 'UNIXタイムスタンプと日付を相互変換',
            icon: '⏰',
            href: '/unixtime',
            tags: ['時間', '変換'],
        },
        {
            name: '文字数カウント',
            description: 'テキストの文字数や単語数をカウント',
            icon: '📝',
            href: '/wordcount',
            tags: ['テキスト', 'カウント'],
        },
        {
            name: 'パスワードジェネレーター',
            description: '安全なパスワードを自動生成',
            icon: '🔐',
            href: '/password',
            tags: ['セキュリティ', '生成'],
        },
        {
            name: 'QRコード生成',
            description: 'テキストからQRコードを生成',
            icon: '📱',
            href: '/qrcode',
            tags: ['QR', '生成'],
        },
        {
            name: 'カラーピッカー',
            description: '色を選択してコードを取得',
            icon: '🎨',
            href: '/colorpicker',
            tags: ['色', 'デザイン'],
        },
        {
            name: 'マークダウンエディター',
            description: 'マークダウンを編集・プレビュー',
            icon: '📄',
            href: '/markdown',
            tags: ['マークダウン', 'エディター'],
        },
    ]

    return (
        <Box>
            {/* ヒーローセクション */}
            <FeatureCard sx={{ mb: 6, textAlign: 'center' }}>
                <Box sx={{ mb: 3 }}>
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
                        }}
                    >
                        🛠️ あきらパパツールサイト
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            color: '#64748b',
                            fontWeight: 400,
                            lineHeight: 1.6,
                        }}
                    >
                        日常業務で使える便利なWebツールを集約したサイトです
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 1,
                        flexWrap: 'wrap',
                    }}
                >
                    <Chip label="シンプル" color="primary" variant="outlined" />
                    <Chip label="高速" color="primary" variant="outlined" />
                    <Chip label="無料" color="primary" variant="outlined" />
                    <Chip
                        label="オープンソース"
                        color="primary"
                        variant="outlined"
                    />
                </Box>
            </FeatureCard>

            {/* ツール一覧 */}
            <Typography
                variant="h4"
                component="h2"
                sx={{
                    mb: 4,
                    color: '#1e293b',
                    fontWeight: 600,
                    textAlign: 'center',
                }}
            >
                利用可能なツール
            </Typography>

            <Grid container spacing={3} sx={{ mb: 6 }}>
                {tools.map((tool, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Link
                            href={tool.href}
                            style={{ textDecoration: 'none' }}
                        >
                            <StyledCard>
                                <CardContent
                                    sx={{
                                        p: 3,
                                        textAlign: 'center',
                                        color: 'white',
                                    }}
                                >
                                    <Typography
                                        variant="h3"
                                        component="div"
                                        sx={{ mb: 2, fontSize: '3rem' }}
                                    >
                                        {tool.icon}
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        component="h3"
                                        sx={{ mb: 1, fontWeight: 600 }}
                                    >
                                        {tool.name}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{ mb: 2, opacity: 0.9 }}
                                    >
                                        {tool.description}
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            gap: 1,
                                            flexWrap: 'wrap',
                                        }}
                                    >
                                        {tool.tags.map((tag, tagIndex) => (
                                            <Chip
                                                key={tagIndex}
                                                label={tag}
                                                size="small"
                                                sx={{
                                                    backgroundColor:
                                                        'rgba(255,255,255,0.2)',
                                                    color: 'white',
                                                    border: '1px solid rgba(255,255,255,0.3)',
                                                }}
                                            />
                                        ))}
                                    </Box>
                                </CardContent>
                            </StyledCard>
                        </Link>
                    </Grid>
                ))}
            </Grid>

            {/* 今後の予定セクション */}
            <FeatureCard>
                <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                        mb: 2,
                        color: '#1e293b',
                        fontWeight: 600,
                    }}
                >
                    🚀 今後追加予定の機能
                </Typography>
                <Typography
                    variant="body1"
                    sx={{ color: '#64748b', lineHeight: 1.6 }}
                >
                    世界時計（複数タイムゾーン対応）、単位変換ツール、Base64エンコード/デコード、
                    JSONフォーマッター、URLエンコード/デコードなど、さらに便利な機能を追加予定です。
                </Typography>
            </FeatureCard>
        </Box>
    )
}

export default HomePage
