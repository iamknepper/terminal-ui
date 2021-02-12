import React from 'react';
import classNames from '../../lib/classNames';

type IProps = {
    border?: boolean;
    style?: object;
}

class ElectronWindow extends React.PureComponent<IProps>{
    
    constructor(props: any) {
        super(props);
    }

    render() {
        const {
            border,
            style
        } = this.props;
        const borderClass = border ? 'ElectronWindow__Border' : null;
        
        return (
            <div className={classNames("ElectronWindow", borderClass)} style={style}>
                {this.props.children}
            </div>
        );
    }
}

export default ElectronWindow;