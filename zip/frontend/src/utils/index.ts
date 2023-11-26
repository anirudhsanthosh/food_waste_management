import { twMerge } from 'tailwind-merge'
import classnames, { ArgumentArray } from 'classnames'

export function cn(...inputs: ArgumentArray) {

    return twMerge(classnames(inputs));
}