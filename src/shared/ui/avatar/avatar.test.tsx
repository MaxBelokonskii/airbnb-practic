import { render } from '@/jest/utils'
import { composeStories } from '@storybook/testing-react'
import * as stories from './avatar.stories'

const { Default } = composeStories(stories)

describe('Avatar Tests', () => {
  it('Avatar should be render', () => {
    const component = render(<Default />)
    expect(component.container).toBeInTheDocument()
  })
})
