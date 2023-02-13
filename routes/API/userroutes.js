const router = require('express').Router();
const {
  getUser,
  getSingleUser,
  createUser,
  addFriend,
  deleteFriend,
  updateUser,
  deleteUser
} = require('../../controllers/userController');


router.route('/').get(getUser);

router.route('/:userId').get(getSingleUser);

router.route('/').post(createUser);
router.route('/:userId').put(updateUser);
router.route('/:userId').delete(deleteUser);
router.route('/:userId/friends/:friendId').post(addFriend);


router.route('/:userId/friends/:friendId').delete(deleteFriend);

module.exports = router;