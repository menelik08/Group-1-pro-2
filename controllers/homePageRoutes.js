const router = require('express').Router();
const { Brand, Style, Comment } = require('../models');

// need to update variables to match once we have all our informaton for handlebars and such
router.get('/', async (req, res) => {
  try {
    const dbBrandData = await Brand.findAll({
      include: [
        {
          model: Style,
          attributes: ['filename', 'description'],
        },
      ],

    });
   
    const brands = dbBrandData.map((Brand) =>
      Brand.get({ plain: true })
    );
    res.render('homepage', {
      brands,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// // need to update variables to match once we have all our informaton for handlebars and such
router.get('/brand/:id', async (req, res) => {
  try {
    const dbBrandData = await Brand.findByPk(req.params.id, {
      include: [
        {
          model: Style,
          attributes: [
            'id',
            'product_name',
            'price',
            'filename',
            'description',
            'product_description'
          ],
        },
      ],
    });

    const brand = dbBrandData.get({ plain: true });
    res.render('shoeBrand', { brand, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one shoe by id and possibly reviews. 
// router.get('/style/:id', async (req, res) => {
//   try {
//     const dbstyleData = await Style.findByPk(req.params.id);
//     const comments = await Comment.findAll({
//         where: {
//           style_id: req.params.id
//         },
//         attributes: ["comment_content"]

//     })
//     const styles = dbstyleData.get({ plain: true });
//     // const comments = commentsData.get({ plain: true });

//     console.log(styles, comments)
//     res.render('shoeStyle', { styles, comments, loggedIn: req.session.loggedIn });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

router.get('/style/:id', async (req, res) => {
  try {
    const dbstyleData = await Style.findByPk(req.params.id, {
      include: [Comment]
    });   
    const styles = dbstyleData.get({ plain: true });
    console.log(styles)
    res.render('shoeStyle', { styles, comments: styles.comment, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('signup');
});

router.get('/culture', (req, res) => {
  res.render('culture');
});


module.exports = router;