import React from 'react';

class ElectronContent extends React.PureComponent  {
    
    constructor(props: any) {
        super(props);
    }

    render() {
        const {
            children
        } = this.props;

        return (
            <div className={"ElectronContent"}>
                {children}
            </div>
        );
    }
}

export default ElectronContent;