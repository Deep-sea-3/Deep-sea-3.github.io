<template>
    <div class="bpx-player-ctrl-btn bpx-player-ctrl-volume" ref="volumeCtrl">
        <span class="bpx-common-svg-icon" @mousedown="changeMuted" @mouseenter="showMenu">
            <svg v-if="$store.state.videoInfo.isMuted" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                fill="currentColor" class="bi bi-volume-mute-fill" viewBox="0 0 16 16">
                <path
                    d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zm7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-volume-up-fill" viewBox="0 0 16 16">
                <path
                    d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z" />
                <path
                    d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z" />
                <path
                    d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z" />
            </svg>
        </span>
        <div class="bpx-player-ctrl-volume-wrapper" @mouseleave="hideMenu" v-show="isShow">
            <div class="bpx-player-ctrl-volume-box" ref="volumeBox" @click="volChanging">
                <div class="bpx-player-ctrl-volume-number">{{ currentVol }}</div>
                <div class="bpx-player-ctrl-volume-progress">
                    <div class="bui-area">
                        <div class="bui-track">
                            <div class="bui-bar-wrap" ref="volBar"></div>
                            <div class="bui-thumb" ref="volBtn" @mousedown="volChangeBegin"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="wrapper"></div>
        </div>

    </div>
</template>

<script>

export default {
    name: 'ctrlVolume',
    data() {
        return {
            currentVol: 0,
            isShow: false,
        }
    },
    methods: {
        volChangeBegin() {
            document.addEventListener('mousemove', this.volChanging)
            document.addEventListener('mouseup', this.volChangeEnd)
        },
        volChanging(e) {
            console.log(222);
            let value = this.currentVol * (this.barLength / 100) + this.getVolBtnY() + (this.volBtnHeight / 2) - e.pageY
            if (value <= 0) {
                value = 0
                if (!this.isMuted) {
                    this.$store.commit('changeMuted')
                    this.isMuted = true
                }
            } else {
                if (value > this.barLength) {
                    value = this.barLength
                }
                if (this.isMuted) {
                    this.$store.commit('changeMuted')
                    this.isMuted = false
                }
            }
            this.currentVol = Math.floor(value / (this.barLength / 100))
            this.$store.commit('setCurrentVol', this.currentVol)
            this.$parent.$parent.changeVol(this.currentVol / 100)
            this.$refs.volBtn.style.transform = "translateY(-" + value + "px)";
        },
        volChangeEnd() {
            document.removeEventListener('mousemove', this.volChanging)
            document.removeEventListener('mouseup', this.volChangeEnd)

        },
        getVolBtnY() {
            return this.$refs.volBtn.getBoundingClientRect().top + window.pageYOffset
        },
        changeMuted() {
            console.log(111);
            this.isMuted = !this.isMuted
            this.$store.commit('changeMuted')
            this.currentVol = this.isMuted ? 0 : this.defaultVol
            const transformNum = this.isMuted ? 0 : this.defaultVol * (this.barLength / 100)
            this.$store.commit('setCurrentVol', this.currentVol)
            this.$parent.$parent.changeVol(this.currentVol / 100)
            this.$refs.volBtn.style.transform = "translateY(-" + transformNum + "px)";

        },
        volumeBoxChange(isHidden) {
            if (isHidden) {
                this.$refs.volumeBox.style.visibility = 'hidden';
            } else {
                this.$refs.volumeBox.style.visibility = 'visible';
            }
        },
        init() {
            // 获取元按钮和拖动条高度
            this.volBtnHeight = this.$refs.volBtn.getBoundingClientRect().height
            this.volBarHeight = this.$refs.volBar.getBoundingClientRect().height
            this.barLength = this.volBarHeight - this.volBtnHeight
            // 获取音量情况
            this.currentVol = this.$store.state.videoInfo.currentVol
            this.isMuted = this.$store.state.videoInfo.isMuted
            this.defaultVol = this.$store.state.videoInfo.defaultVol
            // 更改音量
            this.$parent.$parent.changeVol(this.currentVol / 100)
        },
        showMenu() {
            this.isShow = true;
        },
        hideMenu() {
            this.isShow = false;
        },
    },
    mounted() {
        this.init()
    }
}
</script>

<style scoped>
.bpx-player-ctrl-volume-wrapper {
    left: 50%;
    margin-left: -16px;
    position: absolute;
    width: 32px;
    bottom: 0;
}

.bpx-player-ctrl-volume-box {
    background: hsla(0, 0%, 8%, .9);
    border-radius: 2px;
    height: 100px;

}

.bpx-player-ctrl-volume-number {
    color: #e5e9ef;
    font-size: 12px;
    height: 28px;
    line-height: 28px;
    margin-bottom: 2px;
    text-align: center;
    width: 100%;
}

.bpx-player-ctrl-volume-progress {
    height: 60px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    vertical-align: middle;
    align-items: center;
}

.bui-area {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}

.bui-track {
    height: 100%;
    width: 2px;
    display: flex;
    position: relative;
}

.bui-bar-wrap {
    background: #e7e7e7;
    border-radius: 1.5px;
    bottom: 0;
    left: 0;
    overflow: hidden;
    position: absolute;
    right: 0;
    top: 0;
}

.bui-thumb {
    bottom: 0;
    left: -5px;
    position: absolute;
    width: 12px;
    height: 12px;
    background-color: #00a1d6;
    border-radius: 50%;
}

/* .bpx-player-ctrl-volume:hover .bpx-player-ctrl-volume-box {
    visibility: visible;
} */
</style>