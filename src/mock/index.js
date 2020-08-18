import Mock from 'mockjs'
import User from './user'

Mock.mock('login', 'post', (req) => {
  return User.result
})

Mock.mock('index', 'get', () => {
  console.log(User.menus)
  return User.menus
})
