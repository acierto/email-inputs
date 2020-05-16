export type EmailInput = {
    id: string,
    email: string,
    valid: boolean
};

export type PositionedEmailInput = EmailInput & {
    oldId?: string,
    position: number
};
