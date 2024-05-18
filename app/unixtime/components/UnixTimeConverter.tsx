'use client'
import React, { useState, useEffect } from 'react'
import { TextField, Grid, Typography, Button } from '@mui/material'

const UnixTimeConverter = () => {
    const [timestamp, setTimestamp] = useState({
        date: '',
        unix: '',
    })
    const [error, setError] = useState('')

    useEffect(() => {
        setTimestamp({
            date: new Date().toISOString().slice(0, 19),
            unix: Math.floor(new Date().getTime() / 1000).toString(),
        })
    }, [])

    useEffect(() => {
        try {
            const date = new Date(timestamp.date)
            const unix = Math.floor(date.getTime() / 1000).toString()
            if (!isNaN(date.getTime())) {
                setTimestamp((prev) => ({ ...prev, unix }))
                setError('')
            } else {
                throw new Error('Invalid date format')
            }
        } catch (e) {
            setError(e.message)
        }
    }, [timestamp.date])

    const handleDateChange = (e) => {
        const newDate = e.target.value
        try {
            const date = new Date(newDate)
            const unix = Math.floor(date.getTime() / 1000).toString()
            if (!isNaN(date.getTime())) {
                setTimestamp({ date: newDate, unix }) // 日付とUNIXタイムスタンプを同時に更新
                setError('')
            } else {
                throw new Error('Invalid date format')
            }
        } catch (e) {
            setError(e.message)
        }
    }

    return (
        <Grid container spacing={2} alignItems="center" justifyContent="center">
            <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                    UNIXタイムスタンプ変換
                </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    fullWidth
                    label="日付 (YYYY-MM-DDTHH:MM:SS)"
                    type="datetime-local"
                    value={timestamp.date}
                    onChange={handleDateChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    error={!!error}
                    helperText={error}
                />
            </Grid>
            <Grid item xs={12}>
                <Typography
                    variant="body1"
                    gutterBottom
                    sx={{
                        margin: '20px auto',
                        display: 'block',
                        textAlign: 'center',
                    }}
                >
                    変換されたUNIXタイムスタンプ: {timestamp.unix}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default UnixTimeConverter
