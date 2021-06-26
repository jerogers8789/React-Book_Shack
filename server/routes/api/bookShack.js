const router = require('express').Router();
const Controller = require('../../controller');

router.route('/')
  .get(Controller.findAll)
  .post(Controller.create);
router.route('/:id')
  .delete(Controller.delete);

module.exports = router;