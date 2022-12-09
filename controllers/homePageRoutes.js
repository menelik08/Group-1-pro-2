const router = require('express').Router();
const { Brand, Style } = require('../models');

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
router.get('/painting/:id', async (req, res) => {
  try {
    const dbPaintingData = await Painting.findByPk(req.params.id);

    const painting = dbPaintingData.get({ plain: true });
    res.render('painting', { painting, loggedIn: req.session.loggedIn });
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

module.exports = router;