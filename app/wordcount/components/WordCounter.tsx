'use client'
import React, { useState, useEffect } from 'react'
import { Box, TextField, Typography } from '@mui/material'

const WordCounter = () => {
    const [text, setText] = useState('')
    const [stats, setStats] = useState({
        characters: 0,
        words: 0,
        lines: 0,
        bytes: 0,
    })

    useEffect(() => {
        const characters = text.length
        const words = text.trim() ? text.trim().split(/\s+/).length : 0
        const lines = text ? text.split(/\r\n|\r|\n/).length : 0
        const bytes = new TextEncoder().encode(text).length

        setStats({ characters, words, lines, bytes })
    }, [text])

    return (
        <Box>
            <Typography variant="h5" gutterBottom>
                文字数カウント
            </Typography>
            <TextField
                label="テキストを入力"
                multiline
                rows={4}
                fullWidth
                variant="outlined"
                value={text}
                onChange={(e) => setText(e.target.value)}
                margin="normal"
            />
            <Box mt={2}>
                <Typography variant="body1">
                    文字数: {stats.characters}
                </Typography>
                <Typography variant="body1">単語数: {stats.words}</Typography>
                <Typography variant="body1">行数: {stats.lines}</Typography>
                <Typography variant="body1">バイト数: {stats.bytes}</Typography>
            </Box>
        </Box>
    )
}

export default WordCounter
