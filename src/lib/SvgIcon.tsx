import React, { FC, HTMLAttributes, RefCallback, RefObject } from 'react';

interface SvgIconProps extends HTMLAttributes<HTMLDivElement> {
    width?: number;
    height?: number;
    viewBox?: string;
    fill?: string;
    getRootRef?: RefCallback<HTMLDivElement> | RefObject<HTMLDivElement>;
}

const svgStyle = { display: 'block' };

export const SvgIcon: FC<SvgIconProps> = ({ viewBox, id, className, style, fill, getRootRef, ...restProps }) => {

    return (
        <div
            {...restProps}
            ref={getRootRef}
            className={`Icon ${className}`}
            style={{ ...style }}
        >
            <svg viewBox={viewBox} width={32} height={32} style={svgStyle}>
                <use xlinkHref={`#${id}`} style={{ fill: 'currentColor', color: fill }} />
            </svg>
        </div>
    );
};

SvgIcon.defaultProps = {
    className: '',
    style: {},
};