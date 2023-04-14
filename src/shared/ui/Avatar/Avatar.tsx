import { classNames } from 'shared/lib/classNames/classNames';

import { CSSProperties, useMemo } from 'react';
import cls from './Avatar.module.scss';

interface AvatarProp {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

export const Avatar = ({
    className, src, size, alt,
}: AvatarProp) => {
    const style = useMemo<CSSProperties>(() => ({
        width: size || 100,
        height: size || 100,
    }), [size]);

    return (
        <img
            src={src}
            className={classNames(cls.Avatar, {}, [className])}
            style={style}
            alt={alt}
        />
    );
};
