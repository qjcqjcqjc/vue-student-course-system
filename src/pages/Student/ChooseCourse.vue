<template>
  <el-select v-model="value" placeholder="请选择" @change="selectGet">
    <el-option
      v-for="item in major"
      :key="item.majorId"
      :label="item.majorId"
      :value="item.majorId">
    </el-option>
  </el-select>
</template>

<script>
export default {
  data () {
    return {
      major: [],
      value: '',
      currentMajor: ''
    }
  },
  created () {
    this.$axios
      .get('ChooseMajor')
      .then(response => (this.major = response.data.data))
  },
  methods: {
    selectGet (vId) {
      this.currentMajor = vId
      localStorage.setItem('currentMajor', JSON.stringify(this.currentMajor))
      this.$router.push('/ChooseMajor')
    }
  }
}
</script>