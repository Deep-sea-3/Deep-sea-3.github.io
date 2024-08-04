<template>
    <div class="home-nav-header">
        <leftHomeNav></leftHomeNav>
        <searchBar></searchBar>
        <rightNav></rightNav>
    </div>
</template>

<script>
import leftHomeNav from './leftHomeNav';
import rightNav from '../nav/rightNav.vue'
import searchBar from '../nav/searchBar.vue'

export default {
    name: 'homeNav',
    components: {
        leftHomeNav,
        rightNav,
        searchBar
    }
}
</script>

<style>
.left-entry,
.right-entry,
.home-nav-header {
    display: flex;
    align-items: center;
}
</style>

<style scoped>
.home-nav-header {
    height: 64px;
    padding: 0 24px;
    position: absolute;
    z-index: 1;
    width: 100%;
    color: white;
    font-size: 14px;
    max-width: 2560px;
}
</style>