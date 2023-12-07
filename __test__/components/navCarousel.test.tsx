import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import NavCarousel from '@/components/NavCarousel/NavCarousel'

describe('NavCarousel', () => {
  test('Should render the component', () => {
    render(<NavCarousel />)
    expect(true).toBeTruthy()
  })
  test('Should have a text', () => {
    render(<NavCarousel />)
    const navElement = screen.getByTestId('navCarousel')
    expect(navElement).toBeInTheDocument()
    expect(navElement).toHaveTextContent('NavCarousel')
  })
})
