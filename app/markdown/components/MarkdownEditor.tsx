'use client'
import React, { useState, useRef } from 'react'
import {
    Grid,
    TextField,
    Typography,
    Paper,
    Button,
    Snackbar,
    Box,
    Chip,
    IconButton,
    Tooltip,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import 'github-markdown-css/github-markdown.css'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import EditIcon from '@mui/icons-material/Edit'
import VisibilityIcon from '@mui/icons-material/Visibility'

const StyledPaper = styled(Paper)(({ theme }) => ({
    background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
    border: '1px solid #e2e8f0',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease',
    '&:hover': {
        boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
    },
}))

const StyledTextField = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        borderRadius: '12px',
        background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
        border: '1px solid #e2e8f0',
        transition: 'all 0.3s ease',
        '&:hover': {
            boxShadow: '0 4px 20px rgba(102, 126, 234, 0.1)',
        },
        '&.Mui-focused': {
            boxShadow: '0 4px 20px rgba(102, 126, 234, 0.2)',
            borderColor: '#667eea',
        },
    },
    '& .MuiInputLabel-root': {
        color: '#64748b',
        fontWeight: 500,
    },
}))

const HeaderSection = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '16px',
    padding: '12px 16px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: '8px',
    color: 'white',
}))

const StyledButton = styled(Button)(({ theme }) => ({
    borderRadius: '8px',
    textTransform: 'none',
    fontWeight: 600,
    background: 'rgba(255,255,255,0.2)',
    color: 'white',
    border: '1px solid rgba(255,255,255,0.3)',
    '&:hover': {
        background: 'rgba(255,255,255,0.3)',
        transform: 'translateY(-1px)',
    },
}))

const PreviewPaper = styled(Paper)(({ theme }) => ({
    borderRadius: '12px',
    border: '1px solid #e2e8f0',
    background: '#ffffff',
    transition: 'all 0.3s ease',
    '&:hover': {
        boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
    },
}))

const MarkdownEditor = () => {
    const [value, setValue] = useState<string>(`# マークダウンエディター

このエディターでは **Markdown** を使用してテキストを装飾できます。

## 使用可能な記法

- **太字**: \`**太字**\`
- *斜体*: \`*斜体*\`
- \`コード\`: \`\\\`コード\\\`\`

### リスト
1. 番号付きリスト
2. 2番目の項目

- 箇条書き
- 別の項目

### テーブル
| 列1 | 列2 | 列3 |
|-----|-----|-----|
| データ1 | データ2 | データ3 |

### コードブロック
\`\`\`javascript
function hello() {
  console.log("Hello, World!");
}
\`\`\`

> これは引用文です。

[リンクの例](https://example.com)`)
    const [openSnackbar, setOpenSnackbar] = useState(false)
    const previewRef = useRef<HTMLDivElement>(null)

    const handleCopy = () => {
        if (previewRef.current) {
            const content = previewRef.current.innerHTML
            navigator.clipboard
                .writeText(content)
                .then(() => setOpenSnackbar(true))
                .catch((err) => console.error('コピーに失敗しました:', err))
        }
    }

    const handleCopyMarkdown = () => {
        navigator.clipboard
            .writeText(value)
            .then(() => setOpenSnackbar(true))
            .catch((err) => console.error('コピーに失敗しました:', err))
    }

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false)
    }

    const wordCount = value.length
    const lineCount = value.split('\n').length

    return (
        <Box sx={{ mt: 3 }}>
            <Grid container spacing={3}>
                {/* 入力エリア */}
                <Grid item xs={12} lg={6}>
                    <StyledPaper sx={{ p: 3, height: 'fit-content' }}>
                        <HeaderSection>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                }}
                            >
                                <EditIcon />
                                <Typography
                                    variant="h6"
                                    sx={{ fontWeight: 600 }}
                                >
                                    Markdown入力
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: 1 }}>
                                <Chip
                                    label={`${wordCount}文字`}
                                    size="small"
                                    sx={{
                                        backgroundColor:
                                            'rgba(255,255,255,0.2)',
                                        color: 'white',
                                    }}
                                />
                                <Chip
                                    label={`${lineCount}行`}
                                    size="small"
                                    sx={{
                                        backgroundColor:
                                            'rgba(255,255,255,0.2)',
                                        color: 'white',
                                    }}
                                />
                                <Tooltip title="Markdownをコピー">
                                    <IconButton
                                        size="small"
                                        onClick={handleCopyMarkdown}
                                        sx={{ color: 'white' }}
                                    >
                                        <ContentCopyIcon fontSize="small" />
                                    </IconButton>
                                </Tooltip>
                            </Box>
                        </HeaderSection>
                        <StyledTextField
                            multiline
                            minRows={20}
                            maxRows={30}
                            fullWidth
                            variant="outlined"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            placeholder="ここにMarkdownを入力してください..."
                            sx={{
                                '& .MuiOutlinedInput-notchedOutline': {
                                    border: 'none',
                                },
                            }}
                        />
                    </StyledPaper>
                </Grid>

                {/* プレビューエリア */}
                <Grid item xs={12} lg={6}>
                    <StyledPaper sx={{ p: 3, height: 'fit-content' }}>
                        <HeaderSection>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                }}
                            >
                                <VisibilityIcon />
                                <Typography
                                    variant="h6"
                                    sx={{ fontWeight: 600 }}
                                >
                                    プレビュー
                                </Typography>
                            </Box>
                            <StyledButton
                                size="small"
                                startIcon={<ContentCopyIcon />}
                                onClick={handleCopy}
                            >
                                HTMLをコピー
                            </StyledButton>
                        </HeaderSection>
                        <PreviewPaper
                            sx={{
                                p: 3,
                                minHeight: '500px',
                                maxHeight: '600px',
                                overflow: 'auto',
                            }}
                            className="markdown-body"
                        >
                            <div ref={previewRef}>
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                    {value ||
                                        '*プレビューがここに表示されます...*'}
                                </ReactMarkdown>
                            </div>
                        </PreviewPaper>
                    </StyledPaper>
                </Grid>
            </Grid>

            <Snackbar
                open={openSnackbar}
                autoHideDuration={3000}
                onClose={handleCloseSnackbar}
                message="コピーしました！"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                sx={{
                    '& .MuiSnackbarContent-root': {
                        background:
                            'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        borderRadius: '8px',
                    },
                }}
            />
        </Box>
    )
}

export default MarkdownEditor
