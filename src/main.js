import { createApp } from 'vue'
import store from './store'
import '../node_modules/hidpi-canvas/dist/hidpi-canvas.min.js'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import mitt from 'mitt'

// import 'view-ui-plus/dist/styles/viewuiplus.css';
// import { Carousel, CarouselItem } from 'view-ui-plus';
import App from './App.vue'
import './assets/css/base.css'
import './assets/css/util.css'
import router from './router'
import util from './util'
import moment from 'moment'

const app = createApp(App)
app.config.globalProperties.$store = store
app.config.globalProperties.$util = util
app.config.globalProperties.$bus = new mitt()
app.config.globalProperties.$moment = moment
app.use(router)
app.mount('#app')
