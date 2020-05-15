export type InputListeners = {
    blurListener: (event: FocusEvent) => void,
    keyPressListener: (event: KeyboardEvent) => void,
    pasteListener: (event: ClipboardEvent) => void
};
