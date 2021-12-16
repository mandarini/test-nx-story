import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { HelloComponent } from './hello.component';

export default {
  title: 'HelloComponent',
  component: HelloComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<HelloComponent>;

const Template: Story<HelloComponent> = (args: HelloComponent) => ({
  component: HelloComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}