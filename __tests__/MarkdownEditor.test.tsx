import { render, screen, fireEvent } from '@testing-library/react'
import MarkdownEditor from '../app/markdown/components/MarkdownEditor'

describe('MarkdownEditor', () => {
    test('renders preview when text is entered', () => {
        render(<MarkdownEditor />)
        const input = screen.getByLabelText('Markdown入力')
        fireEvent.change(input, { target: { value: '# タイトル' } })
        const preview = screen.getByText('タイトル')
        expect(preview.tagName).toBe('H1')
    })
})
