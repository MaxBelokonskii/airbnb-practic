import { render } from '@/jest/utils'
import { composeStories } from '@storybook/testing-react'
import * as stories from './label.stories'

const { Default } = composeStories(stories)

describe('Label Tests', () => {
  it('Label should be render', () => {
    const component = render(<Default />)
    expect(component.container).toBeInTheDocument()
  })
})
