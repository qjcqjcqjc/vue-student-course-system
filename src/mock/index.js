import Mock from 'mockjs'
import User from './user'

Mock.mock('login', 'post', (req) => {
  return User.result
})

Mock.mock('index', 'get', () => {
  console.log(User.menus)
  return User.result
})

Mock.mock('ChooseCourse', 'get', () => {
  console.log(User.course)
  return User.course
})
