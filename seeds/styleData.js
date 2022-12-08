const { Style } = require('../models');

const styledata = [
  {
    product_name: 'Blossoming Apricot',
    brand_id: 1,
    filename: 'adidas.png',
    description:
      'Branches with pink apricot blossoms against a blue background.',
  }];
//   {
//     title: 'Cosmos Flowers',
    
//     gallery_id: 1,
//     filename: 'jordan.png',
//     description: 'Pink cosmos flowers against a blue sky.',
//   },
//   {
//     title: 'Sand + Sea = Summer',
   
//     gallery_id: 2,
//     filename: 'Nike.png',
//     description: 'Sandy beach with the blue sea and sky in the background.',
//   },
//   {
//     title: 'Beach Chairs',
  
//     gallery_id: 2,
//     filename: '04-beach-chairs.jpg',
//     description: 'Two beach chairs under a beach umbrella on the beach.',
//   },
//   {
//     title: 'Beach Sunrise',
   
//     gallery_id: 2,
//     filename: '05-beach-sunrise.jpg',
//     description: 'Sun setting in the horizon with waves lapping the shore.',
//   },
//   {
//     title: 'Fall Colors',
   
//     gallery_id: 3,
//     filename: '06-fall-colors.jpg',
//     description:
//       'Trees with red, orange, yellow leaves reflected on a still lake.',
//   },
//   {
//     title: 'Autumn Mountains',
   
//     gallery_id: 3,
//     filename: '07-autumn-mountains.jpg',
//     description:
//       'Mountains with red and yellow leaves against a background of hazy rolling hills.',
//   },
//   {
//     title: 'Frozen River',
   
//     gallery_id: 4,
//     filename: '08-frozen-river.jpg',
//     description:
//       'Trees with white frozen branches reflected on a frozen river against a light pink sky.',
//   },
//   {
//     title: 'Winter Home',
  
//     gallery_id: 4,
//     filename: '09-winter-home.jpg',
//     description:
//       'Log cabin blanketed in heavy white snow with tall snow covered pine trees in the background.',
//   },
// ];

const seedStyles = () => Style.bulkCreate(styledata);

module.exports = seedStyles;
