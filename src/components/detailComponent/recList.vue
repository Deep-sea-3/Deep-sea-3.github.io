<template>
    <div class="rec-list" v-for="item in recommendList" :key="item.id">
        <videoPageCard :id="item.id" :title="item.title" :img="item.img" :up="item.up" :nickname="item.nickname"
            :viewsChange="item.viewsChange" :commentCount="item.commentCount"></videoPageCard>
    </div>
</template>

<script>
import videoPageCard from '../videoCard/videoPageCard.vue'
export default {
    name: 'recList',
    components: {
        videoPageCard
    },
    data() {
        return {
            recommendList: []
        }
    },
    methods: {
        async getRecommend() {
            let res
            // 服务器没写推荐视频接口，用getVideo代替
            res = await this.$util.get('getVideo', { limit: 10 })
            if (res.code != 10000) return
            this.recommendList = res.data
            //删除自己本身
            let num = this.recommendList.findIndex(item => item.id == this.$route.params.id)
            this.recommendList.splice(num, 1)
            // console.log(this.recommendList);
        },
    },
    created() {
        this.getRecommend()
    }
}
</script>

<style scoped>
.rec-list {
    margin-top: 18px;
    width: 350px;
}
</style>
