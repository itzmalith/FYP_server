const express = require('express')
const router = express.Router()


const userRoutes = require('./user.routes')
const authRoutes = require('./auth.routes')
const roleRoutes = require('./role.routes')


router.use('/users', userRoutes)
router.use('/auth' , authRoutes)

router.use('/role',roleRoutes)

module.exports = router