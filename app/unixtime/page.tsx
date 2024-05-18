'use client'
import React from 'react'
import UnixTimeConverter from './components/UnixTimeConverter'
import { Typography, Box } from '@mui/material'

const UnixTimePage = () => {
    return (
        <>
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    UNIXタイムスタンプ変換
                </Typography>
                <Typography variant="body1">
                    このページでは、UNIXタイムスタンプを日付に変換したり、日付をUNIXタイムスタンプに変換する機能を提供しています。使い方は簡単で、必要な情報を入力するだけで変換結果が表示されます。
                </Typography>
                <Box sx={{ margin: '4 auto', display: 'block' }}>
                    <UnixTimeConverter />
                </Box>
            </Box>
        </>
    )
}

export default UnixTimePage
