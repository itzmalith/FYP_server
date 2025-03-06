const express = require('express')
const router = express.Router()
const userController = require('../../controllers/user.controller')
const { protect, authorize } = require('../../middleware/auth.middleware');


router.post('/', protect, authorize('create:user'), userController.createUser);
router.get('/', protect, authorize('read:user'), userController.getUsers);
router.put('/', protect, authorize('update:user'), userController.editUser);
router.delete('/:id', protect, authorize('delete:user'), userController.deleteUser);
router.get('/:id', protect, authorize('read:user'), userController.getUserById);


module.exports = router;

