import service from './service.js'
// 首页请求
export function getHotList(){
  return service({
    url: '/index/hotList'
  })
}

export function getBanner(){
  return service({
    url: '/index/banner'
  })
}
// 分类页请求
export function getCategoryTopList(){
  return service({
    url: '/category/topList'
  })
}

export function getCategoryRank(){
  return service({
    url: '/category/rank'
  })
}

export function getCategorySublist(){
  return service({
    url: '/category/subList'
  })
}

// 购物车请求
export function getCartList(){
  return service({
    url: '/cart/list'
  })
}



