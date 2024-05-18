'use client'
import React, { useState } from 'react'
import { Box, Typography, TextField, Grid } from '@mui/material'
import ColorPicker from './components/ColorPicker'

const ColorPickerPage = () => {
    const [color, setColor] = useState('#000000')
    const [hex, setHex] = useState('#000000')
    const [rgb, setRgb] = useState('rgb(0, 0, 0)')
    const [hsl, setHsl] = useState('hsl(0, 0%, 0%)')

    const handleColorChange = (newColor) => {
        setColor(newColor.hex)
        setHex(newColor.hex)
        setRgb(`rgb(${newColor.rgb.r}, ${newColor.rgb.g}, ${newColor.rgb.b})`)
        setHsl(
            `hsl(${newColor.hsl.h.toFixed(2)}, ${newColor.hsl.s.toFixed(
                2
            )}%, ${newColor.hsl.l.toFixed(2)}%)`
        )
    }

    return (
        <Box sx={{ my: 4 }}>
            <Typography variant="h4" gutterBottom>
                カラーピッカー
            </Typography>
            <ColorPicker color={color} onChange={handleColorChange} />
            <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={12} sm={4}>
                    <TextField
                        fullWidth
                        label="HEX"
                        variant="outlined"
                        value={hex}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        fullWidth
                        label="RGB"
                        variant="outlined"
                        value={rgb}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        fullWidth
                        label="HSL"
                        variant="outlined"
                        value={hsl}
                    />
                </Grid>
            </Grid>
        </Box>
    )
}

export default ColorPickerPage
