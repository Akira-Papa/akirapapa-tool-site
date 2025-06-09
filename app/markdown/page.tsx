'use client'
import React from 'react'
import { Box } from '@mui/material'
import MarkdownEditor from './components/MarkdownEditor'

/**
 * マークダウンページ
 * @returns マークダウンページ
 */
const MarkdownPage = () => {
    return (
        <Box>
            <MarkdownEditor />
        </Box>
    )
}

export default MarkdownPage