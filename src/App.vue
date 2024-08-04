<template>
  <logReg v-if="$store.state.showLogView"></logReg>
  <router-view></router-view>
</template> 

<script>
import logReg from './components/logReg';

export default {
  name: 'App',
  components: {
    logReg
  },
  methods: {
    getUser() {
      let userInfo = JSON.parse(localStorage.getItem('userInfo'))
      if (!userInfo) return
      this.$store.commit('setUser', userInfo)
      // console.log(this.$store.state.userInfo);
    }
  },
  created() {
    this.getUser()
  }
}        
</script>