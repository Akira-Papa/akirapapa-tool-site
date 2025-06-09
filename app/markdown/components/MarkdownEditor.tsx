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
    IconButton,
    Tooltip,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import 'github-markdown-css/github-markdown.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faCopy,
    faEdit,
    faEye,
    faFileAlt,
    faClipboard
} from '@fortawesome/free-solid-svg-icons'

const StyledPaper = styled(Paper)(({ theme }) => ({
    background: '#ffffff',
    border: '1px solid #f0f0f0',
    borderRadius: '12px',
    boxShadow: 'none',
    transition: 'all 0.2s ease',
    overflow: 'hidden',
}))

const StyledTextField = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        borderRadius: '0',
        background: '#ffffff',
        fontSize: '14px',
        fontFamily: 'Monaco, Consolas, "Courier New", monospace',
        '& fieldset': {
            border: 'none',
        },
        '&:hover fieldset': {
            border: 'none',
        },
        '&.Mui-focused fieldset': {
            border: 'none',
        },
    },
}))

const HeaderSection = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px 24px',
    borderBottom: '1px solid #f0f0f0',
    background: '#fafafa',
}))

const StatusBar = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
    padding: '12px 24px',
    borderTop: '1px solid #f0f0f0',
    background: '#fafafa',
    fontSize: '12px',
    color: '#666666',
}))

const PreviewContainer = styled(Box)(({ theme }) => ({
    padding: '24px',
    minHeight: '500px',
    maxHeight: '600px',
    overflow: 'auto',
    '& .markdown-body': {
        background: 'transparent',
        color: '#1a1a1a',
    },
}))

const ActionButton = styled(IconButton)(({ theme }) => ({
    width: '36px',
    height: '36px',
    borderRadius: '8px',
    border: '1px solid #e0e0e0',
    color: '#666666',
    transition: 'all 0.15s ease',
    '&:hover': {
        background: '#f8f8f8',
        color: '#000000',
        border: '1px solid #d0d0d0',
    },
}))

const MarkdownEditor = () => {
    const [value, setValue] = useState<string>(`# マークダウンエディターへようこそ

左側で **Markdown** を書いて、右側でプレビューを確認できます。

## 機能

- リアルタイムプレビュー
- GitHub Flavored Markdown対応
- シンプルで使いやすいインターフェース
- MarkdownまたはHTMLとしてコピー可能

### コード例

\`\`\`javascript
function greet(name) {
  return \`こんにちは、\${name}さん！\`;
}
\`\`\`

### テーブル例

| 機能 | ステータス |
|------|------------|
| プレビュー | ✓ |
| エクスポート | ✓ |
| 共有 | 近日公開 |

> 入力を始めると、すぐにプレビューが表示されます！`)
    const [openSnackbar, setOpenSnackbar] = useState(false)
    const [snackbarMessage, setSnackbarMessage] = useState('')
    const previewRef = useRef<HTMLDivElement>(null)

    const handleCopyHTML = () => {
        if (previewRef.current) {
            const content = previewRef.current.innerHTML
            navigator.clipboard
                .writeText(content)
                .then(() => {
                    setSnackbarMessage('HTMLをクリップボードにコピーしました')
                    setOpenSnackbar(true)
                })
                .catch((err) => console.error('Failed to copy:', err))
        }
    }

    const handleCopyMarkdown = () => {
        navigator.clipboard
            .writeText(value)
            .then(() => {
                setSnackbarMessage('Markdownをクリップボードにコピーしました')
                setOpenSnackbar(true)
            })
            .catch((err) => console.error('Failed to copy:', err))
    }

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false)
    }

    const wordCount = value.trim().split(/\s+/).filter(word => word.length > 0).length
    const charCount = value.length
    const lineCount = value.split('\n').length

    return (
        <Box sx={{ py: 4 }}>
            <Box sx={{ mb: 4, textAlign: 'center' }}>
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: 700,
                        color: '#000000',
                        mb: 1,
                        fontSize: { xs: '2rem', md: '2.5rem' },
                        letterSpacing: '-0.02em',
                    }}
                >
                    マークダウンエディター
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        color: '#666666',
                        fontSize: '1.125rem',
                    }}
                >
                    リアルタイムプレビュー付きのMarkdownエディター
                </Typography>
            </Box>

            <Grid container spacing={3}>
                {/* Editor */}
                <Grid item xs={12} lg={6}>
                    <StyledPaper>
                        <HeaderSection>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1.5,
                                }}
                            >
                                <FontAwesomeIcon 
                                    icon={faEdit} 
                                    style={{ fontSize: '16px' }}
                                />
                                <Typography
                                    variant="subtitle1"
                                    sx={{ 
                                        fontWeight: 600,
                                        color: '#1a1a1a',
                                    }}
                                >
                                    エディター
                                </Typography>
                            </Box>
                            <Tooltip title="Markdownをコピー">
                                <ActionButton
                                    onClick={handleCopyMarkdown}
                                >
                                    <FontAwesomeIcon 
                                        icon={faClipboard} 
                                        style={{ fontSize: '14px' }}
                                    />
                                </ActionButton>
                            </Tooltip>
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
                                '& .MuiInputBase-root': {
                                    padding: '24px',
                                },
                            }}
                        />
                        
                        <StatusBar>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                <FontAwesomeIcon 
                                    icon={faFileAlt} 
                                    style={{ fontSize: '12px' }}
                                />
                                <span>{wordCount} 単語</span>
                            </Box>
                            <span>{charCount} 文字</span>
                            <span>{lineCount} 行</span>
                        </StatusBar>
                    </StyledPaper>
                </Grid>

                {/* Preview */}
                <Grid item xs={12} lg={6}>
                    <StyledPaper>
                        <HeaderSection>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1.5,
                                }}
                            >
                                <FontAwesomeIcon 
                                    icon={faEye} 
                                    style={{ fontSize: '16px' }}
                                />
                                <Typography
                                    variant="subtitle1"
                                    sx={{ 
                                        fontWeight: 600,
                                        color: '#1a1a1a',
                                    }}
                                >
                                    プレビュー
                                </Typography>
                            </Box>
                            <Tooltip title="HTMLをコピー">
                                <ActionButton
                                    onClick={handleCopyHTML}
                                >
                                    <FontAwesomeIcon 
                                        icon={faCopy} 
                                        style={{ fontSize: '14px' }}
                                    />
                                </ActionButton>
                            </Tooltip>
                        </HeaderSection>
                        
                        <PreviewContainer className="markdown-body">
                            <div ref={previewRef}>
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                    {value || '*まだ何も入力されていません...*'}
                                </ReactMarkdown>
                            </div>
                        </PreviewContainer>
                    </StyledPaper>
                </Grid>
            </Grid>

            <Snackbar
                open={openSnackbar}
                autoHideDuration={3000}
                onClose={handleCloseSnackbar}
                message={snackbarMessage}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                sx={{
                    '& .MuiSnackbarContent-root': {
                        background: '#1a1a1a',
                        borderRadius: '8px',
                        fontSize: '14px',
                    },
                }}
            />
        </Box>
    )
}

export default MarkdownEditor