export interface EmailEventTarget extends EventTarget {
    dataset: any
}

export interface RemoveMouseEvent extends MouseEvent {
    target: EmailEventTarget | null
}

export declare var RemoveMouseEvent: {
    prototype: RemoveMouseEvent;
    new(target: EmailEventTarget): RemoveMouseEvent;
};

export declare var EmailEventTarget: {
    prototype: EmailEventTarget;
    new(dataset: object): EmailEventTarget;
}

export const getDataSet = (event: RemoveMouseEvent): { id: string, type: string } => event.target.dataset;

export const getInputValue = (event: UIEvent) => (event.target as HTMLInputElement).value;
