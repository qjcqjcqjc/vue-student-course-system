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
      'menuId': 'M006',
      'pId': null,
      'menuName': '修改主页内容',
      'url': 'ModifyHomePage',
      'parentMenu': null,
      'childMenus': []
    },
    {
      'menuId': 'M012',
      'pId': null,
      'menuName': '用户管理',
      'url': 'UserManagement',
      'parentMenu': null,
      'childMenus': [
        {
          'menuId': 'M013',
          'pId': 'M012',
          'menuName': '添加用户',
          'url': 'AddUser',
          'parentMenu': null,
          'childMenus': []
        },
        {
          'menuId': 'M014',
          'pId': 'M012',
          'menuName': '查看用户',
          'url': 'ViewUser',
          'parentMenu': null,
          'childMenus': []
        },
        {
          'menuId': 'M018',
          'pId': 'M012',
          'menuName': '查找用户',
          'url': 'FindFser',
          'parentMenu': null,
          'childMenus': []
        }
      ]
    },
    {
      'menuId': 'M013',
      'pId': 'M012',
      'menuName': '添加用户',
      'url': 'AddUser',
      'parentMenu': null,
      'childMenus': []
    },
    {
      'menuId': 'M014',
      'pId': 'M012',
      'menuName': '查看用户',
      'url': 'ViewUser',
      'parentMenu': null,
      'childMenus': []
    },
    {
      'menuId': 'M015',
      'pId': null,
      'menuName': '课程管理',
      'url': 'CourseManagement',
      'parentMenu': null,
      'childMenus': [
        {
          'menuId': 'M016',
          'pId': 'M015',
          'menuName': '添加课程',
          'url': 'AddCourse',
          'parentMenu': null,
          'childMenus': []
        },
        {
          'menuId': 'M017',
          'pId': 'M015',
          'menuName': '查看课程',
          'url': 'ViewCourse',
          'parentMenu': null,
          'childMenus': []
        },
        {
          'menuId': 'M019',
          'pId': 'M015',
          'menuName': '查找课程',
          'url': 'FindCourse',
          'parentMenu': null,
          'childMenus': []
        }
      ]
    },
    {
      'menuId': 'M016',
      'pId': 'M015',
      'menuName': '添加课程',
      'url': 'AddCourse',
      'parentMenu': null,
      'childMenus': []
    },
    {
      'menuId': 'M017',
      'pId': 'M015',
      'menuName': '查看课程',
      'url': 'ViewCourse',
      'parentMenu': null,
      'childMenus': []
    },
    {
      'menuId': 'M018',
      'pId': 'M012',
      'menuName': '查找用户',
      'url': 'FindFser',
      'parentMenu': null,
      'childMenus': []
    },
    {
      'menuId': 'M019',
      'pId': 'M015',
      'menuName': '查找课程',
      'url': 'FindCourse',
      'parentMenu': null,
      'childMenus': []
    }
  ]
}


let user = {
  result
}
export default user


