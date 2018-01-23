import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLID
} from 'graphql';
import {typeSymbolKey, instanceSymbolKey} from '../index';

export const String = (target, propertyKey) => {
    let type = Reflect.getMetadata(typeSymbolKey, target);
    let self = Reflect.getMetadata(instanceSymbolKey, target);
    if (type == 'mongo') {
        self.propertyKey = String;
    } else {
        self.propertyKey = {
            type: GraphQLString
        }
    }
};

export const Mongo = (target, propertyKey) => {
    let type = Reflect.getMetadata(typeSymbolKey, target);
    let self = Reflect.getMetadata(instanceSymbolKey, target);
    if (type == 'graphql') {
        delete self.propertyKey;
    }
};

export const Graphql = (target, propertyKey) => {
    let type = Reflect.getMetadata(typeSymbolKey, target);
    let self = Reflect.getMetadata(instanceSymbolKey, target);
    if (type == 'mongo') {
        delete self.propertyKey;
    }
};

