import React from 'react';
import icons from '../../assets/icons.svg';
import classNames from '../../lib/classNames';

const WinCtrls = {
    left: "left",
    right: "right"
}

type IProps = {
    title: string;
    winCtrls?: string,
    maximized?: boolean;
    onMin?: () => void;
    onMax?: () => void;
    onClose?: () => void;
}

class ElectronHeader extends React.PureComponent<IProps> {

    constructor(props: any) {
        super(props);
    }

    render() {
        const {
            title,
            winCtrls,
            onMin,
            onMax,
            onClose
        } = this.props;

        const left = (winCtrls === WinCtrls.left);
        const leftWinCtrls = left ?
            "ElectronHeader__WindowControlsLeft"
            : null;
        const maxButtonHref = this.props.maximized
            ? `${icons}#restore-window`
            : `${icons}#maximize-window`;

        return (
            <div className={"ElectronHeader"}>
                <div className={"ElectronHeader__Title"}>{title}</div>
                { winCtrls && (
                    <div className={classNames("ElectronHeader__WindowControls", leftWinCtrls)}>
                        { onMin && (<div onClick={() => onMin()}>
                            <svg className="ElectronHeader_Shape">
                                <use xlinkHref={`${icons}#minimize-window`} />
                            </svg>
                        </div>)}
                        { onMax && (<div onClick={() => onMax()}>
                            <svg className="ElectronHeader_Shape">
                                <use xlinkHref={maxButtonHref} />
                            </svg>
                        </div>)}
                        <div onClick={() => onClose()} className={classNames("ElectronHeader__WindowControl_Close", (left) ? "ElectronHeader__WindowControl_CloseLeft" : null)}>
                            <svg className="ElectronHeader_Shape">
                                <use xlinkHref={`${icons}#close-window`} />
                            </svg>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default ElectronHeader;