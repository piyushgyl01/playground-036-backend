const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const slugify = require("slugify");

const articleSchema = new mongoose.Schema(
    {
        slug: {
            type:String,
            unique:true,
            lowercase:true,
            index:true
        },
        title:{
            type:String,
            required:true,
          
        },
        description:{
            type:String,
            required:true,
          
        }
    }
)