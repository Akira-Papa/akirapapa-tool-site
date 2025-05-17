'use client'
import React, { useState, useRef } from 'react'
import {
    Grid,
    TextField,
    Typography,
    Paper,
    Button,
    Snackbar,
} from '@mui/material'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import 'github-markdown-css/github-markdown.css'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'

const MarkdownEditor = () => {
    const [value, setValue] = useState<string>('')
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

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false)
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <TextField
                    label="Markdown入力"
                    multiline
                    minRows={15}
                    fullWidth
                    variant="outlined"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <Grid container alignItems="center" spacing={1} sx={{ mb: 1 }}>
                    <Grid item>
                        <Typography variant="h6">プレビュー</Typography>
                    </Grid>
                    <Grid item>
                        <Button
                            variant="outlined"
                            size="small"
                            startIcon={<ContentCopyIcon />}
                            onClick={handleCopy}
                        >
                            コピー
                        </Button>
                    </Grid>
                </Grid>
                <Paper
                    variant="outlined"
                    sx={{
                        p: 2,
                        minHeight: '300px',
                        maxHeight: '500px',
                        overflow: 'auto',
                    }}
                    className="markdown-body"
                >
                    <div ref={previewRef}>
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {value}
                        </ReactMarkdown>
                    </div>
                </Paper>
            </Grid>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={3000}
                onClose={handleCloseSnackbar}
                message="プレビューをコピーしました"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            />
        </Grid>
    )
}

export default MarkdownEditor
