import chalk from 'chalk';
import { logTypes } from '../types/index.js';

export async function log({ color, type="LOG", message="" }: logTypes.LogOptions) {
    const logType = "[" + type + "]";
    return console.log(chalk.hex(color.toString())(logType) + " " + message);
};

export async function error({ color, type="ERROR", message="", err }: logTypes.ErrorLogOptions) {
    const logType = "[" + type + "]";
    return console.error(chalk.hex(color.toString())(logType) + " " + message, err);
};