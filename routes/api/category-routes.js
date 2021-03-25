const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint to GET all categories
router.get('/', async (req, res) => {
  // find all categories
  try {
    const categoryData = await Category.findAll( {
      //include associated product
      include: [{model: Product}]
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET a single category by id
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      //include associated product
      include: [{model: Product}]
    });
    if(!categoryData) {
      res.status(404).json({message: 'No category found with that id! Please try again!'});
      return;
    }
     res.status(200).json(categoryData);
  } catch (err) {
     res.status(500).json(err);
  }
});


//create new category using POST method
router.post('/', async (req, res) => {
  try{
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//Update a category using PUT method
router.put('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const categoryData = await Category.update( req.body, {
      where: {id: id}
    })
    //if no data entered, return error
    if (!categoryData) {
      res.status(400).json({message: 'You must enter data and a valid id to update!'})
      return;
    }
    //return updated data object if successfully updated
    res.status(200).json(categoryData)
  } catch (err) {
    res.status(400).json(err);
  }
});

//delete category by its id
router.delete('/:id',async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    //if no category founs with that id, return message
    if(!categoryData) {
      res.status(400).json({message:'No category found with that id!'})
      return;
    }
    //if deleted successfully, return 200 status
    res.status(200).json(categoryData);

  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
