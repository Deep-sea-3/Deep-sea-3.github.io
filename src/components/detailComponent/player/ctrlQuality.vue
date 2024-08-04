<template>
    <div class="bpx-player-ctrl-btn bpx-player-ctrl-quality" ref="ctrlBtn">
        <div class="bpx-player-ctrl-quality-result" @mouseenter="showMenu">{{ qualityText }}</div>
        <div class="bpx-player-ctrl-quality-wrapper" @mouseleave="hideMenu" v-show="isShow">
            <ul class="bpx-player-ctrl-quality-menu" ref="menu" @click="changeQuality">
                <li class="bpx-player-ctrl-quality-menu-item change-color" data-quality="4"
                    :class="currentQuality == 4 ? 'bpx-state-active' : ''">1080P高码率
                </li>
                <li class="bpx-player-ctrl-quality-menu-item change-color" data-quality="3"
                    :class="currentQuality == 3 ? 'bpx-state-active' : ''">1080P高清
                </li>
                <li class="bpx-player-ctrl-quality-menu-item change-color" data-quality="2"
                    :class="currentQuality == 2 ? 'bpx-state-active' : ''">720P高清
                </li>
                <li class="bpx-player-ctrl-quality-menu-item change-color" data-quality="1"
                    :class="currentQuality == 1 ? 'bpx-state-active' : ''">480P清晰
                </li>
                <li class="bpx-player-ctrl-quality-menu-item change-color" data-quality="0"
                    :class="currentQuality == 0 ? 'bpx-state-active' : ''">360P流畅
                </li>
                <li class="bpx-player-ctrl-quality-menu-item change-color" data-quality="-1"
                    :class="currentQuality == -1 ? 'bpx-state-active' : ''">自动
                </li>
            </ul>
            <div class="wrapper"></div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'ctrlQuality',
    data() {
        return {
            currentQuality: null,
            isShow: false,
        }
    },
    computed: {
        qualityText() {
            let value
            switch (this.currentQuality) {
                case -1:
                    value = '自动'
                    break
                case 0:
                    value = '360P流畅'
                    break
                case 1:
                    value = '480P清晰'
                    break
                case 2:
                    value = '720P高清'
                    break
                case 3:
                    value = '1080P高清'
                    break
                case 4:
                    value = '1080P高码率'
                    break
                default:
                    break
            }
            return value
        }
    },
    methods: {
        changeQuality(e) {
            const target = e.target
            if (target.nodeName != 'LI') return
            this.currentQuality = +target.dataset.quality
            this.$store.commit('setQuality', this.currentQuality)
            this.$parent.$parent.changeQuality(this.currentQuality)
        },
        initQuality() {
            this.currentQuality = this.$store.state.videoInfo.currentQuality
            this.$parent.$parent.changeQuality(this.currentQuality)
        },
        showMenu() {
            this.isShow = true;
        },
        hideMenu() {
            this.isShow = false;
        },
    },
    mounted() {
        this.$parent.$parent.initVideo()
        this.initQuality()
    }
}
</script>

<style scoped>
.bpx-player-ctrl-quality-wrapper {
    transform: translateX(-50%);
    width: 145px;
    font-size: 14px;
    font-weight: normal;
    bottom: 0;
    left: 50%;
    position: absolute;
}

.bpx-player-ctrl-quality {
    flex: none;
    margin-right: 10px;
}


.bpx-player-ctrl-quality-menu {
    background-color: hsla(0, 0%, 8%, .9);
    border-radius: 2px;
    text-align: center;

}

.bpx-player-ctrl-quality-menu-item {
    cursor: pointer;
    height: 36px;
    line-height: 36px;
    position: relative;
}

.bpx-player-ctrl-quality-menu-item:hover {
    background-color: hsla(0, 0%, 100%, .1);
}

.bpx-state-active {
    color: #00a1d6;
}
</style>

