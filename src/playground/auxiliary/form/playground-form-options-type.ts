import {Validator} from '~/component/validator-type';

export type PlaygroundFormOptionType = {
    id: string,
    initialData?: string[],
    placeholder?: string,
    showTitle?: boolean,
    validators?: Validator[]
}

export type PlaygroundFormOptionsType = {
    emailsInputList: PlaygroundFormOptionType[],
    styles?: object
}
