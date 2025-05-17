'use client'
import React from 'react'
import { Box, Typography } from '@mui/material'
import MarkdownEditor from './components/MarkdownEditor'

const MarkdownPage = () => {
    return (
        <Box sx={{ my: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                マークダウンエディター
            </Typography>
            <Typography variant="body1" gutterBottom>
                左側にMarkdownを入力すると、右側にプレビューが表示されます。
            </Typography>
            <MarkdownEditor />
        </Box>
    )
}

export default MarkdownPage
