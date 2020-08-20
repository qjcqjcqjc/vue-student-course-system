<template>
    <el-table
      :data="course"
      style="width: 40%">
      <el-table-column
        prop="courseId"
        label="课程编号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="courseName"
        label="课程名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="teacher.teacherName"
        label="任教教师"
        width="180">
      </el-table-column>
      <el-table-column>
         <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">选择</el-button>
         </template>
      </el-table-column>
    </el-table>
  </template>

<script>
export default {
  inject: ['reload'],
  data () {
    return {
      course: [],
      currentMajor: JSON.parse(localStorage.getItem('currentMajor'))
    }
  },
  created () {
    this.$axios
      .get('ChooseCourse?majorid=' + this.currentMajor)
      .then(response => (this.course = response.data.data))
  },
  methods: {
    handleClick (row) {
      console.log(row.courseId)
      this.$axios
        .get('CourseSelection?courseid=' + row.courseId)
        .then(res => {
          console.log('123456' + res)
          if (res.data.status === 200) {
            this.reload()
          }
        })
    }
  }
}
</script>