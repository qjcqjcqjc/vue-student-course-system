<template>
  <div>
    <el-menu
      :default-active="$route.path"
      class="el-menu-demo"
      @select="handleSelect"
      router
    >
    <label v-for="menu in menus" :key="menu.id">
      <el-menu-item  :index="menu.id" >{{menu.name}}</el-menu-item>
    </label>

      <el-menu-item  index="/main">首页</el-menu-item>
      <el-submenu index="/event">
        <template slot="title">活动</template>
        <el-menu-item index="/event/create">创建</el-menu-item>
        <el-menu-item index="/event/list">管理</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      menus: [
        {
          'name': '',
          'childMenus': [],
          'id': '',
          'url': ''
        }
           
      ]
    }
  },
  created () {
    this.$axios
      .get('index')
      .then(response => (this.menus = response.data))
  },
  methods: {
    menu () {
      console.log(this.menus)
    }
  }
}
</script>

<style scoped>
</style>
