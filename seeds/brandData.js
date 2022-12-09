const { Brand } = require('../models');

const brandData = [
  {
    brand_name: 'Nike',
  },
  {
    brand_name: 'Jordan',
  },
  {
    brand_name: 'Adidas',
  },
];

const seedBrand = () => Brand.bulkCreate(brandData);

module.exports = seedBrand;
