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
    Chip,
    Divider,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faCopy,
    faRedo,
    faFingerprint,
    faTrash,
    faDownload,
    faPlus
} from '@fortawesome/free-solid-svg-icons'

const StyledPaper = styled(Paper)(() => ({
    background: '#ffffff',
    border: '1px solid #f0f0f0',
    borderRadius: '12px',
    boxShadow: 'none',
    padding: '24px',
    marginTop: '24px',
}))

const UUIDDisplay = styled(Paper)(() => ({
    background: '#f8f9fa',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    padding: '12px 16px',
    marginBottom: '8px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    transition: 'all 0.2s ease',
    '&:hover': {
        border: '1px solid #1a237e',
        background: '#f5f5f5',
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

const UUIDGenerator = () => {
    const [uuids, setUuids] = useState<string[]>([])
    const [count, setCount] = useState(1)
    const [showSnackbar, setShowSnackbar] = useState(false)
    const [snackbarMessage, setSnackbarMessage] = useState('')

    const generateUUID = () => {
        // UUID v4 生成アルゴリズム
        const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            const r = Math.random() * 16 | 0
            const v = c === 'x' ? r : (r & 0x3 | 0x8)
            return v.toString(16)
        })
        return uuid
    }

    const handleGenerate = () => {
        const newUuids = []
        for (let i = 0; i < count; i++) {
            newUuids.push(generateUUID())
        }
        setUuids(newUuids)
    }

    const handleCopy = (uuid: string) => {
        navigator.clipboard.writeText(uuid).then(() => {
            setSnackbarMessage('UUIDをコピーしました')
            setShowSnackbar(true)
        }).catch(() => {
            setSnackbarMessage('コピーに失敗しました')
            setShowSnackbar(true)
        })
    }

    const handleCopyAll = () => {
        const allUuids = uuids.join('\n')
        navigator.clipboard.writeText(allUuids).then(() => {
            setSnackbarMessage(`${uuids.length}個のUUIDをコピーしました`)
            setShowSnackbar(true)
        }).catch(() => {
            setSnackbarMessage('コピーに失敗しました')
            setShowSnackbar(true)
        })
    }

    const handleDownload = () => {
        const content = uuids.join('\n')
        const blob = new Blob([content], { type: 'text/plain' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `uuids_${new Date().toISOString().split('T')[0]}.txt`
        a.click()
        URL.revokeObjectURL(url)
        setSnackbarMessage('ファイルをダウンロードしました')
        setShowSnackbar(true)
    }

    const handleClear = () => {
        setUuids([])
    }

    const handleRemove = (index: number) => {
        setUuids(uuids.filter((_, i) => i !== index))
    }

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
                    UUID生成
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        color: '#666666',
                        fontSize: '1.125rem',
                    }}
                >
                    UUID v4形式の一意な識別子を生成
                </Typography>
            </Box>

            <StyledPaper>
                <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600, color: '#1a237e' }}>
                        生成数
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                        <TextField
                            type="number"
                            value={count}
                            onChange={(e) => setCount(Math.max(1, Math.min(100, Number(e.target.value))))}
                            InputProps={{ 
                                inputProps: { min: 1, max: 100 },
                                sx: {
                                    borderRadius: '8px',
                                    width: '120px',
                                    '& fieldset': {
                                        borderColor: '#e0e0e0',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#1a237e',
                                    },
                                }
                            }}
                        />
                        <Typography variant="body2" sx={{ color: '#666666' }}>
                            個のUUIDを生成（最大100個）
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    <StyledButton
                        onClick={handleGenerate}
                        startIcon={<FontAwesomeIcon icon={faFingerprint} />}
                    >
                        UUIDを生成
                    </StyledButton>
                    {uuids.length > 0 && (
                        <>
                            <Tooltip title="再生成">
                                <ActionButton onClick={handleGenerate}>
                                    <FontAwesomeIcon icon={faRedo} style={{ fontSize: '16px', color: '#1a237e' }} />
                                </ActionButton>
                            </Tooltip>
                            <Tooltip title="すべてクリア">
                                <ActionButton onClick={handleClear}>
                                    <FontAwesomeIcon icon={faTrash} style={{ fontSize: '16px', color: '#666666' }} />
                                </ActionButton>
                            </Tooltip>
                        </>
                    )}
                </Box>

                {uuids.length > 0 && (
                    <>
                        <Divider sx={{ my: 3 }} />
                        
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Typography variant="subtitle2" sx={{ color: '#666666' }}>
                                    生成されたUUID
                                </Typography>
                                <Chip 
                                    label={`${uuids.length}個`} 
                                    size="small" 
                                    sx={{ 
                                        background: '#1a237e',
                                        color: 'white',
                                        fontSize: '0.75rem',
                                    }}
                                />
                            </Box>
                            <Box sx={{ display: 'flex', gap: 1 }}>
                                {uuids.length > 1 && (
                                    <Tooltip title="すべてコピー">
                                        <ActionButton onClick={handleCopyAll} size="small">
                                            <FontAwesomeIcon icon={faCopy} style={{ fontSize: '14px', color: '#1a237e' }} />
                                        </ActionButton>
                                    </Tooltip>
                                )}
                                <Tooltip title="ダウンロード">
                                    <ActionButton onClick={handleDownload} size="small">
                                        <FontAwesomeIcon icon={faDownload} style={{ fontSize: '14px', color: '#1a237e' }} />
                                    </ActionButton>
                                </Tooltip>
                            </Box>
                        </Box>

                        <Box sx={{ maxHeight: '400px', overflowY: 'auto' }}>
                            {uuids.map((uuid, index) => (
                                <UUIDDisplay key={index}>
                                    <Typography
                                        sx={{
                                            fontFamily: 'monospace',
                                            fontSize: '0.875rem',
                                            color: '#333333',
                                            flex: 1,
                                        }}
                                    >
                                        {uuid}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                                        <Tooltip title="コピー">
                                            <IconButton
                                                onClick={() => handleCopy(uuid)}
                                                size="small"
                                                sx={{
                                                    border: '1px solid #e0e0e0',
                                                    borderRadius: '6px',
                                                    padding: '4px',
                                                    '&:hover': {
                                                        background: '#f8f8f8',
                                                        borderColor: '#1a237e',
                                                    },
                                                }}
                                            >
                                                <FontAwesomeIcon icon={faCopy} style={{ fontSize: '12px', color: '#1a237e' }} />
                                            </IconButton>
                                        </Tooltip>
                                        {uuids.length > 1 && (
                                            <Tooltip title="削除">
                                                <IconButton
                                                    onClick={() => handleRemove(index)}
                                                    size="small"
                                                    sx={{
                                                        border: '1px solid #e0e0e0',
                                                        borderRadius: '6px',
                                                        padding: '4px',
                                                        '&:hover': {
                                                            background: '#fee',
                                                            borderColor: '#d32f2f',
                                                        },
                                                    }}
                                                >
                                                    <FontAwesomeIcon icon={faTrash} style={{ fontSize: '12px', color: '#d32f2f' }} />
                                                </IconButton>
                                            </Tooltip>
                                        )}
                                    </Box>
                                </UUIDDisplay>
                            ))}
                        </Box>

                        <Box sx={{ mt: 2, p: 2, background: '#f0f0f0', borderRadius: '8px' }}>
                            <Typography variant="caption" sx={{ color: '#666666' }}>
                                <strong>UUID v4とは？</strong><br />
                                UUID (Universally Unique Identifier) は、全世界で一意であることが保証された識別子です。
                                v4は乱数ベースで生成され、重複する確率は極めて低くなっています。
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

export default UUIDGenerator