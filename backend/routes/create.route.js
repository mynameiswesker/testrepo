const { Router } = require('express')
const router = Router()
const multer  = require('multer')
const path = require('path')
const crypto = require('crypto')
const GridFsStorage = require('multer-gridfs-storage')//для хранения в монгобд
const Grid = require('gridfs-stream')//для поучения файлов из монгобд
const config = require('config')
const mongoose = require('mongoose')
const Obj = require('../modules/obj')

//init stream

/* let gfs */

/* const conn = mongoose.createConnection(config.get('mongoUri'),{
  useNewUrlParser:true,
  useUnifiedTopology:true
}) */

/* conn.once('open', ()=> {
  gfs = Grid(conn.db, mongoose.mongo)
  gfs.collection('uploads')
}) */


//Create storage engine
/* const storage = new GridFsStorage({
  url: config.get('mongoUri'),
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads'
        };
        resolve(fileInfo);
      });
    });
  }
}) */

/* const upload = multer({ storage }) */

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})
 
let upload = multer({ storage: storage })

//POST array imgs and dataText
router.post('/array', upload.array('photos'), async(req,res)=>{

  const info_fro_osnova = JSON.parse(req.body.info_fro_osnova)//все заполненные поля с формы для 1 объекта
  const tehOsvid = JSON.parse(req.body.teh_osvidetelstvovanye)//массив из объектов для тех освидетельствования
  const prilo = JSON.parse(req.body.table_prilo)//массив из объектов приложения
  const privod = JSON.parse(req.body.privod)//массив из объектов привода
  const headerTehOsv = JSON.parse(req.body.header)//объект хедера
  const osnovnoe_el_oborud = JSON.parse(req.body.osnovnoe_el_oborud)//массив из объектов основного эл оборуд
  const vspomogatelnoe = JSON.parse(req.body.vspomogatelnoe)//массив из объектов вспомогательного эл оборуд
  const kabel = JSON.parse(req.body.kabel)//массив из объектов кабельных линий
  const svedeniya = JSON.parse(req.body.svedeniya)//массив из объектов
  const avar_remont = JSON.parse(req.body.avar_remont)//массив из объектов
  const prov_zazeml = JSON.parse(req.body.prov_zazeml)//массив из объектов
  const itog_osmotra_zaz = JSON.parse(req.body.itog_osmotra_zaz)//массив из объектов

  const imgs = req.files//imgs все загруженные фото с формы для  объекта

  const type_object = info_fro_osnova.type_object
  const station = info_fro_osnova.station
  const number_dist = info_fro_osnova.number_dist
  const name_object = info_fro_osnova.name_object

  const date_create = headerTehOsv.date_create
  const project = headerTehOsv.project
  const date_of_approval = headerTehOsv.date_of_approval
  const standard_service_life = headerTehOsv.standard_service_life
  const inv_number = headerTehOsv.inv_number

//Проверка на заполнение данными
/*   if(!req.files || req.files.length === 0){
    res.status(500).send({error:'Не выбрано ни одной картинки'})
  }

  if(!dataForm.inv_number){
    res.status(500).send({error:'Не указан инвентарный номер'})
  } */
////////////////////////////////////

  //const arr_imgs_filenames = imgs.map(img=> img.filename)//filenames всех картинок для этого объекта

//Сохраняем новый объект
  const createdObj = new Obj({
    photos_engine_filenames:  /* arr_imgs_filenames */[],
    teh_osvidetelstvovanye: tehOsvid,
    prilo: prilo,
    privod: privod,
    osnovnoe_el_oborud: osnovnoe_el_oborud,
    vspomogatelnoe: vspomogatelnoe,
    kabel:kabel,
    svedeniya:svedeniya,
    avar_remont:avar_remont,
    prov_zazeml:prov_zazeml,
    itog_osmotra_zaz:itog_osmotra_zaz,

    type_object: type_object,//тип объекта+
    station: station,//станция метро+
    number_dist: number_dist,//номер дистанции+
    name_object: name_object,//название объекта+
    date_create: date_create,//год постройки+
    project: project,//проект+
    date_of_approval: date_of_approval,//дата эксплуатации
    standard_service_life: standard_service_life,//нормативный срок службы
    inv_number: inv_number//инвентарный номер
  })

  await createdObj.save()

  res.json({message:'Данные сохранены в БД'})
  
})

//GET objects
router.get('/getobj', async(req,res)=>{
  const getObjs = await Obj.find({})
  res.json(getObjs)
})

//GET img for 1 obj
/* router.post('/getimg', (req,res)=>{

  const name_file_from_frontend = req.body.name//имя файла

  const arr = []//фото для 1 объекта

  //получаем все фото в files
  gfs.files.findOne({filename: name_file_from_frontend}, (err,file) =>{

    if(!file){
      return res.status(404).json({
        err:'no files exist'
      })
    }

    const readstream = gfs.createReadStream(file.filename)
    readstream.pipe(res)
  })

}) */

//GET object
//на фронет урл : /dist1 - получаем все объекты с данным номером дистанции для отображения списка доступных станций
router.get('/get_station:id', async(req,res)=>{
  const id = req.params.id // номер дистанции
  const getObjs = await Obj.find({number_dist:id})//ищем все объекты с id дистанции
  res.json(getObjs)
})

//GET object
//на фронет урл : /dist1/station - получаем все объекты с данным на текущей станции
router.get('/get_objects:station', async(req,res)=>{
  const statio = req.params.station // номер дистанции
  const getObjs = await Obj.find({station:statio})//ищем все объекты с данной станции
  res.json(getObjs)
})

//GET object
//на фронет урл : /dist1 - получаем 1 объекта по имени
router.get('/get_object:name', async(req,res)=>{
  const name = req.params.name // название установки
  const getObj = await Obj.findOne({name_object:name})//ищем установку по имени
  res.json(getObj)
})

module.exports = router