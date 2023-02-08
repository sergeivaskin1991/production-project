
type Mods = Record<string, boolean | string>;

//делаем функцию для добавления классов
export const classNames = (cls: string, mods: Mods = {}, additional: string[] = []): string => {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([, value]) => Boolean(value))
            .map(([className]) => className)
    ]
        .join(' ');
}

