import router from './router'
import axios from 'axios'

const url = {
    load: 'https://images.weserv.nl/?url=',
    server: 'http://localhost:3001/',
}

function goBlank(id) {
    const url = '/blank/' + id
    const routeData = router.resolve({ path: url })
    window.open(routeData.href, '_blank')
}

function goDetail(id) {
    const url = '/detail/' + id
    const routeData = router.resolve({ path: url })
    window.open(routeData.href, '_blank')
}

function goUser(id) {
    const url = '/user/' + id
    const routeData = router.resolve({ path: url })
    window.open(routeData.href, '_blank')
}

const apiAxios = async (method, urls, params) => {
    //项目既定fapp
    let headers = { 'Content-Type': 'application/json' }
    //读取存储在localStorage中的token
    if (localStorage.getItem('userInfo')) {
        headers.token = JSON.parse(localStorage.getItem('userInfo')).token
    }
    return await new Promise((resolve => {
        axios({
            //如果缓存里有token则所有请求都包含其
            headers: headers,
            method: method,
            url: url.server + urls,
            //数据内容
            data: method === 'POST' ? params : null,
            params: method === 'GET' ? params : null
        }).then((res) => {
            // console.log(res.data)
            resolve(res.data)
        }).catch(e => {
            console.log(e)
        })
    }))
}

//get请求
const get = async (url, params) => {
    return await apiAxios('GET', url, params)
}
//post请求
const post = async (url, params) => {
    return await apiAxios('POST', url, params)
}

function numChange(num) {
    if (num >= 10000) {
        var n1 = Math.floor(num / 10000)
        var n2 = Math.floor((num % 10000) / 1000)
        if (n2 == 0) {
            return n1 + '万'
        } else {
            return n1 + '.' + n2 + '万'
        }
    } else {
        return num
    }
}

export default {
    url,
    goBlank,
    goDetail,
    goUser,
    get,
    post,
    numChange
}