import Express, {Router} from "express";
import { 
    controllerform, 
    controllerSignup, 
    controllerSignin, 
    controllergetUsers, 
    controllerGetCustomers,
    controllerGetpendingCustomers,
    controllerCustomerStatus
} from "../controller/formcontroller.js";
// const multer = require('multer');
import multer from "multer";
import Path from "path";
const router = Express.Router();


const imageconfig = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"./uploads");
    },
    filename:(req,file,callback)=>{
        callback(null, file.fieldname+`-`+ Date.now()+ Path.extname(file.originalname));
    }
})


const upload = multer({
    storage:imageconfig
})



// router.post('/add',upload.single("propertyImg") ,controllerform)
router.post('/form',upload.fields([ {name : 'propertyImg' }, {name : 'propertyVideo' }, {name : 'propertypdf' } ]) ,controllerform)
router.post('/signup',controllerSignup);
router.post('/login',controllerSignin);
router.get('/Dashboard',controllergetUsers);
router.get('/Customers',controllerGetCustomers);
router.get('/pendingCustomers',controllerGetpendingCustomers);
router.put('/statuschange',controllerCustomerStatus);
 
export default router;