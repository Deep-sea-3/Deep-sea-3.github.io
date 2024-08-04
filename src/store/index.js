import { createStore } from 'vuex'

export default createStore({
    state: {
        showLogView: false,
        userInfo: '',
        changeBig: null,
        videoInfo: {
            isMuted: true,
            currentVol: 0,
            defaultVol: 30,
            currentRate: 1,
            currentQuality: -1
        }
    },
    getters: {

    },
    mutations: {
        changeLogView(state) {
            state.showLogView = !state.showLogView
        },
        setUser(state, userInfo) {
            state.userInfo = userInfo
        },
        changeMuted(state) {
            state.videoInfo.isMuted = !state.videoInfo.isMuted
        },
        setCurrentVol(state, currentVol) {
            state.videoInfo.currentVol = currentVol
        },
        setRate(state, currentRate) {
            state.videoInfo.currentRate = currentRate
        },
        setQuality(state, currentQuality) {
            state.videoInfo.currentQuality = currentQuality
        },
        logout(state) {
            console.log('logout');
            state.userInfo = ''
            // 删除localStorage存储的信息
            localStorage.removeItem('userInfo')
            // changeBig: null
            state.changeBig = null
        }
    },
    actions: {},
    modules: {}
})