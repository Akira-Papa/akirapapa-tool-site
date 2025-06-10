'use client'
import React, { useState } from 'react'
import {
    Box,
    Button,
    Typography,
    Paper,
    IconButton,
    Tooltip,
    Snackbar,
    Alert,
    TextField,
    ToggleButton,
    ToggleButtonGroup,
    Chip,
    Divider,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faCopy,
    faCode,
    faCompress,
    faExpand,
    faCheck,
    faExclamationTriangle,
    faBroom,
    faDownload,
    faUpload
} from '@fortawesome/free-solid-svg-icons'

const StyledPaper = styled(Paper)(() => ({
    background: '#ffffff',
    border: '1px solid #f0f0f0',
    borderRadius: '12px',
    boxShadow: 'none',
    padding: '24px',
    marginTop: '24px',
}))

const CodeEditor = styled(TextField)(() => ({
    '& .MuiOutlinedInput-root': {
        fontFamily: 'Monaco, Consolas, "Courier New", monospace',
        fontSize: '14px',
        borderRadius: '8px',
        background: '#f8f9fa',
        '& fieldset': {
            borderColor: '#e0e0e0',
        },
        '&:hover fieldset': {
            borderColor: '#1a237e',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#1a237e',
        },
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

const ActionButton = styled(IconButton)(() => ({
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    padding: '8px',
    '&:hover': {
        background: '#f8f8f8',
        borderColor: '#1a237e',
    },
}))

const StatusChip = styled(Chip)(({ status }: { status: 'valid' | 'invalid' | 'empty' }) => ({
    borderRadius: '6px',
    fontWeight: 500,
    ...(status === 'valid' && {
        backgroundColor: '#e8f5e9',
        color: '#2e7d32',
        '& .MuiChip-icon': {
            color: '#2e7d32',
        },
    }),
    ...(status === 'invalid' && {
        backgroundColor: '#ffebee',
        color: '#d32f2f',
        '& .MuiChip-icon': {
            color: '#d32f2f',
        },
    }),
    ...(status === 'empty' && {
        backgroundColor: '#f5f5f5',
        color: '#666666',
    }),
}))

const JSONFormatter = () => {
    const [inputJSON, setInputJSON] = useState('')
    const [outputJSON, setOutputJSON] = useState('')
    const [mode, setMode] = useState<'format' | 'minify'>('format')
    const [indentSize, setIndentSize] = useState<2 | 4>(2)
    const [isValid, setIsValid] = useState<boolean | null>(null)
    const [error, setError] = useState<string>('')
    const [showSnackbar, setShowSnackbar] = useState(false)
    const [snackbarMessage, setSnackbarMessage] = useState('')

    const validateAndProcess = (value: string) => {
        setInputJSON(value)
        
        if (!value.trim()) {
            setOutputJSON('')
            setIsValid(null)
            setError('')
            return
        }

        try {
            const parsed = JSON.parse(value)
            setIsValid(true)
            setError('')
            
            if (mode === 'format') {
                setOutputJSON(JSON.stringify(parsed, null, indentSize))
            } else {
                setOutputJSON(JSON.stringify(parsed))
            }
        } catch (e) {
            setIsValid(false)
            setError(e instanceof Error ? e.message : 'Invalid JSON')
            setOutputJSON('')
        }
    }

    const handleModeChange = (_: React.MouseEvent<HTMLElement>, newMode: 'format' | 'minify' | null) => {
        if (newMode !== null) {
            setMode(newMode)
            if (inputJSON && isValid) {
                validateAndProcess(inputJSON)
            }
        }
    }

    const handleIndentChange = (_: React.MouseEvent<HTMLElement>, newIndent: 2 | 4 | null) => {
        if (newIndent !== null) {
            setIndentSize(newIndent)
            if (inputJSON && isValid && mode === 'format') {
                validateAndProcess(inputJSON)
            }
        }
    }

    const handleCopy = (text: string, message: string) => {
        navigator.clipboard.writeText(text).then(() => {
            setSnackbarMessage(message)
            setShowSnackbar(true)
        }).catch(() => {
            setSnackbarMessage('コピーに失敗しました')
            setShowSnackbar(true)
        })
    }

    const handleClear = () => {
        setInputJSON('')
        setOutputJSON('')
        setIsValid(null)
        setError('')
    }

    const handleSampleData = () => {
        const sample = {
            "name": "あきらパパツールサイト",
            "version": "1.0.0",
            "description": "開発者向けの便利なWebツール集",
            "tools": [
                {
                    "id": 1,
                    "name": "JSON整形",
                    "category": "開発ツール"
                },
                {
                    "id": 2,
                    "name": "UUID生成",
                    "category": "ユーティリティ"
                }
            ],
            "features": {
                "formatting": true,
                "validation": true,
                "minification": true
            }
        }
        const sampleJSON = JSON.stringify(sample, null, 2)
        validateAndProcess(sampleJSON)
    }

    const handleDownload = () => {
        if (outputJSON) {
            const blob = new Blob([outputJSON], { type: 'application/json' })
            const url = URL.createObjectURL(blob)
            const a = document.createElement('a')
            a.href = url
            a.download = `formatted_${new Date().toISOString().split('T')[0]}.json`
            a.click()
            URL.revokeObjectURL(url)
            setSnackbarMessage('ファイルをダウンロードしました')
            setShowSnackbar(true)
        }
    }

    const getStatus = (): 'valid' | 'invalid' | 'empty' => {
        if (!inputJSON.trim()) return 'empty'
        return isValid ? 'valid' : 'invalid'
    }

    const status = getStatus()

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
                    JSON整形・検証
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        color: '#666666',
                        fontSize: '1.125rem',
                    }}
                >
                    JSONの整形、圧縮、検証をリアルタイムで実行
                </Typography>
            </Box>

            <StyledPaper>
                <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                        <ToggleButtonGroup
                            value={mode}
                            exclusive
                            onChange={handleModeChange}
                            size="small"
                            sx={{
                                '& .MuiToggleButton-root': {
                                    borderRadius: '8px',
                                    px: 2,
                                    textTransform: 'none',
                                    '&.Mui-selected': {
                                        background: '#1a237e',
                                        color: 'white',
                                        '&:hover': {
                                            background: '#0d1a6e',
                                        },
                                    },
                                },
                            }}
                        >
                            <ToggleButton value="format">
                                <FontAwesomeIcon icon={faExpand} style={{ marginRight: '8px' }} />
                                整形
                            </ToggleButton>
                            <ToggleButton value="minify">
                                <FontAwesomeIcon icon={faCompress} style={{ marginRight: '8px' }} />
                                圧縮
                            </ToggleButton>
                        </ToggleButtonGroup>

                        {mode === 'format' && (
                            <ToggleButtonGroup
                                value={indentSize}
                                exclusive
                                onChange={handleIndentChange}
                                size="small"
                                sx={{
                                    '& .MuiToggleButton-root': {
                                        borderRadius: '8px',
                                        px: 2,
                                        textTransform: 'none',
                                        '&.Mui-selected': {
                                            background: '#e3f2fd',
                                            color: '#1a237e',
                                        },
                                    },
                                }}
                            >
                                <ToggleButton value={2}>2スペース</ToggleButton>
                                <ToggleButton value={4}>4スペース</ToggleButton>
                            </ToggleButtonGroup>
                        )}
                    </Box>

                    <StatusChip
                        status={status}
                        icon={status === 'valid' ? <FontAwesomeIcon icon={faCheck} /> : 
                              status === 'invalid' ? <FontAwesomeIcon icon={faExclamationTriangle} /> : undefined}
                        label={status === 'valid' ? '有効なJSON' : 
                               status === 'invalid' ? '無効なJSON' : 
                               'JSONを入力してください'}
                    />
                </Box>

                <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                    <Button
                        variant="outlined"
                        size="small"
                        onClick={handleSampleData}
                        startIcon={<FontAwesomeIcon icon={faUpload} />}
                        sx={{
                            borderColor: '#e0e0e0',
                            color: '#666666',
                            borderRadius: '8px',
                            textTransform: 'none',
                            '&:hover': {
                                borderColor: '#1a237e',
                                color: '#1a237e',
                            },
                        }}
                    >
                        サンプルデータ
                    </Button>
                    {inputJSON && (
                        <Tooltip title="クリア">
                            <ActionButton onClick={handleClear} size="small">
                                <FontAwesomeIcon icon={faBroom} style={{ fontSize: '14px', color: '#666666' }} />
                            </ActionButton>
                        </Tooltip>
                    )}
                </Box>

                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' }, gap: 3 }}>
                    {/* Input */}
                    <Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                            <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#1a237e' }}>
                                入力
                            </Typography>
                            {inputJSON && (
                                <Tooltip title="コピー">
                                    <ActionButton 
                                        onClick={() => handleCopy(inputJSON, '入力JSONをコピーしました')} 
                                        size="small"
                                    >
                                        <FontAwesomeIcon icon={faCopy} style={{ fontSize: '12px', color: '#1a237e' }} />
                                    </ActionButton>
                                </Tooltip>
                            )}
                        </Box>
                        <CodeEditor
                            multiline
                            rows={15}
                            fullWidth
                            value={inputJSON}
                            onChange={(e) => validateAndProcess(e.target.value)}
                            placeholder="JSONを入力してください..."
                            error={isValid === false}
                            helperText={error}
                        />
                    </Box>

                    {/* Output */}
                    <Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                            <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#1a237e' }}>
                                出力
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 0.5 }}>
                                {outputJSON && (
                                    <>
                                        <Tooltip title="コピー">
                                            <ActionButton 
                                                onClick={() => handleCopy(outputJSON, '出力JSONをコピーしました')} 
                                                size="small"
                                            >
                                                <FontAwesomeIcon icon={faCopy} style={{ fontSize: '12px', color: '#1a237e' }} />
                                            </ActionButton>
                                        </Tooltip>
                                        <Tooltip title="ダウンロード">
                                            <ActionButton onClick={handleDownload} size="small">
                                                <FontAwesomeIcon icon={faDownload} style={{ fontSize: '12px', color: '#1a237e' }} />
                                            </ActionButton>
                                        </Tooltip>
                                    </>
                                )}
                            </Box>
                        </Box>
                        <CodeEditor
                            multiline
                            rows={15}
                            fullWidth
                            value={outputJSON}
                            placeholder={mode === 'format' ? "整形されたJSONがここに表示されます..." : "圧縮されたJSONがここに表示されます..."}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </Box>
                </Box>

                {isValid && inputJSON && (
                    <Box sx={{ mt: 3, p: 2, background: '#f0f0f0', borderRadius: '8px' }}>
                        <Typography variant="caption" sx={{ color: '#666666' }}>
                            <strong>統計情報:</strong> {' '}
                            {(() => {
                                try {
                                    const parsed = JSON.parse(inputJSON)
                                    const keys = JSON.stringify(parsed).match(/"[^"]+"\s*:/g)?.length || 0
                                    const arrays = JSON.stringify(parsed).match(/\[/g)?.length || 0
                                    const objects = JSON.stringify(parsed).match(/\{/g)?.length || 0
                                    return `キー数: ${keys} | 配列: ${arrays} | オブジェクト: ${objects}`
                                } catch {
                                    return ''
                                }
                            })()}
                        </Typography>
                    </Box>
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

export default JSONFormatter