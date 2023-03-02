import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProp {
    children?: ReactNode;
    element?: HTMLElement
}

export const Portal = (props: PortalProp) => {
    const { children, element = document.body } = props;

    return createPortal(children, element);
};
