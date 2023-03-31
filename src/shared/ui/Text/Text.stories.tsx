import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Text loren ipsun',
    text: 'Descripton asdasdasd',
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'Text loren ipsun',
};

export const onlyText = Template.bind({});
onlyText.args = {
    text: 'Descripton asdasdasd',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Text loren ipsun',
    text: 'Descripton asdasdasd',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
    title: 'Text loren ipsun',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
    text: 'Descripton asdasdasd',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
    title: 'Text loren ipsun',
    text: 'Descripton asdasdasd',
    theme: TextTheme.ERROR,
};
