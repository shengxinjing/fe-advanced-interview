import {pinyin} from 'pinyin'

let fruit = `苹果,梨,葡萄,提子,枣,柑橘,西柚,
桃,西瓜,杏,甜瓜,香瓜,荔枝,甘蔗,柿,柠檬,香蕉,芒果,菠萝,哈密瓜,李子,
石榴,枸杞,山楂,椰子,桑葚,草莓,木瓜,龙眼,
枇杷,山竹,红毛丹,无花果,杨桃,猕猴桃,杨梅,蓝莓,
西梅,释迦,百花果,樱桃,榴莲,火龙果,菠萝蜜,百香果,罗汉果,莲雾
`
let vegetable = `
菠菜,韭菜,花菜,西兰花,白菜,芹菜,辣椒,西芹,
木耳,蒜苔,油菜,生菜,蒜苗,茼蒿,芥菜,油菜
紫甘蓝,娃娃菜,空心菜,
香菇,草菇,平菇,金针菇,杏鲍菇,
冬瓜,南瓜,黄瓜,丝瓜,苦瓜,
大葱,生姜,洋葱,山药,芋头,魔芋,红薯,土豆,莲藕,胡萝卜,萝卜,
银耳,玉米,芦笋,竹笋,茴香,茄子,番茄,豌豆芽
`
let animal = `
熊猫,大象,豹子,老虎,猫头鹰,孔雀,羊驼,山羊,河马,牛,斑马,猴子,
熊,老鹰,骆驼,狮子,龟,兔子,考拉,袋鼠,犀牛,蜥蜴,长尾猴,猩猩,金丝猴,
长颈鹿,梅花鹿,马,小鹿,羚羊,海豹,海鸥,海象,海狮,响尾蛇
`
let obj = {}
function parse(str, name) {
  let ret = [...new Set(str.replace(/\n/g, '').split(','))]
  ret = ret.forEach((item) => {
    let pin = pinyin(item, {
      style: pinyin.STYLE_NORMAL, // 设置拼音风格
    })
    let p = pin[0][0]
    if (p in obj) {
      ( obj[p][name] || (obj[p][name]=[]) ).push(item)
    } else {
      obj[p] = { [name]: [item] }
    }
  })
}

parse(animal, '动物园')
parse(vegetable, '植物园')
parse(fruit, '果园')
Object.keys(obj).forEach((key) => {
  let item = obj[key]
  if (Object.keys(item).length === 3) {
    //三个园都有的
    console.log(key, '开头的', item)
  }
})
console.log('--------------------')

// console.log(pinyin("犀牛", {
//   style: pinyin.STYLE_NORMAL, // 设置拼音风格
// }));
