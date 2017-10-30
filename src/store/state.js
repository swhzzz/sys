const state = {
  key: '患者管理',
  currentTab: '待录入',
  tabs: {
    '患者管理': ['已审核','待录入','待审核','待修正'],
    '数据操作': ['数据统计','数据导入','数据导出'],
    '系统管理': ['用户管理','权限管理','操作日志']
  },
  listTabs: ['健康调查','内镜','幽门螺杆菌','宫颈癌检查','乳腺癌检查','血液','腹部B超','胃癌','上消化道癌','宫颈癌病理','乳腺癌病理'],
  currentListTabIndex: 0,
  patients: [
    {
      name: '周学明',
      tableID: 6206210120922820,
      tableType: '血液检查结果表',
      IDCard: 622301195602041310,
      time: '2017-05-05 16:01'
    },
    {
      name: '周学明',
      tableID: 6206210120922820,
      tableType: '胃镜检查结果表',
      IDCard: 622301195602041310,
      time: '2017-05-05 16:01'
    },
    {
      name: '周学明',
      tableID: 6206210120922820,
      tableType: '健康调查表',
      IDCard: 622301195602041310,
      time: '2017-05-05 16:01'
    },
    {
      name: '周学明',
      tableID: 6206210120922820,
      tableType: '血液检查结果表',
      IDCard: 622301195602041310,
      time: '2017-05-05 16:01'
    },
    {
      name: '周学明',
      tableID: 6206210120922820,
      tableType: '血液检查结果表',
      IDCard: 622301195602041310,
      time: '2017-05-05 16:01'
    },
    {
      name: '周学明',
      tableID: 6206210120922820,
      tableType: '血液检查结果表',
      IDCard: 622301195602041310,
      time: '2017-05-05 16:01'
    },
    {
      name: '周学明',
      tableID: 6206210120922820,
      tableType: '血液检查结果表',
      IDCard: 622301195602041310,
      time: '2017-05-05 16:01'
    }
  ],
  currentPatientIndex: 2,
  investigation: ['基本信息','家庭饮食习惯','日常运动情况','日常饮食习惯','吸烟调查','睡眠调查'],
  investigationIndex: 1
}

export default state
