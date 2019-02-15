const siteName = '管理系统'
const navData = [
  {
    // 再不单独页面配置layout的信息时，name 请写的和router name 一致
    name: 'test',
    title: '测试1',
    icon: 'ios-navigate',
    path: '/',
    children: [
      {
        name: 'test',
        title: '测试1',
        icon: 'ios-navigate',
        path: '/'
      },
      {
        name: 'name22',
        title: '测试122',
        icon: 'ios-navigate',
        path: '/'
      },
      {
        name: 'name222',
        title: '测试122',
        icon: 'ios-navigate',
        path: '/'
      }
    ]
  },
  {
    name: 'name2',
    title: '测试2',
    icon: 'ios-navigate',
    path: '/'
  },
  {
    name: 'name3',
    title: '测试3',
    icon: 'ios-navigate',
    path: '/'
  },
  {
    name: 'name4',
    title: '测试4',
    icon: 'ios-navigate',
    path: '/'
  }
]
export default { navData, siteName }
