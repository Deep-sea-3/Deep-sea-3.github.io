<template>
    <div class="bpx-player-video-area" ref="videoArea">
        <div class="bpx-player-video-perch" @click="changePlay">
            <video ref="video" :muted="isMuted" crossorigin="anonymous" preload="auto"></video>
        </div>
        <canvas ref="canvas" id="canvas" :style="{ width: w + 'px', height: h + 'px' }">
            您的浏览器不支持canvas标签。
        </canvas>
        <div class="hover-box">
            <videoTopWrap :isFull="isFull"></videoTopWrap>
            <videoControlWrap :duration="duration" :currentTime="currentTime" :isPlay="isPlay" :isFullWeb="isFullWeb"
                :isFull="isFull" :bufferedTime="bufferedTime">
            </videoControlWrap>
        </div>
        <videoStateWrap :isPlay="isPlay"></videoStateWrap>
    </div>
</template>

<script>
import videoTopWrap from './videoTopWrap.vue'
import videoStateWrap from './videoStateWrap.vue'
import videoControlWrap from './videoControlWrap.vue'
import Hls from 'hls.js';


export default {
    name: 'videoArea',
    components: {
        videoTopWrap,
        videoControlWrap,
        videoStateWrap
    },
    inject: [
        "detailList",
    ],
    data() {
        return {
            // link: 'http://vali-g1.cp31.ott.cibntv.net/youku/697446c85e14171c789dd2e19/030008010063EEE4E2010BE212B6CF96302AC3-4F0C-4E1C-85EC-C1951BACD94D.mp4?sid=167929725600010003194_00_B18920f2dde5e01b66b0d894b111478cb&sign=1ac94b68c382fdc16544442e8a85dd94&ctype=50&si=183&psid=85ac4a01039bd75c1105687b9bec8c1b41346',
            isPlay: false,
            isFullWeb: false,
            isFull: false,
            isMuted: this.$store.state.videoInfo.isMuted,
            // 之后替换为服务器提供的url
            video_url: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
            duration: 0,
            currentTime: 0,
            bufferedTime: 0,
            barrageList: [],
            lastText: [null, null, null, null],
            w: 0,
            h: 0,
            dmList: []
        }
    },
    methods: {
        changePlay() {
            this.isPlay = !this.isPlay
            if (this.isPlay) {
                this.$refs.video.play()
                this.draw()
            } else {
                this.$refs.video.pause()
                cancelAnimationFrame(this.dmMove);
            }
        },
        changeVol(volNum) {
            this.$refs.video.volume = volNum
        },
        changeRate(rate) {
            this.$refs.video.playbackRate = rate
        },
        changeQuality(quality) {
            // 会卡住，触发立即质量级别切换到新的质量级别，将中止当前片段请求
            // this.hls.currentLevel = quality
            // 很久，设置下一个加载片段的质量级别
            // this.hls.loadLevel = quality
            // 触发下一个片段的质量级别切换。这最终可能会刷新已经缓冲的下一个片段
            this.hls.nextLevel = quality
        },
        changeCurrentTime(currentTime) {
            this.$refs.video.currentTime = currentTime
        },
        changeFull() {
            this.isFull = !this.isFull
            if (this.isFull) {
                if (this.$refs.videoArea.requestFullscreen) {
                    this.$refs.videoArea.requestFullscreen();
                } else if (this.$refs.videoArea.msRequestFullscreen) {
                    this.$refs.videoArea.msRequestFullscreen();
                } else if (this.$refs.videoArea.mozRequestFullScreen) {
                    this.$refs.videoArea.mozRequestFullScreen();
                } else if (this.$refs.videoArea.webkitRequestFullscreen) {
                    this.$refs.videoArea.webkitRequestFullscreen();
                }
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                }
            }
        },
        initVideo() {
            if (Hls.isSupported()) {
                this.hls = new Hls()
                this.hls.loadSource(this.video_url)
                this.hls.attachMedia(this.$refs.video)
                this.hls.on(Hls.Events.BUFFER_APPENDED, () => {
                    this.duration = this.$refs.video.duration
                });
                this.hls.on(Hls.Events.LEVEL_SWITCHED, function () {
                    console.log('Video quality level switched successfully!');
                });
                this.hls.on(Hls.Events.ERROR, function (event, data) {
                    console.log('error');
                    console.log(data);
                });
            } else if (this.$refs.video.canPlayType('application/vnd.apple.mpegurl')) {
                this.$refs.video.src = this.video_url;
            } else {
                // 兼容性处理
                console.log('请升级浏览器')
            }
        },
        getTime() {
            this.$refs.video.addEventListener('timeupdate', () => {
                this.currentTime = this.$refs.video.currentTime
                // 发送弹幕
                const currentTimeNum = Math.floor(this.currentTime)
                if (currentTimeNum == this.lastTime) {
                    return
                }
                this.lastTime = currentTimeNum
                let i = 0
                while (this.dmList[i] && this.dmList[i].time <= currentTimeNum) {
                    if (this.dmList[i].time == currentTimeNum) {
                        this.shoot(this.dmList[i].talk)
                    }
                    i++
                }
            })
            this.$refs.video.addEventListener('progress', () => {
                this.bufferedTime = this.$refs.video.buffered.end(0) - this.$refs.video.buffered.start(0)
            })
        },
        async shoot(text) {
            // 1~4的随机整数
            const rNum = Math.floor(Math.random() * 4 + 1)
            const top = rNum * 10
            const dmWidth = this.ctx.measureText(text).width
            let left
            if (this.lastText[rNum]) {
                left = Math.max(this.w, this.lastText[rNum].left + this.lastText[rNum].dmWidth + 10)
            } else {
                left = this.w
            }
            const barrage = {
                text: text,
                top: top,
                left: left,
                dmWidth: dmWidth
            }
            this.lastText[rNum] = barrage
            this.barrageList.push(barrage)
        },
        draw() {
            if (this.barrageList.length > 0) {
                this.ctx.clearRect(0, 0, this.w, this.h)
                for (let i = 0; i < this.barrageList.length; i++) {
                    const item = this.barrageList[i]
                    if (item.left + item.dmWidth <= 0) {
                        this.barrageList.splice(i, 1);
                        i--;
                        continue;
                    }
                    item.left -= this.offset;
                    this.ctx.fillStyle = "#fff"
                    this.ctx.fillText(item.text, item.left, item.top);
                }

            }
            this.dmMove = requestAnimationFrame(this.draw.bind(this));
        },
        async addDanmaku(text) {
            // 提交弹幕到数据库
            let res = await this.$util.post('users/addDanmaku', { video_id: this.$route.params.id, user_id: this.$store.state.userInfo.id, time: this.currentTime, talk: text })
            // token过期，重新登录
            if (res.code == 401) {
                this.$store.commit('logout')
                this.$store.commit('changeLogView')
                return
            }
            if (res.code != 10000) return
            this.getDanmaku()
            this.shoot(text)
        },
        async getDanmaku() {
            let res
            // 获取弹幕数
            res = await this.$util.get('getDanmakuByvideo/' + this.$route.params.id)
            if (res.code != 10000) return
            this.danmakuChange = this.$util.numChange(res.data.result.count)
            //获取弹幕
            this.dmList = res.data.result.rows
        },
        initCanvas() {
            const rect = this.$refs.video.getBoundingClientRect();
            this.w = rect.right - rect.left;
            this.h = rect.bottom - rect.top;
            this.ctx = this.$refs.canvas.getContext("2d")
            // 弹幕字体大小
            this.ctx.font = "8px Microsoft YaHei"
            this.ctx.shadowOffsetX = 1;
            this.ctx.shadowOffsetY = 1;
            this.ctx.shadowBlur = 0;
            this.ctx.shadowColor = '#000';
            //弹幕滚动速度
            this.offset = 0.5
            if (this.isPlay) {
                this.draw()
            }
            // 订阅
            this.$bus.on('addDm', async (text) => {
                this.addDanmaku(text)
            })
        }
    },
    mounted() {
        this.getDanmaku()
        this.getTime()
        this.initCanvas()
    }
}
</script>


<style scoped>
#canvas {
    position: absolute;
    top: 0;
    left: 0;
}

.bpx-player-video-area {
    flex: 1;
    background-color: #000;
    position: relative;
    height: 100%;
    width: 100%;
}

.bpx-player-video-perch {
    position: relative;
    height: 100%;
    width: 100%;
    /* visibility: hidden; */
}

.bpx-player-video-perch video {
    height: 100%;
    width: 100%;
    /* object-fit: fill; */
    /* position: absolute;
    top: 0;
    left: 0; */
}

.hover-box {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    visibility: hidden;
    transition: all .2s;
}

.bpx-player-video-area:hover .hover-box {
    visibility: visible;
}
</style>
