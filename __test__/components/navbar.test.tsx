import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Navbar from '@/components/Navbar/Navbar'

describe('Navbar', () => {
  test('Should render the component', () => {
    render(<Navbar />)
    expect(true).toBeTruthy()
  })
  test('Should have a text', () => {
    render(<Navbar />)
    const navElement = screen.getByTestId('navbar')
    expect(navElement).toBeInTheDocument()
    expect(navElement).toHaveTextContent('Navbar')
  })
})
