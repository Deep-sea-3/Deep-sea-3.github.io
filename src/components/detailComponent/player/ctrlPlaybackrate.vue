<template>
    <div class="bpx-player-ctrl-btn bpx-player-ctrl-playbackrate">
        <div class="bpx-player-ctrl-playbackrate-result" @mouseenter="showMenu">{{ rateText }}</div>
        <div class="bpx-player-ctrl-playbackrate-wrapper" @mouseleave="hideMenu" v-show="isShow">
            <ul class="bpx-player-ctrl-playbackrate-menu" @click="changeRate">
                <li class="bpx-player-ctrl-playbackrate-menu-item change-color" data-rate="2"
                    :class="currentRate == 2 ? 'bpx-state-active' : ''">2.0x
                </li>
                <li class="bpx-player-ctrl-playbackrate-menu-item change-color" data-rate="1.5"
                    :class="currentRate == 1.5 ? 'bpx-state-active' : ''">
                    1.5x</li>
                <li class="bpx-player-ctrl-playbackrate-menu-item change-color" data-rate="1.25"
                    :class="currentRate == 1.25 ? 'bpx-state-active' : ''">1.25x</li>
                <li class="bpx-player-ctrl-playbackrate-menu-item change-color" data-rate="1"
                    :class="currentRate == 1 ? 'bpx-state-active' : ''">1.0x
                </li>
                <li class="bpx-player-ctrl-playbackrate-menu-item change-color" data-rate="0.75"
                    :class="currentRate == 0.75 ? 'bpx-state-active' : ''">0.75x</li>
                <li class="bpx-player-ctrl-playbackrate-menu-item change-color" data-rate="0.5"
                    :class="currentRate == 0.5 ? 'bpx-state-active' : ''">
                    0.5x</li>
            </ul>
            <div class="wrapper"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ctrlPlaybackrate',
    data() {
        return {
            currentRate: null,
            isShow: false,
        }
    },
    computed: {
        rateText() {
            let value
            switch (this.currentRate) {
                case 0.5:
                    value = '0.5x'
                    break
                case 0.75:
                    value = '0.75x'
                    break
                case 1:
                    value = '1.0x'
                    break
                case 1.25:
                    value = '1.25x'
                    break
                case 1.5:
                    value = '1.5x'
                    break
                case 2:
                    value = '2.0x'
                    break
                default:
                    break
            }
            return value
        }
    },
    methods: {
        changeRate(e) {
            const target = e.target
            if (target.nodeName != 'LI') return
            this.currentRate = +target.dataset.rate
            this.$store.commit('setRate', this.currentRate)
            this.$parent.$parent.changeRate(this.currentRate)
        },
        initRate() {
            this.currentRate = this.$store.state.videoInfo.currentRate
            this.$parent.$parent.changeRate(this.currentRate)
        },
        showMenu() {
            this.isShow = true;
        },
        hideMenu() {
            this.isShow = false;
        },
    },
    mounted() {
        this.initRate()
    }
}
</script>

<style scoped>
.bpx-player-ctrl-playbackrate-wrapper {
    position: absolute;
    transform: translateX(-50%);
    width: 70px;
    font-size: 14px;
    font-weight: normal;
    bottom: 0;
    left: 50%;
}

.bpx-player-ctrl-playbackrate-menu {
    background-color: hsla(0, 0%, 8%, .9);
    border-radius: 2px;
    text-align: center;
}


.bpx-player-ctrl-playbackrate-menu-item {
    cursor: pointer;
    height: 36px;
    line-height: 36px;
    position: relative;
}

.bpx-player-ctrl-playbackrate-menu-item:hover {
    background-color: hsla(0, 0%, 100%, .1);
}
</style>

