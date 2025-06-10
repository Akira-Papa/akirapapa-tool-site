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
    Paper,
    IconButton,
    Tooltip,
    Snackbar,
    Alert,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faCopy,
    faRedo,
    faKey,
    faShieldAlt
} from '@fortawesome/free-solid-svg-icons'

const StyledPaper = styled(Paper)(() => ({
    background: '#ffffff',
    border: '1px solid #f0f0f0',
    borderRadius: '12px',
    boxShadow: 'none',
    padding: '24px',
    marginTop: '24px',
}))

const PasswordDisplay = styled(Paper)(() => ({
    background: '#f8f9fa',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    padding: '16px',
    marginTop: '16px',
    position: 'relative',
    '&:hover': {
        border: '1px solid #1a237e',
    },
}))

const StyledButton = styled(Button)(() => ({
    background: '#1a237e',
    color: 'white',
    borderRadius: '8px',
    padding: '10px 24px',
    textTransform: 'none',
    fontWeight: 500,
    '&:hover': {
        background: '#0d1a6e',
        transform: 'translateY(-1px)',
        boxShadow: '0 4px 12px rgba(26, 35, 126, 0.3)',
    },
}))

const PasswordGenerator = () => {
    const [passwordLength, setPasswordLength] = useState(16)
    const [includeUppercase, setIncludeUppercase] = useState(true)
    const [includeLowercase, setIncludeLowercase] = useState(true)
    const [includeNumbers, setIncludeNumbers] = useState(true)
    const [includeSymbols, setIncludeSymbols] = useState(true)
    const [generatedPassword, setGeneratedPassword] = useState('')
    const [warningMessage, setWarningMessage] = useState('')
    const [showSnackbar, setShowSnackbar] = useState(false)
    const [snackbarMessage, setSnackbarMessage] = useState('')

    const generatePassword = () => {
        const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz'
        const numberChars = '0123456789'
        const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?'
        let characters = ''
        if (includeUppercase) characters += uppercaseChars
        if (includeLowercase) characters += lowercaseChars
        if (includeNumbers) characters += numberChars
        if (includeSymbols) characters += symbolChars

        if (characters.length === 0) {
            setWarningMessage('少なくとも1つの文字種を選択してください')
            setGeneratedPassword('')
            return
        }

        let password = ''
        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length)
            password += characters[randomIndex]
        }
        setWarningMessage('')
        setGeneratedPassword(password)
    }

    const copyToClipboard = () => {
        if (generatedPassword) {
            navigator.clipboard.writeText(generatedPassword).then(() => {
                setSnackbarMessage('パスワードをコピーしました')
                setShowSnackbar(true)
            }).catch(() => {
                setSnackbarMessage('コピーに失敗しました')
                setShowSnackbar(true)
            })
        }
    }

    const getPasswordStrength = () => {
        if (!generatedPassword) return { level: 0, text: '', color: '' }
        
        let strength = 0
        if (passwordLength >= 12) strength++
        if (passwordLength >= 16) strength++
        if (includeUppercase) strength++
        if (includeLowercase) strength++
        if (includeNumbers) strength++
        if (includeSymbols) strength++

        if (strength <= 2) return { level: 1, text: '弱い', color: '#f44336' }
        if (strength <= 4) return { level: 2, text: '普通', color: '#ff9800' }
        return { level: 3, text: '強い', color: '#4caf50' }
    }

    const strength = getPasswordStrength()

    return (
        <Box sx={{ py: 4 }}>
            <Box sx={{ mb: 4, textAlign: 'center' }}>
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: 700,
                        color: '#000000',
                        mb: 1,
                        fontSize: { xs: '2rem', md: '2.5rem' },
                        letterSpacing: '-0.02em',
                    }}
                >
                    パスワード生成
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        color: '#666666',
                        fontSize: '1.125rem',
                    }}
                >
                    安全なパスワードを自動生成
                </Typography>
            </Box>

            <StyledPaper>
                <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600, color: '#1a237e' }}>
                        パスワードの長さ
                    </Typography>
                    <TextField
                        type="number"
                        InputProps={{ 
                            inputProps: { min: 6, max: 128 },
                            sx: {
                                borderRadius: '8px',
                                '& fieldset': {
                                    borderColor: '#e0e0e0',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#1a237e',
                                },
                            }
                        }}
                        value={passwordLength}
                        onChange={(e) => setPasswordLength(Number(e.target.value))}
                        fullWidth
                    />
                </Box>

                <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600, color: '#1a237e' }}>
                        文字の種類
                    </Typography>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={includeUppercase}
                                    onChange={(e) => setIncludeUppercase(e.target.checked)}
                                    sx={{ color: '#1a237e', '&.Mui-checked': { color: '#1a237e' } }}
                                />
                            }
                            label="大文字を含む (A-Z)"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={includeLowercase}
                                    onChange={(e) => setIncludeLowercase(e.target.checked)}
                                    sx={{ color: '#1a237e', '&.Mui-checked': { color: '#1a237e' } }}
                                />
                            }
                            label="小文字を含む (a-z)"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={includeNumbers}
                                    onChange={(e) => setIncludeNumbers(e.target.checked)}
                                    sx={{ color: '#1a237e', '&.Mui-checked': { color: '#1a237e' } }}
                                />
                            }
                            label="数字を含む (0-9)"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={includeSymbols}
                                    onChange={(e) => setIncludeSymbols(e.target.checked)}
                                    sx={{ color: '#1a237e', '&.Mui-checked': { color: '#1a237e' } }}
                                />
                            }
                            label="記号を含む (!@#$%...)"
                        />
                    </FormGroup>
                </Box>

                <Box sx={{ display: 'flex', gap: 2 }}>
                    <StyledButton
                        onClick={generatePassword}
                        startIcon={<FontAwesomeIcon icon={faKey} />}
                    >
                        パスワードを生成
                    </StyledButton>
                    {generatedPassword && (
                        <Tooltip title="再生成">
                            <IconButton
                                onClick={generatePassword}
                                sx={{
                                    border: '1px solid #e0e0e0',
                                    borderRadius: '8px',
                                    '&:hover': {
                                        background: '#f8f8f8',
                                        borderColor: '#1a237e',
                                    },
                                }}
                            >
                                <FontAwesomeIcon icon={faRedo} style={{ fontSize: '16px', color: '#1a237e' }} />
                            </IconButton>
                        </Tooltip>
                    )}
                </Box>

                {warningMessage && (
                    <Alert severity="error" sx={{ mt: 2 }}>
                        {warningMessage}
                    </Alert>
                )}

                {generatedPassword && (
                    <>
                        <PasswordDisplay>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontFamily: 'monospace',
                                    fontSize: '1.125rem',
                                    wordBreak: 'break-all',
                                    pr: 5,
                                }}
                            >
                                {generatedPassword}
                            </Typography>
                            <Tooltip title="コピー">
                                <IconButton
                                    onClick={copyToClipboard}
                                    sx={{
                                        position: 'absolute',
                                        top: '50%',
                                        right: '8px',
                                        transform: 'translateY(-50%)',
                                        border: '1px solid #e0e0e0',
                                        borderRadius: '8px',
                                        background: 'white',
                                        '&:hover': {
                                            background: '#f8f8f8',
                                            borderColor: '#1a237e',
                                        },
                                    }}
                                >
                                    <FontAwesomeIcon icon={faCopy} style={{ fontSize: '14px', color: '#1a237e' }} />
                                </IconButton>
                            </Tooltip>
                        </PasswordDisplay>

                        <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                            <FontAwesomeIcon icon={faShieldAlt} style={{ color: strength.color }} />
                            <Typography variant="body2" sx={{ color: '#666666' }}>
                                パスワード強度:
                            </Typography>
                            <Typography variant="body2" sx={{ color: strength.color, fontWeight: 600 }}>
                                {strength.text}
                            </Typography>
                        </Box>
                    </>
                )}
            </StyledPaper>

            <Snackbar
                open={showSnackbar}
                autoHideDuration={3000}
                onClose={() => setShowSnackbar(false)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert
                    onClose={() => setShowSnackbar(false)}
                    severity="success"
                    sx={{ 
                        width: '100%',
                        background: '#1a237e',
                        color: 'white',
                        '& .MuiAlert-icon': {
                            color: 'white',
                        },
                    }}
                >
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </Box>
    )
}

export default PasswordGenerator