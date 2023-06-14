import { render } from '@/jest/utils'
import { composeStories } from '@storybook/testing-react'
import * as stories from './card.stories'

const { Default } = composeStories(stories)

describe('Card Tests', () => {
  it('Card should be render', () => {
    const component = render(<Default />)
    expect(component.container).toBeInTheDocument()
  })
})
