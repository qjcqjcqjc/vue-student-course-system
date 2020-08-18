<template>
  <div>
    <el-menu :default-active="$route.path" class="el-menu-demo" router>
      <label v-for="menu in menus" :key="menu.menuId">
        <el-menu-item v-if="menu.childMenus==''" :index="menu.menuId">{{menu.menuName}}</el-menu-item>
        <el-submenu v-else :index="menu.menuId">
          <template slot="title">{{menu.menuName}}</template>
          <label v-for="menu in menu.childMenus" :key="menu.menuId">
            <el-menu-item v-if="menu.childMenus==''" :index="menu.menuId">{{menu.menuName}}</el-menu-item>
            <el-submenu v-else :index="menu.menuId">
              <template slot="title">{{menu.menuName}}</template>
              <label v-for="menu in menu.childMenus" :key="menu.menuId">
                <el-menu-item :index="menu.menuId">{{menu.menuName}}</el-menu-item>
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
      menus: JSON.parse(localStorage.getItem('menus'))
    }
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
