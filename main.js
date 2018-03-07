/**
 * Created by happy on 06/03/18.
 */

var gqmongoose=require('gqmongoose')
var mongodb={
    host:"mongo",  // change this to localhost if needed
    port:27017,  // default
    database:"test",  // default
    collection:"test",
    route:"http://localhost:10080/api/db",  // default
};

var schema={
    node:{
        nodeId:Number,
        name:String,
        data:{},
        weight:Number,
        parent:Number
    },
    node_template:{
        nodeId:null,
        name:"Node",
        data:{},
        weight:1,
        parent:null
    },
    edge:{
        edgeId:Number,
        from:Number,
        to:Number,
        name:String,
        data:{},
        weight:Number,
        distance:Number,
        relation:String,
        direction:String
    },
    edge_template:{
        edgeId:null,
        from:null,
        to:null,
        name:"edge",
        data:{},
        weight:1,
        distance:1,
        relation:"related",
        direction:"both"
    }
};