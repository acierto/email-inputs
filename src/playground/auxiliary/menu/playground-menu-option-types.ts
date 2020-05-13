export type PlaygroundMenuOptionRenderType = (element: HTMLElement) => void;

type PlaygroundMenuOptionValueType = {
    default?: boolean,
    render: PlaygroundMenuOptionRenderType
}

export type PlaygroundMenuOptionType = {
    [key: string]: PlaygroundMenuOptionValueType
};
