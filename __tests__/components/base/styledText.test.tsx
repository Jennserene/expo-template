import { StyledText } from '@components/base/styledText'
import { render, screen } from '@testing-library/react-native'
import { fontWeightEnum } from '@typeDefs'
import React from 'react'

describe('StyledText', () => {
  it('renders text with default font weight', async () => {
    render(<StyledText>Hello World</StyledText>)

    const textElement = await screen.getByText('Hello World')
    expect(textElement.props.style).toHaveProperty(
      'fontFamily',
      fontWeightEnum.regular,
    )
  })

  it('renders text with custom font weight', async () => {
    const firstWeight = Object.keys(
      fontWeightEnum,
    )[0] as keyof typeof fontWeightEnum
    const fontWeight = fontWeightEnum[firstWeight]
    render(<StyledText fontWeight={fontWeight}>Hello World</StyledText>)

    const textElement = await screen.getByText('Hello World')
    expect(textElement.props.style).toHaveProperty('fontFamily', fontWeight)
  })
})
