import Hidden from './Index';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Hidden',
  component: Hidden,
};

interface HiddenProps {
  className?: string;
  onClick?: () => void;
}

const Template = (args: HiddenProps) => (
  <Hidden {...args} onClick={action('Se abrió el formulario')} />
);

export const Default = Template.bind({});

export const HoverActive = () => <Template className="hover"/>

