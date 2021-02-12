import React from 'react';
declare type IProps = {
    disabled?: boolean;
    width?: string;
    height?: string;
    backgroundImage?: string;
    onClick?: (e: any) => void;
};
export default class Button extends React.PureComponent<IProps> {
    constructor(props: any);
    render(): JSX.Element;
}
export {};
