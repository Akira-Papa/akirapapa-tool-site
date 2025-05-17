'use client'
import React, { useState } from 'react'
import { Grid, TextField, Typography, Paper } from '@mui/material'

// 簡易的なMarkdown変換処理
const escapeHtml = (text: string): string => {
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
}

const renderMarkdown = (text: string): string => {
    let html = escapeHtml(text)
    html = html.replace(/^###### (.*)$/gm, '<h6>$1</h6>')
    html = html.replace(/^##### (.*)$/gm, '<h5>$1</h5>')
    html = html.replace(/^#### (.*)$/gm, '<h4>$1</h4>')
    html = html.replace(/^### (.*)$/gm, '<h3>$1</h3>')
    html = html.replace(/^## (.*)$/gm, '<h2>$1</h2>')
    html = html.replace(/^# (.*)$/gm, '<h1>$1</h1>')
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>')
    html = html.replace(/`([^`]+)`/g, '<code>$1</code>')
    html = html.replace(/\n/g, '<br />')
    return html
}

const MarkdownEditor = () => {
    const [value, setValue] = useState<string>('')

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
                <Typography variant="h6" gutterBottom>
                    プレビュー
                </Typography>
                <Paper variant="outlined" sx={{ p: 2, minHeight: '300px' }}>
                    <div dangerouslySetInnerHTML={{ __html: renderMarkdown(value) }} />
                </Paper>
            </Grid>
        </Grid>
    )
}

export default MarkdownEditor
