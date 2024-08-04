<template>
    <div class="homeRecommend" ref="homeRecommend">
        <rollBtn @click="getFirstVideo"></rollBtn>
        <div class="recommend-swipe-anchor">
            <div class="recommend-swipe-core">
                <div class="recommend-swipe-shim">
                    <div class="shim-card"></div>
                    <div class="shim-card"></div>
                    <videoCardSkeleton></videoCardSkeleton>
                    <videoCardSkeleton></videoCardSkeleton>
                </div>

                <div class="recommend-swipe-body">
                    <homeSwipe></homeSwipe>
                </div>
            </div>
        </div>
        <!-- 加载首屏的推荐视频 -->
        <div class="video-card" v-for="item in firstList" :key="item.id">
            <videoCardSkeleton class="hide"></videoCardSkeleton>
            <videoCardWrap :id="item.id" :title="item.title" :img="item.img" :nickname="item.nickname"
                :viewsChange="item.viewsChange" :danmakuCount="item.danmakuCount"></videoCardWrap>
        </div>
        <!-- 其余视频 -->
        <div class="video-card" v-for="item, index in recommendList" :key="index">
            <videoCardSkeleton :class="item.done ? 'hide' : ''"></videoCardSkeleton>
            <videoCardWrap v-if="item.done" :id="item.id" :title="item.title" :img="item.img" :nickname="item.nickname"
                :viewsChange="item.viewsChange" :danmakuCount="item.danmakuCount"></videoCardWrap>
        </div>

    </div>
</template>
<script>
import homeSwipe from './homeSwipe.vue';
import videoCardSkeleton from '../videoCard/videoCardSkeleton.vue';
import videoCardWrap from '../videoCard/videoCardWrap.vue';
import lodash from 'lodash'
import rollBtn from '../btn/rollBtn.vue';

export default {
    name: 'homeRecommend',
    components: {
        homeSwipe,
        videoCardSkeleton,
        videoCardWrap,
        rollBtn
    },
    emits: ['navChange'],
    data() {
        return {
            firstList: [],
            recommendList: [],
            isDone: true,
            isSmall: false,
            loadMore: 0,
        }
    },
    methods: {
        async getVideo(limit, isFirst = false) {
            const recommendListLen = this.recommendList.length
            const firstListLen = this.firstList.length
            let offset = recommendListLen + firstListLen + this.loadMore
            if (!isFirst) {
                offset = offset - limit
            }
            try {
                let res = await this.$util.get('getVideo', { offset: offset, limit: limit })
                if (res.code != 10000) return
                if (res.data.length < limit) {
                    // 没有视频数据，取消监听
                    console.log('取消监听');
                    window.removeEventListener('scroll', this.throttled_lazyLoading);
                    window.removeEventListener('resize', this.throttled_changeSmall);
                    return
                }
                if (isFirst) {
                    this.firstList = res.data
                } else {
                    this.recommendList.splice(recommendListLen - limit, limit, ...res.data)
                    for (let i = recommendListLen - 1; i >= recommendListLen - limit; i--) {
                        this.recommendList[i]['done'] = true
                    }
                    this.isDone = true
                }
            } catch (err) {
                console.log(err);
            }
        },
        changeSmall() {
            const screenWidth = window.outerWidth
            if (screenWidth >= 1400) {
                this.isSmall = false
            } else {
                this.isSmall = true
            }
        },
        // 加载首屏的推荐视频
        getFirstVideo(moreload = false) {
            if (this.isSmall) {
                if (moreload) {
                    this.loadMore += 8
                }
                this.getVideo(8, true)
            } else {
                if (moreload) {
                    this.loadMore += 11
                }
                this.getVideo(11, true)
            }
        },
        lazyLoading() {
            if (this.isDone) {
                const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
                const clientHeight = document.documentElement.clientHeight
                const scrollHeight = document.documentElement.scrollHeight
                const videoAll = this.$refs.homeRecommend.querySelectorAll('.video-card')
                if (videoAll.length <= 7) return
                const chaHeight = videoAll[6].offsetHeight * 2
                let queryNum
                if (scrollTop + clientHeight >= scrollHeight - chaHeight) {
                    this.isDone = false
                    // 计算要获取多少视频
                    const videoNum = videoAll.length
                    if (this.isSmall) {
                        const remainder = videoNum % 4
                        if (remainder == 0) {
                            queryNum = 12
                        } else {
                            queryNum = 12 - remainder
                        }
                    } else {
                        const remainder = (videoNum - 6) % 5
                        if (remainder == 0) {
                            queryNum = 15
                        } else {
                            queryNum = 20 - remainder
                        }
                    }
                    this.recommendList = this.recommendList.concat(new Array(queryNum).fill({ done: false }))
                    // 获取真实数据
                    this.getVideo(queryNum)
                }
            }
        },
    },
    created() {
        this.changeSmall()
        this.getFirstVideo()
        this.throttled_lazyLoading = lodash.throttle(this.lazyLoading, 500)
        this.throttled_changeSmall = lodash.throttle(this.changeSmall, 500)
    },
    mounted() {
        window.addEventListener('scroll', this.throttled_lazyLoading);
        window.addEventListener('resize', this.throttled_changeSmall);
    },

}
</script>

<style scoped>
.homeRecommend {
    /* position: relative; */
    display: grid;
    grid-gap: 20px;
    margin: 0 68px;
}

.recommend-swipe-anchor {
    position: relative;
    grid-column: 1/3;
    grid-row: 1/3;
}

.recommend-swipe-core {
    position: relative;
    width: 100%;
}

.recommend-swipe-shim {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(2, 1fr);
    visibility: hidden;
}

.shim-card {
    width: 100%;
    height: 0;
    padding-top: 56.25%
}

.recommend-swipe-body {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 6px;
    overflow: hidden;
}

.video-card {
    position: relative;
}
</style>


