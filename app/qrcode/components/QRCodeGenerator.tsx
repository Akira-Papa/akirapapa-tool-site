'use client'
import React from 'react'
import { Box, Button } from '@mui/material'
import QRCode from 'qrcode.react'

const QRCodeGenerator = ({ text }) => {
    const downloadQRCode = () => {
        const canvas = document.getElementById(
            'qrCodeCanvas'
        ) as HTMLCanvasElement
        const pngUrl = canvas
            .toDataURL('image/png')
            .replace('image/png', 'image/octet-stream')
        let downloadLink = document.createElement('a')
        downloadLink.href = pngUrl
        downloadLink.download = 'qrCode.png'
        document.body.appendChild(downloadLink)
        downloadLink.click()
        document.body.removeChild(downloadLink)
    }

    return (
        <Box>
            <Button
                variant="contained"
                color="secondary"
                onClick={downloadQRCode}
                disabled={!text}
                style={{ marginTop: '10px' }}
            >
                ダウンロード
            </Button>
            {text && (
                <Box mt={2} display="flex" justifyContent="center">
                    <QRCode
                        id="qrCodeCanvas"
                        value={text}
                        size={256}
                        level={'H'}
                        includeMargin={true}
                    />
                </Box>
            )}
        </Box>
    )
}

export default QRCodeGenerator
