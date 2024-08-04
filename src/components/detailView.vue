<template>
    <div class="biliMainHeader">
        <detailNav></detailNav>
    </div>
    <div class="video-container">
        <leftContainer></leftContainer>
        <rightContainer></rightContainer>
    </div>
</template>


<script>
import detailNav from '../components/detailComponent/detailNav.vue'
import leftContainer from './detailComponent/leftContainer.vue'
import rightContainer from './detailComponent/rightContainer.vue'
import { computed } from 'vue'
import io from '../../node_modules/socket.io/client-dist/socket.io.js'

export default {
    name: 'detailView',
    components: {
        detailNav,
        leftContainer,
        rightContainer
    },
    data() {
        return {
            detailList: [],
            numClients: 0,
            isInit: false
        }
    },
    methods: {
        async getDetail() {
            this.loadingDetailList = true
            let res = await this.$util.get('getDetail/' + this.$route.params.id)
            if (res.code != 10000) return
            this.detailList = res.data
            if (!this.isInit) {
                this.initSocket()
            }
        },
        initSocket() {
            this.isInit = true
            //连接websocket后端服务器
            this.socket = io('http://localhost:3001');
            this.socket.on('connect', () => {
                console.log('Connected to server');
            });
            this.socket.on('disconnect', () => {
                console.log('Connected to server');
            });
            // 加入房间
            this.socket.emit('join room', this.detailList.id);
            // 窗口关闭则退出房间
            window.addEventListener('beforeunload', () => {
                this.socket.emit('leave room', this.detailList.id);
            });
            // 接收房间人数信息
            this.socket.on('room info', (numClients) => {
                console.log('room info', numClients);
                this.numClients = numClients
            });

        },
        // leaveHome() {
        //     this.socket.emit('leave room', this.detailList.id);
        // }
    },
    provide() {
        return {
            detailList: computed(() => this.detailList),
            numClients: computed(() => this.numClients)
        }
    },
    created() {
        this.getDetail()
    },
    // beforeUnmount() {
    //     this.socket.emit('leave room', this.detailList.id);
    // }
}
</script>

<style scoped>
.biliMainHeader {
    height: 64px;
}

.video-container {
    max-width: 2540px;
    min-width: 1080px;
    margin: 0 auto;
    padding: 0 10px;
    display: flex;
    justify-content: center;
    position: relative;
    width: auto;
}
</style>