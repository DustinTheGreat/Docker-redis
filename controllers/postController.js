 const Post = require("../models/postModel")



 exports.getAllPost = async (req, res, next) => {
 	try {
 	const post = await Post.find()
 	res,status(200).json({
 		status:'yayyy', 
 		results:posts.length,	
 	});
} catch(e) {
 		res.status(400).json({
 			status:'failed!!!!!!!!!!!', 

 		});


 	}
 };


 exports.getOnePost = async (req, res, next) => {
 	try {
 	const post = await Post.findById(req.params.id);
 	res,status(200).json({
 		status:'yayyy', 
 		results:posts.length,	
 	});
} catch(e) {
 		res.status(400).json({
 			status:'failed!!!!!!!!!!!', 

 		});


 	}
 exports.CreatePost = async (req, res, next) => {
 	try {
 	const post = await Post.create(req.body);
 	res,status(200).json({
 		status:'yayyy', 
 		results:posts.length,	
 	});
} catch(e) {
 		res.status(400).json({
 			status:'failed!!!!!!!!!!!', 

 		});


 	}
 };

