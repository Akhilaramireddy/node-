const express = require('express');
const router = express.Router();

const { signup,getAllusers ,getuserbyid,updateuser,deleteuser} = require('../controllers/SignupControls');

router.post('/signup', signup);
router.get('/signup', getAllusers)
router.get('/signup/:id',getuserbyid)
router.put('/signup/:id',updateuser)
router.delete('/signup/:id',deleteuser)



module.exports = router;