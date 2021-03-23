const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

//find all tags
router.get('/', async (req, res) => {
 try {
   const tagData = await Tag.findAll ({
     //include associated product data
     include:[{model: Product, through: ProductTag, as:'product_tag'}]
   });
   
   res.status(200).json(tagData)
 } catch (err) {
   res.status(500).json(err);
 }
});


//find single tad by it's id
router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      //include associated Product data
      include: [{model: Product, through: ProductTag, as: 'product_tag'}]
    });
    //if no tag found with that id, return 404, otherwise return tag data
    if(!tagData) {
      res.status(404).json({message:'No tag found with that id, please try again.'})
      return;
    }

    res.status(200).json(tagData);
  
  } catch (err) {
    res.status(500).json(err)
    return;
  }
});


//Create new tag
router.post('/', async (req, res) => {
  try{
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});


//Update a tag's name by it's id
router.put('/:id', async (req, res) => {
  const id = req.params,id;
  try {
    const tagData = await Tag.update(req.body, {
      where: {id: id}
    })
    //if no data entered, return error
    if (!tagData) {
      res.status(400).json({message: 'You must enter data and a valid id to update!'})
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err)
    return;
  }
});


  // delete on tag by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });
    //if no product with that id, return 404 error, else delete chosen product
    if (!tagData) {
      res.status(404).json({message: "No tag found with that id, please try again."})
      return;
    }
 
    res.status(200).json(tagData);
 
   } catch (err) {
     res.status(500).json(err);
   }
});

module.exports = router;
