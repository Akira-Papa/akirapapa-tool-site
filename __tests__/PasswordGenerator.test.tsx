import { render, screen, fireEvent } from '@testing-library/react'
import PasswordGenerator from '../app/password/components/PasswordGenerator'

describe('PasswordGenerator', () => {
  test('generates password with specified length when character types selected', () => {
    render(<PasswordGenerator />)
    fireEvent.change(screen.getByLabelText('パスワードの長さ'), { target: { value: 8 } })
    fireEvent.click(screen.getByLabelText('大文字を含む'))
    fireEvent.click(screen.getByText('パスワードを生成'))
    const result = screen.getByText(/生成されたパスワード:/)
    const password = result.textContent?.replace('生成されたパスワード: ', '') || ''
    expect(password.length).toBe(8)
  })

  test('shows warning when no character types are selected', () => {
    render(<PasswordGenerator />)
    fireEvent.click(screen.getByLabelText('小文字を含む'))
    fireEvent.click(screen.getByLabelText('数字を含む'))
    fireEvent.click(screen.getByText('パスワードを生成'))
    expect(screen.getByRole('alert')).toHaveTextContent('少なくとも1つの文字種を選択してください')
  })
})
