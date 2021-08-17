const { Router } = require('express')
const router = Router()

router.post('/', async(req,res)=>{
    try {
        const {login,password} = req.body
        if(login === 'emslat' && password === '11111'){
            res.json({response:'user'})
        }else if(login === 'admin' && password === '77777'){
            res.json({response:'admin'})
        }else{
            res.json({response:false})
        }
    } catch (e) {
        res.status(500).json({message:'Что-то пошло не так'})
    }
})

module.exports = router