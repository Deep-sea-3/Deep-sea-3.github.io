<template>
    <div class="right-channel_left">
        <span class="channel-link bg-gray  change-color" v-for="item in channelLeftList" :key="item.id"
            :class="[isShow(item.id) ? 'd-none d-xxl-block' : '']">
            <a :href="baseUrl + item.id" target="_blank">{{ item.name }}</a>
        </span>
    </div>
</template>

<script>

export default {
    name: 'rightChannelLeft',
    data() {
        return {
            baseUrl: '/blank/',
            channelLeftList: [
                {
                    id: 'fanju',
                    name: '番剧'
                },
                {
                    id: 'guochuang',
                    name: '国创'
                },
                {
                    id: 'variety',
                    name: '综艺'
                },
                {
                    id: 'animate',
                    name: '动画'
                },
                {
                    id: 'kichiku',
                    name: '鬼畜'
                },
                {
                    id: 'dance',
                    name: '舞蹈'
                },
                {
                    id: 'amusement',
                    name: '娱乐'
                },
                {
                    id: 'technology',
                    name: '科技'
                },
                {
                    id: 'food',
                    name: '美食'
                },
                {
                    id: 'car',
                    name: '汽车'
                },
                {
                    id: 'sport',
                    name: '运动'
                },
                {
                    id: 'movie',
                    name: '电影'
                },
                {
                    id: 'TVplays',
                    name: '电视'
                },
                {
                    id: 'documentary',
                    name: '纪录'
                },
                {
                    id: 'game',
                    name: '游戏'
                },
                {
                    id: 'music',
                    name: '音乐'
                },
                {
                    id: 'television',
                    name: '影视'
                },
                {
                    id: 'knowledge',
                    name: '知识'
                },
                {
                    id: 'inquire',
                    name: '咨讯'
                },
                {
                    id: 'live',
                    name: '生活'
                },
                {
                    id: 'fashion',
                    name: '时尚'
                },
                {
                    id: 'more',
                    name: '更多'
                },
            ]
        }
    },
    computed: {
        isShow() {
            return function (id) {
                let arr = ["car", "food", "live", "fashion"]
                return arr.includes(id)
            }
        }
    }
}
</script>

<style scoped>
.right-channel_left {
    flex: 1;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 10px
}

.channel-link {
    height: 26px;
    line-height: 26px;
    text-align: center;
    border: 1px solid #F1F2F3;
    border-radius: 6px;
}
</style>