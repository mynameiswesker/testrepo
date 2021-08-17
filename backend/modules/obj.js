const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
  photos_engine_filenames: [{type: String}],

  teh_osvidetelstvovanye:[{
    id:{type:Number},
    date:{type:String,default:'нет данных'},
    rezultat:{type:String,default:'нет данных'}
  }],

  prilo:[{
    id:Number,
    name_prilo:String,
    document:String,
    user:String
  }],

  privod:[{
      id:{type:Number},
      name_oborud:{type:String,default:'нет данных'},
      type_ogregata:{type:String,default:'нет данных'},
      type_engine:{type:String,default:'нет данных'},
      zavod_number:{type:String,default:'нет данных'},
      pasport_na_izdelie:{type:String,default:'нет данных'},
      power:{type:String,default:'нет данных'},
      chastota_vra:{type:String,default:'нет данных'},
      nominal_tok:{type:String,default:'нет данных'},
      proizvodit:{type:String,default:'нет данных'},
      ves:{type:String,default:'нет данных'},
      year_vipusk:{type:String,default:'нет данных'},
      year_vvoda:{type:String,default:'нет данных'},
      zavod_izgotov:{type:String,default:'нет данных'}
  }],

  osnovnoe_el_oborud:[{
      id:{type:Number},
      naznachenie:{type:String,default:'нет данных'},
      type:{type:String,default:'нет данных'},
      teh_pasport:{type:String,default:'нет данных'},
      year_vipusk:{type:String,default:'нет данных'}
  }],

  vspomogatelnoe:[{
      id:{type:Number},
      naznachenie:{type:String,default:'нет данных'},
      type:{type:String,default:'нет данных'},
      teh_pasport:{type:String,default:'нет данных'},
      year_vipusk:{type:String,default:'нет данных'}
  }],

  kabel:[{
    id:{type:Number},
    naznachenie:{type:String,default:'нет данных'},
    date_montazh:{type:String,default:'нет данных'},
    marka:{type:String,default:'нет данных'},
    napr:{type:String,default:'нет данных'},
    dlina:{type:String,default:'нет данных'},
    date_proverki:{type:String,default:'нет данных'}
}],

  svedeniya:[{
    id:{type:Number},
    date_start:{type:String,default:'нет данных'},
    type:{type:String,default:'нет данных'},
    person:{type:String,default:'нет данных'},
    date_end:{type:String,default:'нет данных'},
    otvetstv:{type:String,default:'нет данных'}
  }],

  avar_remont:[{
    id:{type:Number},
    date:{type:String,default:'нет данных'},
    number:{type:String,default:'нет данных'},
    text:{type:String,default:'нет данных'},
    person:{type:String,default:'нет данных'}
  }],

  prov_zazeml:[{
    id:{type:Number},
    name:{type:String,default:'нет данных'},
    current:{type:String,default:'нет данных'},
    text:{type:String,default:'нет данных'},
    type:{type:String,default:'нет данных'},
    date:{type:String,default:'нет данных'},
    number:{type:String,default:'нет данных'}
  }],

  itog_osmotra_zaz:[{
    id:{type:Number},
    name_project:{type:String,default:'нет данных'},
    project_org:{type:String,default:'нет данных'},
    number_chert:{type:String,default:'нет данных'},
    is_obriv:{type:String,default:'нет данных'},
    visual_osmotr_svarki:{type:String,default:'нет данных'},
    visual_osmotr_boltSoed:{type:String,default:'нет данных'},
    is_defects:{type:String,default:'нет данных'},
    itog:{type:String,default:'нет данных'}
  }],
  
  type_object:{type: String,default:'нет данных'},//тип объекта
  station:{type: String,default:'нет данных'},//станция метро
  number_dist:{type: String,default:'нет данных'},//номер дистанции
  name_object:{type: String,default:'нет данных'},//название объекта
  date_create:{type: String,default:'не указана дата'},//год постройки
  project:{type: String,default:'нет данных'},//проект
  date_of_approval:{type: String,default:'не указана дата'},//дата эксплуатации
  standard_service_life:{type: String,default:'нет данных'},//нормативный срок службы
  inv_number:{type: String,default:'нет данных'}//инвентарный номер

})

module.exports = model('Obj', schema)