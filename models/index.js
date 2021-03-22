// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  //join with third table needed to store the foreign keys
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'tagged_products'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  //join third table needed to store foreign key
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'product_tags'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
