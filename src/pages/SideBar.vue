<template>
  <div>
    <el-menu :default-active="$route.path" class="el-menu-demo" @select="handleSelect" router>
      <label v-for="menu in menus" :key="menu.id">
        <el-menu-item v-if="menu.childMenus==''" :index="menu.id">{{menu.name}}</el-menu-item>
        <el-submenu v-else :index="menu.id">
          <template slot="title">{{menu.name}}</template>
          <label v-for="menu in menu.childMenus" :key="menu.id">
            <el-menu-item v-if="menu.childMenus==''" :index="menu.id">{{menu.name}}</el-menu-item>
            <el-submenu v-else :index="menu.id">
              <template slot="title">{{menu.name}}</template>
              <label v-for="menu in menu.childMenus" :key="menu.id">
                <el-menu-item :index="menu.id">{{menu.name}}</el-menu-item>
              </label>
            </el-submenu>
          </label>
        </el-submenu>
      </label>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      menus: []
    }
  },
  created () {
    this.$axios.get('index').then((response) => (this.menus = response.data))
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
