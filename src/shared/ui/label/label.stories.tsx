import { Story, Meta } from '@storybook/react'
import { Label, LabelProps } from './label'

export default {
  title: 'Shared/Label',
  component: Label,
} as Meta

const Template: Story<LabelProps> = args => <Label {...args} title='Team' />

export const Default = Template.bind({})
Default.args = {}
