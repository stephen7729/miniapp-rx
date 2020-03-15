export default {
  namespace: 'index',
  state: {
    count: 0
  },

  // 异步请求
  effects: {},

  // 同步更新
  reducers: {
    updateState(state, {payload: data}) {
      debugger
      return {...state, ...data}
    }
  }

}

