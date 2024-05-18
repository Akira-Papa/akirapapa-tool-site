'use client'
import React, { useState } from 'react'
import QRCodeGenerator from './components/QRCodeGenerator'
import { Typography, TextField, Button, Box } from '@mui/material'

const QRCodePage = () => {
    const [inputText, setInputText] = useState('')

    return (
        <>
            <Typography variant="h4" component="h1" gutterBottom>
                リアルタイムQRコード生成
            </Typography>
            <Box sx={{ my: 2 }}>
                <TextField
                    fullWidth
                    label="テキストを入力"
                    variant="outlined"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {}} // このボタンは現在何もしないため、削除または別の機能に使用することも検討してください。
                    sx={{ mt: 2 }}
                    style={{ display: 'none' }} // ボタンを非表示にする
                >
                    生成
                </Button>
            </Box>
            <QRCodeGenerator text={inputText} />
        </>
    )
}

export default QRCodePage
