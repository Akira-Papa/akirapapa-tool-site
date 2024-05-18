import React from 'react'
import { Typography, Box } from '@mui/material'

const HomePage = () => {
    return (
        <Box sx={{ my: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                あきらパパツールサイトへようこそ
            </Typography>
            <Typography variant="body1">
                このサイトでは、日常的によく使う便利な機能を1つのWebサイトに集約しています。シンプルで使いやすいインターフェースで、以下の機能を提供しています。
            </Typography>
            <Typography variant="h6" component="h2" sx={{ mt: 3 }}>
                主要機能:
            </Typography>
            <ul>
                <li>UNIXタイムスタンプ変換</li>
                <li>文字数カウント</li>
                <li>パスワードジェネレーター</li>
                <li>QRコード生成</li>
                <li>カラーピッカー</li>
            </ul>
            <Typography variant="body2" sx={{ mt: 2 }}>
                さらに、時間が許せば、複数のタイムゾーンを同時に表示可能な世界時計、単位変換、マークダウンエディターなどの追加機能も提供予定です。
            </Typography>
        </Box>
    )
}

export default HomePage
