<template>
    <detailNav v-show="!isShowHomeNav"></detailNav>
    <homeHeaderBanner>
        <homeNav></homeNav>
    </homeHeaderBanner>
    <homeChannel></homeChannel>
    <homeRecommend></homeRecommend>
</template>

<script>
import homeNav from './homeComponent/homeNav';
import homeHeaderBanner from './homeComponent/homeHeaderBanner.vue'
import homeChannel from './homeComponent/homeChannel.vue';
import homeRecommend from './homeComponent/homeRecommend.vue';
import detailNav from './detailComponent/detailNav.vue';
import lodash from 'lodash'

export default {
    name: 'homeView',
    components: {
        homeNav,
        homeHeaderBanner,
        homeChannel,
        homeRecommend,
        detailNav
    },
    data() {
        return {
            isShowHomeNav: true,
            lastFlag: true
        }
    },
    methods: {
        navChange() {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
            if (scrollTop > 35) {
                this.isShowHomeNav = false
            } else {
                this.isShowHomeNav = true
            }
            if (this.isShowHomeNav != this.lastFlag) {
                this.$emit('navChange', this.isShowHomeNav)
            }
            this.lastFlag = this.isShowHomeNav
        }
    },
    created() {
        this.throttled_navChange = lodash.throttle(this.navChange, 500)
        window.addEventListener('scroll', this.throttled_navChange);
    }
}
</script>

<style scoped></style>