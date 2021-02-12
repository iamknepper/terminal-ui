import React from 'react';
declare type IProps = {
    title: string;
    winCtrls?: string;
    maximized?: boolean;
    onMin?: () => void;
    onMax?: () => void;
    onClose?: () => void;
};
declare class ElectronHeader extends React.PureComponent<IProps> {
    constructor(props: any);
    render(): JSX.Element;
}
export default ElectronHeader;
