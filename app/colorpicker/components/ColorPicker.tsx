'use client'
import React from 'react'
import { Box, TextField, Typography, Button } from '@mui/material'
import { SketchPicker } from 'react-color'

// RGB値を表す型
interface RGB {
    r: number
    g: number
    b: number
}

// HSL値を表す型
interface HSL {
    h: number
    s: number
    l: number
}

// カラーピッカーで使用する色を表す型
interface Color {
    hex: string
    rgb: RGB
    hsl: HSL
}

// ColorPicker コンポーネントの props の型
interface ColorPickerProps {
    color: string
    onChange: (newColor: Color) => void // newColor の型を Color に指定
}

// ColorPicker コンポーネントの state の型
interface ColorPickerState {
    color: Color
}

class ColorPicker extends React.Component<ColorPickerProps, ColorPickerState> {
    constructor(props: ColorPickerProps) {
        super(props)
        this.state = {
            color: {
                hex: '#fff',
                rgb: { r: 255, g: 255, b: 255 },
                hsl: { h: 0, s: 0, l: 100 },
            },
        }
    }

    handleChangeComplete = (color: Color) => {
        this.setState({ color: color })
        this.props.onChange(color) // 親コンポーネントに変更を通知
    }

    render() {
        return (
            <Box sx={{ margin: '20px 0' }}>
                <Typography variant="h6" gutterBottom>
                    カラーピッカー
                </Typography>
                <SketchPicker
                    color={this.state.color.rgb}
                    onChangeComplete={this.handleChangeComplete}
                />
                <Box sx={{ marginTop: '20px' }}>
                    <TextField
                        label="HEX"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={this.state.color.hex}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField
                        label="RGB"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={`rgb(${this.state.color.rgb.r}, ${this.state.color.rgb.g}, ${this.state.color.rgb.b})`}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField
                        label="HSL"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={`hsl(${Math.round(
                            this.state.color.hsl.h
                        )}, ${Math.round(
                            this.state.color.hsl.s * 100
                        )}%, ${Math.round(this.state.color.hsl.l * 100)}%)`}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </Box>
            </Box>
        )
    }
}

export default ColorPicker
