import {
  action,
  observable
} from 'mobx-miniprogram'

export const store = observable({
  name: '王花花',
  age: 18,
  //计算属性
  get getNum() {
    return this.age + 10
  },

  // action
  setName: action(function (palyload) {
    this.name = palyload
    
  }),
  setAge: action(function (palyload) {
    this.age = palyload
  })
})