const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    body: {
        type: String,
    },
    author:{
        type: mongoose.Types.ObjectId,
        required:true,
        ref:"User"
    },
    blogId:{
        type: mongoose.Types.ObjectId,
        ref:"Blog"
    }
    
}, {
    timestamps: true
})


const Comment = mongoose.model("Blog", blogSchema);

module.exports = Blog;