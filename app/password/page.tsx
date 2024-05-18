'use client'
import React from 'react'
import PasswordGenerator from './components/PasswordGenerator'

const PasswordPage = () => {
    return (
        <>
            <h1>パスワードジェネレーター</h1>
            <p>
                指定した長さと条件（大文字、小文字、数字、記号）でランダムなパスワードを生成します。
            </p>
            <PasswordGenerator />
        </>
    )
}

export default PasswordPage
