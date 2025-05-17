'use client'
import React, { useState } from 'react'
import { Grid, TextField, Typography, Paper } from '@mui/material'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import 'github-markdown-css/github-markdown.css'

const MarkdownEditor = () => {
    const [value, setValue] = useState<string>('')

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom>
                    Markdown入力
                </Typography>
                <TextField
                    label="Markdown入力"
                    multiline
                    minRows={20}
                    fullWidth
                    variant="outlined"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom>
                    プレビュー
                </Typography>
                <Paper
                    variant="outlined"
                    sx={{
                        p: 2,
                        minHeight: '400px',
                        height: '100%',
                    }}
                    className="markdown-body"
                >
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {value}
                    </ReactMarkdown>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default MarkdownEditor
