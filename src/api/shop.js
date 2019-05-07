const _products = [
  {'id':1,'title': 'ipad 4 Mini', 'price': 500.01, 'inventoty':2},
  {'id':2,'title': 'H&M T-Shirt White', 'price': 10.99, 'inventoty':10},
  {'id':3,'title': 'CharLi XCX -Sucker CD', 'price': 19.99, 'inventoty':5},
]

export const getAllProducts = () => {
  return new Promise((resolve,reject) => {
    setTimeout(function (){
      resolve(_products)
    },100)
  })
}

// 模拟结账请求
export const buyProducts =(products,cb ,errCb) => {
  setTimeout(() => {
    Math.random() >0.5 ? cb(): errCb()
  },100)
}