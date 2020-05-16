import {Validator} from '~/component/validator-type';

export interface InputsOperation {
    kind: OperationKind
}

export enum OperationKind {
    Add,
    Remove,
    Replace
}

export interface AddOperation extends InputsOperation {
    emails: string[],
    kind: OperationKind.Add,
    validators?: Validator[]
}

export interface RemoveOperation extends InputsOperation {
    ids: string[],
    kind: OperationKind.Remove
}

export interface ReplaceOperation extends InputsOperation {
    emails: string[],
    kind: OperationKind.Replace,
    validators?: Validator[]
}
