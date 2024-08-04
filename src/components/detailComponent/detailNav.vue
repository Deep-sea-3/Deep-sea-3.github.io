<template>
    <div class="detail-nav-header">
        <leftDetailNav></leftDetailNav>
        <searchBar></searchBar>
        <rightNav></rightNav>
    </div>
</template>

<script>
import leftDetailNav from './leftDetailNav.vue';
import rightNav from '../nav/rightNav.vue'
import searchBar from '../nav/searchBar.vue'

export default {
    name: 'homeNav',
    components: {
        leftDetailNav,
        rightNav,
        searchBar
    }
}
</script>

<style>
.left-entry,
.right-entry,
.detail-nav-header {
    display: flex;
    align-items: center;
}
</style>

<style scoped>
.detail-nav-header {
    height: 64px;
    padding: 0 24px;
    position: fixed;
    z-index: 6;
    width: 100%;
    color: #18191c;
    font-size: 14px;
    box-shadow: 0 2px 4px #00000014;
    background-color: #fff;
    max-width: 2560px;
    min-width: 952px;
}

.detail-nav-header .right-entry-text {
    color: #61666D;
    font-size: 13px;
}
</style>