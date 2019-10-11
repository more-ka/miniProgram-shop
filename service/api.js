import service from './service.js'

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