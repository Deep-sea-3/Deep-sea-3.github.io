<template>
    <div class="bpx-player-progress-wrap">
        <div class="bpx-player-progress">
            <div class="bpx-player-progress-schedule" ref="progress" @click="changeCurrentTime">
                <div class="bpx-player-progress-schedule-buffer" :style="{ transform: 'scaleX(' + buffer + ')' }"></div>
                <div class="bpx-player-progress-schedule-current" :style="{ transform: 'scaleX(' + current + ')' }">
                </div>
            </div>
            <div class="bpx-player-progress-thumb" ref="thumb" @mousedown="currentTimeChangeBegin"
                :style="{ transform: 'translateX(' + moveLength + 'px)' }">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"
                    preserveAspectRatio="xMidYMid meet"
                    style="width: 100%;height: 100%;transform: translate3d(0px, 0px, 0px);">
                    <defs>
                        <clipPath id="__lottie_element_55">
                            <rect width="18" height="18" x="0" y="0"></rect>
                        </clipPath>
                    </defs>
                    <g clip-path="url(#__lottie_element_55)">
                        <g transform="matrix(0.9883429408073425,-0.7275781631469727,0.6775955557823181,0.920446515083313,7.3224687576293945,-0.7606706619262695)"
                            opacity="1" style="display: block;">
                            <g opacity="1"
                                transform="matrix(0.9937776327133179,-0.11138220876455307,0.11138220876455307,0.9937776327133179,-2.5239999294281006,1.3849999904632568)">
                                <path fill="rgb(51,51,51)" fill-opacity="1"
                                    d=" M0.75,-1.25 C0.75,-1.25 0.75,1.25 0.75,1.25 C0.75,1.663925051689148 0.4139249920845032,2 0,2 C0,2 0,2 0,2 C-0.4139249920845032,2 -0.75,1.663925051689148 -0.75,1.25 C-0.75,1.25 -0.75,-1.25 -0.75,-1.25 C-0.75,-1.663925051689148 -0.4139249920845032,-2 0,-2 C0,-2 0,-2 0,-2 C0.4139249920845032,-2 0.75,-1.663925051689148 0.75,-1.25z">
                                </path>
                            </g>
                        </g>
                        <g transform="matrix(1.1436611413955688,0.7535901665687561,-0.6317168474197388,0.9587040543556213,16.0070743560791,2.902894973754883)"
                            opacity="1" style="display: block;">
                            <g opacity="1"
                                transform="matrix(0.992861807346344,0.1192704513669014,-0.1192704513669014,0.992861807346344,-2.5239999294281006,1.3849999904632568)">
                                <path fill="rgb(51,51,51)" fill-opacity="1"
                                    d=" M0.75,-1.25 C0.75,-1.25 0.75,1.25 0.75,1.25 C0.75,1.663925051689148 0.4139249920845032,2 0,2 C0,2 0,2 0,2 C-0.4139249920845032,2 -0.75,1.663925051689148 -0.75,1.25 C-0.75,1.25 -0.75,-1.25 -0.75,-1.25 C-0.75,-1.663925051689148 -0.4139249920845032,-2 0,-2 C0,-2 0,-2 0,-2 C0.4139249920845032,-2 0.75,-1.663925051689148 0.75,-1.25z">
                                </path>
                            </g>
                        </g>
                        <g transform="matrix(1,0,0,1,8.890999794006348,8.406000137329102)" opacity="1"
                            style="display: block;">
                            <g opacity="1" transform="matrix(1,0,0,1,0.09099999815225601,1.1009999513626099)">
                                <path fill="rgb(255,255,255)" fill-opacity="1"
                                    d=" M7,-3 C7,-3 7,3 7,3 C7,4.379749774932861 5.879749774932861,5.5 4.5,5.5 C4.5,5.5 -4.5,5.5 -4.5,5.5 C-5.879749774932861,5.5 -7,4.379749774932861 -7,3 C-7,3 -7,-3 -7,-3 C-7,-4.379749774932861 -5.879749774932861,-5.5 -4.5,-5.5 C-4.5,-5.5 4.5,-5.5 4.5,-5.5 C5.879749774932861,-5.5 7,-4.379749774932861 7,-3z">
                                </path>
                                <path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4"
                                    stroke="rgb(51,51,51)" stroke-opacity="1" stroke-width="1.5"
                                    d=" M7,-3 C7,-3 7,3 7,3 C7,4.379749774932861 5.879749774932861,5.5 4.5,5.5 C4.5,5.5 -4.5,5.5 -4.5,5.5 C-5.879749774932861,5.5 -7,4.379749774932861 -7,3 C-7,3 -7,-3 -7,-3 C-7,-4.379749774932861 -5.879749774932861,-5.5 -4.5,-5.5 C-4.5,-5.5 4.5,-5.5 4.5,-5.5 C5.879749774932861,-5.5 7,-4.379749774932861 7,-3z">
                                </path>
                            </g>
                        </g>
                        <g transform="matrix(1,0,0,1,8.89900016784668,8.083999633789062)" opacity="1"
                            style="display: block;">
                            <g opacity="1" transform="matrix(1,0,0,1,-2.5239999294281006,1.3849999904632568)">
                                <path fill="rgb(51,51,51)" fill-opacity="1"
                                    d=" M0.875,-1.125 C0.875,-1.125 0.875,1.125 0.875,1.125 C0.875,1.607912540435791 0.48291251063346863,2 0,2 C0,2 0,2 0,2 C-0.48291251063346863,2 -0.875,1.607912540435791 -0.875,1.125 C-0.875,1.125 -0.875,-1.125 -0.875,-1.125 C-0.875,-1.607912540435791 -0.48291251063346863,-2 0,-2 C0,-2 0,-2 0,-2 C0.48291251063346863,-2 0.875,-1.607912540435791 0.875,-1.125z">
                                </path>
                            </g>
                        </g>
                        <g transform="matrix(1,0,0,1,14.008999824523926,8.083999633789062)" opacity="1"
                            style="display: block;">
                            <g opacity="1" transform="matrix(1,0,0,1,-2.5239999294281006,1.3849999904632568)">
                                <path fill="rgb(51,51,51)" fill-opacity="1"
                                    d=" M0.8999999761581421,-1.100000023841858 C0.8999999761581421,-1.100000023841858 0.8999999761581421,1.100000023841858 0.8999999761581421,1.100000023841858 C0.8999999761581421,1.596709966659546 0.4967099726200104,2 0,2 C0,2 0,2 0,2 C-0.4967099726200104,2 -0.8999999761581421,1.596709966659546 -0.8999999761581421,1.100000023841858 C-0.8999999761581421,1.100000023841858 -0.8999999761581421,-1.100000023841858 -0.8999999761581421,-1.100000023841858 C-0.8999999761581421,-1.596709966659546 -0.4967099726200104,-2 0,-2 C0,-2 0,-2 0,-2 C0.4967099726200104,-2 0.8999999761581421,-1.596709966659546 0.8999999761581421,-1.100000023841858z">
                                </path>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'progressWrap',
    props: [
        "duration",
        "currentTime",
        "bufferedTime"
    ],
    data() {
        return {
            progressWidth: 0,
            thumbWidth: 0,
            maxLen: 0
        }
    },
    computed: {
        current() {
            return this.currentTime / this.duration
        },
        buffer() {
            return this.bufferedTime / this.duration
        },
        moveLength() {
            const len = this.progressWidth * this.current - this.thumbWidth / 2
            return this.limitMinMax(len)
        }
    },
    methods: {
        limitMinMax(len) {
            if (len < 0) {
                return 0
            } else if (len > this.maxLen) {
                return this.maxLen
            } else {
                return len
            }
        },
        getProgressX() {
            return this.$refs.progress.getBoundingClientRect().left + window.pageXOffset
        },
        changeCurrentTime(e) {
            const value = (e.pageX - this.getProgressX()) * this.duration / this.progressWidth
            this.$parent.$parent.changeCurrentTime(value)
        },
        currentTimeChangeBegin() {
            document.addEventListener('mousemove', this.currentTimeChanging)
            document.addEventListener('mouseup', this.currentTimeChangeEnd)
        },
        currentTimeChanging(e) {
            e.preventDefault()
            this.changeCurrentTime(e)
        },
        currentTimeChangeEnd() {
            document.removeEventListener('mousemove', this.currentTimeChanging)
            document.removeEventListener('mouseup', this.currentTimeChangeEnd)
        }
    },
    mounted() {
        this.progressWidth = this.$refs.progress.getBoundingClientRect().width
        this.thumbWidth = this.$refs.thumb.getBoundingClientRect().width
        this.maxLen = this.progressWidth - this.thumbWidth
    }
}
</script>

<style scoped>
.bpx-player-progress-wrap {
    align-items: flex-end;
    cursor: pointer;
    display: flex;
    height: 10px;
    padding-bottom: 6px;
}

.bpx-player-progress {
    display: flex;
    width: 100%;
    align-items: center;
    height: 4px;
    position: relative;
}

.bpx-player-progress-schedule {
    background-color: hsla(0, 0%, 100%, .2);
    border-radius: 1.5px;
    bottom: 0;
    left: 0;
    overflow: hidden;
    position: absolute;
    right: 0;
    top: 0;
}

.bpx-player-progress-schedule-buffer,
.bpx-player-progress-schedule-current {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transform: scaleX(0);
    transform-origin: 0 0;
}

.bpx-player-progress-schedule-buffer {
    background-color: hsla(0, 0%, 100%, .3);
}

.bpx-player-progress-schedule-current {
    background-color: #00a1d6;
}

.bpx-player-progress-thumb {
    height: 20px;
    width: 20px;
    line-height: 12px;
    cursor: pointer;
}

.bpx-player-progress-thumb svg {
    height: 100%;
    width: 100%;
}
</style>