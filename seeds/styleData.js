const { Style } = require('../models');

const styleData = [
  // {
  //   product_name: 'Adidas',
  //   brand_id: 3,
  //   filename: '01-adidas.png',
  //   description: 'Adidas logo',
  // },
  // {
  //   product_name: 'Jordan',
  //   brand_id: 2,
  //   filename: '02-jordan.png',
  //   description: 'Jordan logo',
  // },
  // {
  //   product_name: 'Nike',
  //   brand_id: 1,
  //   filename: '03-nike.png',
  //   description: 'Nike logo',
  // },
  {
    product_name: 'Adidas shoe',
    brand_id: 1,
    filename: '04-Adidas Originals NMD_R1.png',
    price: '$160',
    description: 'Adidas Originals NMD_R1',
  },
  {
    product_name: 'Adidas shoe',
    brand_id: 1,
    filename: '05-Adidas Pharrell x Human Race Sichona "Burgundy".png',
    price: '$180',
    description: 'Adidas Pharrell x Human Race Sichona "Burgundy"',
  },
  {
    product_name: 'Adidas shoe',
    brand_id: 1,
    filename: '06-Adidas Superstar.png',
    price: '$100',
    description: 'Adidas Superstar',
  },
  {
    product_name: 'Adidas shoe',
    brand_id: 1,
    filename: '07-Adidas Yeezy Boost 350 "Turtle Dove.png"',
    price: '$200',
    description: 'Adidas Yeezy Boost 350 "Turtle Dove"',
  },
  {
    product_name: 'Adidas shoe',
    brand_id: 1,
    filename: '08-Adidas YEEZY FOAM RUNNER "Onyx".png',
    price: '$170',
    description: 'Adidas YEEZY FOAM RUNNER "Onyx"',
  },
  {
    product_name: 'Jordan shoe',
    brand_id: 2,
    filename: '09-Air Jordan 1 High 85 "Georgetown".png',
    price: '$200',
    description: 'Air Jordan 1 High 85 "Georgetown"',
  },
  {
    product_name: 'Jordan shoe',
    brand_id: 2,
    filename: '10-Air Jordan 1 Travis Scott Low "Reverse Mocha".png',
    price: '$150',
    description: 'Air Jordan 1 Travis Scott Low "Reverse Mocha"',
  },
  {
    product_name: 'Jordan shoe',
    brand_id: 2,
    filename: '11-Air Jordan 4 "White Oreo".png',
    price: '$190',
    description: 'Air Jordan 4 "White Oreo"',
  },
  {
    product_name: 'Jordan shoe',
    brand_id: 2,
    filename: '12-Air Jordan 6 "UNC".png',
    price: '$210',
    description: 'Air Jordan 6 "UNC"',
  },
  {
    product_name: 'Jordan shoe',
    brand_id: 2,
    filename: '13-Air Jordan 12 "Playoffs".png',
    price: '$210',
    description: 'Air Jordan 12 "Playoffs"',
  },
  {
    product_name: 'Nike shoe',
    brand_id: 3,
    filename: '14-Nike Air Force 1.png',
    price: '$100',
    description: 'Nike Air Force 1',
  },
  {
    product_name: 'Nike shoe',
    brand_id: 3,
    filename: '14-Nike Air Max 90.png',
    price: '$130',
    description: 'Nike Air Max 90',
  },
  {
    product_name: 'Nike shoe',
    brand_id: 3,
    filename: '14-Nike Air Max 95 SE.png',
    price: '$180',
    description: 'Nike Air Max 95 SE',
  },
  {
    product_name: 'Nike shoe',
    brand_id: 3,
    filename: '14-Nike Air Max 97.png',
    price: '$170',
    description: 'Nike Air Max 97',
  },
  {
    product_name: 'Nike shoe',
    brand_id: 3,
    filename: '14-Nike Dunk Low Panda.png',
    price: '$100',
    description: 'Nike Dunk Low Panda',
  },
];

const seedStyles = () => Style.bulkCreate(styleData);

module.exports = seedStyles;
