import { Story, Meta } from '@storybook/react'
import { Card, CardProps } from './card'

export default {
  title: 'Shared/Card',
  component: Card,
} as Meta

const Template: Story<CardProps> = args => (
  <Card
    {...args}
    title='Team'
    image='https://w.forfun.com/fetch/94/94c56e15f13f1de4740a76742b0b594f.jpeg'
    avatar='https://drasler.ru/wp-content/uploads/2019/05/%D0%A7%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA-%D0%B1%D0%B5%D0%B7-%D0%BB%D0%B8%D1%86%D0%B0-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0-%D0%B8-%D1%84%D0%BE%D1%82%D0%BE-027.jpg'
    username='MaxBel'
    countLikes='257'
    countViews='480'
  />
)

export const Default = Template.bind({})
Default.args = {}
