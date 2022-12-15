const router = require('express').Router();
const { Router } = require('express');
const Comment = require('../../models/Comment');


router.get('/', async (req, res) => {
  const commentData = await Comment.findAll().catch((err) => { 
      res.json(err);
    });
      const comments = commentData.map((comment_content) => comment_content.get({ plain: true }));
      res.render('all', { comments });
    });

router.post('/', async (req, res) => {
  console.log("THIS IS WORKING")
   console.log(req.body)
   console.log(req.body.comment_content)
    try {
      const newReview = await Comment.create({

        comment_content: req.body.comment_content,
      });
  
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