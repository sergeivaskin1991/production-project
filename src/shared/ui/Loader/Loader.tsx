import { classNames } from 'shared/lib/classNames/classNames';

import './Loader.scss';

interface LoaderProp {
    className?: string;
}

export const Loader = ({ className }: LoaderProp) => (
    <div className={classNames('lds-ripple"', {}, [className])}>
        <div className="lds-ripple">
            <div />
            <div />
        </div>
    </div>
);
