'use client'
import React, { useState, useEffect } from 'react'
import { 
    TextField, 
    Grid, 
    Typography, 
    Button, 
    Box, 
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    Divider
} from '@mui/material'

const UnixTimeConverter = () => {
    const [dateInput, setDateInput] = useState('')
    const [unixInput, setUnixInput] = useState('')
    const [unixUnit, setUnixUnit] = useState('seconds') // 'seconds' or 'milliseconds'
    const [resultDate, setResultDate] = useState('')
    const [resultUnix, setResultUnix] = useState('')
    const [dateError, setDateError] = useState('')
    const [unixError, setUnixError] = useState('')

    // 現在時刻で初期化
    useEffect(() => {
        const now = new Date()
        setDateInput(now.toISOString().slice(0, 19))
        setUnixInput(Math.floor(now.getTime() / 1000).toString())
        updateResults(now.toISOString().slice(0, 19), Math.floor(now.getTime() / 1000).toString(), 'seconds')
    }, [])

    const updateResults = (date, unix, unit) => {
        try {
            // 日付から UNIX タイムスタンプへの変換
            if (date) {
                const dateObj = new Date(date)
                if (!isNaN(dateObj.getTime())) {
                    const unixSeconds = Math.floor(dateObj.getTime() / 1000)
                    const unixMillis = dateObj.getTime()
                    setResultUnix(unit === 'milliseconds' ? unixMillis.toString() : unixSeconds.toString())
                }
            }

            // UNIX タイムスタンプから日付への変換
            if (unix) {
                const unixNumber = parseInt(unix)
                if (!isNaN(unixNumber)) {
                    let dateObj
                    if (unit === 'milliseconds') {
                        dateObj = new Date(unixNumber)
                    } else {
                        dateObj = new Date(unixNumber * 1000)
                    }
                    
                    if (!isNaN(dateObj.getTime())) {
                        setResultDate(dateObj.toISOString().slice(0, 19))
                    }
                }
            }
        } catch (error) {
            console.error('Conversion error:', error)
        }
    }

    const handleDateChange = (e) => {
        const newDate = e.target.value
        setDateInput(newDate)
        setDateError('')

        try {
            const dateObj = new Date(newDate)
            if (isNaN(dateObj.getTime())) {
                throw new Error('無効な日付形式です')
            }
            
            const unixSeconds = Math.floor(dateObj.getTime() / 1000)
            const unixMillis = dateObj.getTime()
            const newUnix = unixUnit === 'milliseconds' ? unixMillis.toString() : unixSeconds.toString()
            
            setUnixInput(newUnix)
            updateResults(newDate, newUnix, unixUnit)
        } catch (error) {
            setDateError(error.message)
        }
    }

    const handleUnixChange = (e) => {
        const newUnix = e.target.value
        setUnixInput(newUnix)
        setUnixError('')

        try {
            const unixNumber = parseInt(newUnix)
            if (isNaN(unixNumber)) {
                throw new Error('無効な数値です')
            }

            let dateObj
            if (unixUnit === 'milliseconds') {
                dateObj = new Date(unixNumber)
            } else {
                dateObj = new Date(unixNumber * 1000)
            }
            
            if (isNaN(dateObj.getTime())) {
                throw new Error('無効なタイムスタンプです')
            }

            const newDate = dateObj.toISOString().slice(0, 19)
            setDateInput(newDate)
            updateResults(newDate, newUnix, unixUnit)
        } catch (error) {
            setUnixError(error.message)
        }
    }

    const handleUnitChange = (e) => {
        const newUnit = e.target.value
        setUnixUnit(newUnit)

        // 単位変更時に現在の日付から適切なUNIXタイムスタンプを計算
        if (dateInput) {
            try {
                const dateObj = new Date(dateInput)
                if (!isNaN(dateObj.getTime())) {
                    const newUnix = newUnit === 'milliseconds' 
                        ? dateObj.getTime().toString()
                        : Math.floor(dateObj.getTime() / 1000).toString()
                    setUnixInput(newUnix)
                    updateResults(dateInput, newUnix, newUnit)
                }
            } catch (error) {
                console.error('Unit conversion error:', error)
            }
        }
    }

    const setCurrentTime = () => {
        const now = new Date()
        const nowDate = now.toISOString().slice(0, 19)
        const nowUnix = unixUnit === 'milliseconds' 
            ? now.getTime().toString()
            : Math.floor(now.getTime() / 1000).toString()
        
        setDateInput(nowDate)
        setUnixInput(nowUnix)
        updateResults(nowDate, nowUnix, unixUnit)
        setDateError('')
        setUnixError('')
    }

    return (
        <Box sx={{ maxWidth: 800, margin: '0 auto', p: 2 }}>
            <Typography variant="h5" gutterBottom sx={{ textAlign: 'center', mb: 3 }}>
                UNIXタイムスタンプ変換ツール
            </Typography>

            <Button 
                variant="outlined" 
                onClick={setCurrentTime}
                sx={{ mb: 3, display: 'block', mx: 'auto' }}
            >
                現在時刻を設定
            </Button>

            <Grid container spacing={3}>
                {/* 日付入力セクション */}
                <Grid item xs={12} md={6}>
                    <Box sx={{ border: 1, borderColor: 'divider', borderRadius: 1, p: 2 }}>
                        <Typography variant="h6" gutterBottom color="primary">
                            日付 → UNIXタイムスタンプ
                        </Typography>
                        <TextField
                            fullWidth
                            label="日付を入力"
                            type="datetime-local"
                            value={dateInput}
                            onChange={handleDateChange}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            error={!!dateError}
                            helperText={dateError || 'YYYY-MM-DDTHH:MM:SS形式'}
                            sx={{ mb: 2 }}
                        />
                        <Typography variant="body2" color="text.secondary">
                            変換結果: <strong>{resultUnix}</strong> ({unixUnit === 'milliseconds' ? 'ミリ秒' : '秒'})
                        </Typography>
                    </Box>
                </Grid>

                {/* UNIXタイムスタンプ入力セクション */}
                <Grid item xs={12} md={6}>
                    <Box sx={{ border: 1, borderColor: 'divider', borderRadius: 1, p: 2 }}>
                        <Typography variant="h6" gutterBottom color="primary">
                            UNIXタイムスタンプ → 日付
                        </Typography>
                        
                        <FormControl component="fieldset" sx={{ mb: 2 }}>
                            <FormLabel component="legend">単位</FormLabel>
                            <RadioGroup
                                row
                                value={unixUnit}
                                onChange={handleUnitChange}
                            >
                                <FormControlLabel 
                                    value="seconds" 
                                    control={<Radio />} 
                                    label="秒" 
                                />
                                <FormControlLabel 
                                    value="milliseconds" 
                                    control={<Radio />} 
                                    label="ミリ秒" 
                                />
                            </RadioGroup>
                        </FormControl>

                        <TextField
                            fullWidth
                            label="UNIXタイムスタンプを入力"
                            type="number"
                            value={unixInput}
                            onChange={handleUnixChange}
                            error={!!unixError}
                            helperText={unixError || (unixUnit === 'milliseconds' ? 'ミリ秒で入力' : '秒で入力')}
                            sx={{ mb: 2 }}
                        />
                        <Typography variant="body2" color="text.secondary">
                            変換結果: <strong>{resultDate}</strong>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>

            <Divider sx={{ my: 3 }} />

            {/* 説明セクション */}
            <Box sx={{ textAlign: 'center' }}>
                <Typography variant="body2" color="text.secondary">
                    UNIXタイムスタンプは1970年1月1日 00:00:00 UTCからの経過時間です。<br />
                    秒単位とミリ秒単位の両方に対応しています。
                </Typography>
            </Box>
        </Box>
    )
}

export default UnixTimeConverter
