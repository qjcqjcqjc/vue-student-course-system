let result = {
  status: 200,
  msg: '登录成功'
}

let menus = [
  {
    'name': '主页',
    'childMenus': [],
    'id': 'M001',
    'url': 'HomePage'
  },
  {
    'name': '选择课程',
    'childMenus': [],
    'id': 'M002',
    'url': 'ChooseCourse'
  },
  {
    'name': '个人信息',
    'childMenus': [],
    'id': 'M003',
    'url': 'PersonalInformation'
  },
  {
    'name': '修改密码',
    'childMenus': [],
    'id': 'M004',
    'url': 'ChangePassword'
  },
  {
    'name': '添加课程',
    'childMenus': [],
    'id': 'M005',
    'url': 'AddCourse'
  },
  {
    'name': '修改主页内容',
    'childMenus': [],
    'id': 'M006',
    'url': 'ModifyHomePage'
  },
  {
    'name': '重置密码',
    'childMenus': [],
    'id': 'M007',
    'url': 'ResetPassword'
  },
  {
    'name': '查看已选',
    'childMenus': [],
    'id': 'M008',
    'url': 'ViewSelected'
  },
  {
    'name': '权限管理',
    'childMenus': [
      {
        'name': '用户管理',
        'childMenus': [
          {
            'name': '添加用户',
            'childMenus': [],
            'pId': 'M012',
            'id': 'M013',
            'url': 'AddUser'
          },
          {
            'name': '查看用户',
            'childMenus': [],
            'pId': 'M012',
            'id': 'M014',
            'url': 'ViewUser'
          },
          {
            'name': '查找用户',
            'childMenus': [],
            'pId': 'M012',
            'id': 'M018',
            'url': 'FindFser'
          }
        ],
        'pId': 'M011',
        'id': 'M012',
        'url': 'UserManagement'
      },
      {
        'name': '课程管理',
        'childMenus': [
          {
            'name': '添加课程',
            'childMenus': [],
            'pId': 'M015',
            'id': 'M016',
            'url': 'AddCourse'
          },
          {
            'name': '查看课程',
            'childMenus': [],
            'pId': 'M015',
            'id': 'M017',
            'url': 'ViewCourse'
          },
          {
            'name': '查找课程',
            'childMenus': [],
            'pId': 'M015',
            'id': 'M019',
            'url': 'FindCourse'
          }
        ],
        'pId': 'M011',
        'id': 'M015',
        'url': 'CourseManagement'
      }
    ],
    'id': 'M011',
    'url': 'AuthorityManagement'
  }
]

let user = {
  menus,
  result
}
export default user


