import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders  Example 1 link', () => {
    render(<App />)
    const linkElement = screen.getByText('Example 1')
    expect(linkElement).toBeInTheDocument()
})

test('renders  Example 2 link', () => {
    render(<App />)
    const linkElement = screen.getByText('Example 2')
    expect(linkElement).toBeInTheDocument()
})
