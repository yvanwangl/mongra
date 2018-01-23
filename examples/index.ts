import {Model, String, Mongo, Graphql} from '../src/index';

class PostModel extends Model {

    constructor(type){
        super(type);
    }

    @String
    private name;

    @String
    private author;

}

let post = new PostModel('mongo');

console.log(JSON.stringify(post));