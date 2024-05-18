'use client'
import React, { useState } from 'react'
import {
    Box,
    TextField,
    FormGroup,
    FormControlLabel,
    Checkbox,
    Button,
    Typography,
} from '@mui/material'

const PasswordGenerator = () => {
    const [passwordLength, setPasswordLength] = useState(12)
    const [includeUppercase, setIncludeUppercase] = useState(false)
    const [includeLowercase, setIncludeLowercase] = useState(true)
    const [includeNumbers, setIncludeNumbers] = useState(true)
    const [includeSymbols, setIncludeSymbols] = useState(false)
    const [generatedPassword, setGeneratedPassword] = useState('')

    const generatePassword = () => {
        const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz'
        const numberChars = '0123456789'
        const symbolChars = '!@#$%^&*()_+-=[]{}|;:\'",.<>?/'
        let characters = ''
        if (includeUppercase) characters += uppercaseChars
        if (includeLowercase) characters += lowercaseChars
        if (includeNumbers) characters += numberChars
        if (includeSymbols) characters += symbolChars

        let password = ''
        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length)
            password += characters[randomIndex]
        }
        setGeneratedPassword(password)
    }

    return (
        <Box sx={{ my: 4 }}>
            <Typography variant="h5" gutterBottom>
                パスワードジェネレーター
            </Typography>
            <TextField
                label="パスワードの長さ"
                type="number"
                InputProps={{ inputProps: { min: 6, max: 128 } }}
                value={passwordLength}
                onChange={(e) => setPasswordLength(Number(e.target.value))}
                fullWidth
                margin="normal"
            />
            <FormGroup>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={includeUppercase}
                            onChange={(e) =>
                                setIncludeUppercase(e.target.checked)
                            }
                        />
                    }
                    label="大文字を含む"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={includeLowercase}
                            onChange={(e) =>
                                setIncludeLowercase(e.target.checked)
                            }
                        />
                    }
                    label="小文字を含む"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={includeNumbers}
                            onChange={(e) =>
                                setIncludeNumbers(e.target.checked)
                            }
                        />
                    }
                    label="数字を含む"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={includeSymbols}
                            onChange={(e) =>
                                setIncludeSymbols(e.target.checked)
                            }
                        />
                    }
                    label="記号を含む"
                />
            </FormGroup>
            <Button
                variant="contained"
                color="primary"
                onClick={generatePassword}
                sx={{ mt: 2 }}
            >
                パスワードを生成
            </Button>
            {generatedPassword && (
                <Typography
                    variant="body1"
                    sx={{ mt: 2, whiteSpace: 'normal', wordWrap: 'break-word' }}
                >
                    生成されたパスワード: {generatedPassword}
                </Typography>
            )}
        </Box>
    )
}

export default PasswordGenerator
