import React from 'react';
import classNames from '../../lib/classNames';

type IProps = {
    disabled?: boolean;
    width?: string;
    height?: string;
    backgroundImage?: string;
    onClick?: (e: any) => void;
}
export default class Button extends React.PureComponent<IProps> {

    constructor(props: any) {
        super(props);
    }

    render() {
        const {
            children,
            disabled,
            onClick,
            width,
            height,
            backgroundImage
        } = this.props;

        const disabledClass = (disabled) ?
            "Button__disabled"
            : null;

        console.log(backgroundImage);

        const _backgroundImage = (backgroundImage) ? {
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "100%",
            backgroundPosition: "center center"
        } : null;
        const buttonImageClass = (backgroundImage) ? "ButtonImage" : null;

        return (
            <div
                className={classNames("Button", disabledClass, buttonImageClass)}
                onClick={onClick}
                style={{
                    width: width,
                    height: height,
                    ..._backgroundImage
                }}
            >
                <span className={"ButtonTitle"}>{children}</span>
            </div>
        );
    }
}