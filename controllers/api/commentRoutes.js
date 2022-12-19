const router = require('express').Router();
const { Router } = require('express');
const Comment = require('../../models/Comment');




router.post('/', async (req, res) => {
  console.log("THIS IS WORKING")
   console.log(req.body)
    try {
      const newReview = await Comment.create({
        style_id : req.body.id,

        comment_content: req.body.comment_content,
      });
      console.log(newReview)
      res.status(200).json(newReview);
     
    } catch (err) {
      res.status(400).json(err);
    }
  });

//   router.put('/comments/:id', async (req, res) => {
   
//     try {
//       const styleReview = await Comment.update(
//         {

//           comment_content: req.body.comment_content,

//         },
//         {
//           where: {
//             id: req.params.id,
//           },
//         }
//       );
      
//       console.log(styleReview)
//       res.status(200).json(styleReview);

//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

module.exports = router