let result = {
  status: 200,
  msg: '登录成功',
  data: [
    {
      'menuId': 'M001',
      'pId': null,
      'menuName': '主页',
      'url': 'HomePage',
      'parentMenu': null,
      'childMenus': []
    },
    {
      'menuId': 'M002',
      'pId': null,
      'menuName': '选课',
      'url': 'ChooseCourse',
      'parentMenu': null,
      'childMenus': []
    },
    {
      'menuId': 'M003',
      'pId': null,
      'menuName': '个人信息',
      'url': 'PersonalInformation',
      'parentMenu': null,
      'childMenus': []
    },
    {
      'menuId': 'M004',
      'pId': null,
      'menuName': '修改密码',
      'url': 'ChangePassword',
      'parentMenu': null,
      'childMenus': []
    },
    {
      'menuId': 'M008',
      'pId': null,
      'menuName': '查看已选',
      'url': 'ViewSelected',
      'parentMenu': null,
      'childMenus': []
    }
  ]
}

let course = { 
  status: 200,
  msg: '获取到课程',
  data: [
    {
      'courseId': '200101',
      'courseName': '数学分析',
      'major': {
        'majorId': '200'
      },
      'teacher': {
        'teacherId': '007001',
        'teacherName': '张三'
      }
    },
    {
      'courseId': '200102',
      'courseName': '高等代数',
      'major': {
        'majorId': '200'
      },
      'teacher': {
        'teacherId': '000001',
        'teacherName': '海峰'
      }
    },
    {
      'courseId': '001',
      'courseName': '计算机',
      'major': {
        'majorId': '200'
      },
      'teacher': {
        'teacherId': '007001',
        'teacherName': '张三'
      }
    },
    {
      'courseId': '002',
      'courseName': '计量学',
      'major': {
        'majorId': '200'
      },
      'teacher': {
        'teacherId': '007001',
        'teacherName': '张三'
      }
    },
    {
      'courseId': '003',
      'courseName': 'Python',
      'major': {
        'majorId': '200'
      },
      'teacher': {
        'teacherId': '000001',
        'teacherName': '海峰'
      }
    }
  ]
}

let user = {
  result,
  course
}
export default user


