'use client'
import React from 'react'
import WordCounter from './components/WordCounter'
import { Typography, Box } from '@mui/material'

const WordCountPage = () => {
    return (
        <>
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    文字数カウント
                </Typography>
                <Typography variant="body1">
                    このツールを使用すると、入力されたテキストの文字数、単語数、行数、バイト数をリアルタイムで確認できます。テキストエリアにテキストを入力してください。
                </Typography>
                <Box sx={{ mt: 3 }}>
                    <WordCounter />
                </Box>
            </Box>
        </>
    )
}

export default WordCountPage
