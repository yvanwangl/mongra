import 'reflect-metadata';

export const typeSymbolKey = Symbol.for('mongra:type');
export const instanceSymbolKey = Symbol.for('mongra:instance');

export { String, Mongo, Graphql } from './decorators/types';

export class Model {
    constructor(type) {
        Reflect.defineMetadata(typeSymbolKey, Object.getPrototypeOf(this), type);
        Reflect.defineMetadata(instanceSymbolKey, Object.getPrototypeOf(this), this);
    }
}