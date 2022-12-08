const User = require('./User');
const Brand = require('./Brand');
const Style = require('./Style');

Brand.hasMany(Style, {
  foreignKey: 'brand_id',
});

Style.belongsTo(Brand, {
  foreignKey: 'brand_id',
});

module.exports = { User, Brand, Style };
