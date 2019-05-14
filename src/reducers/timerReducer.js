const initState = {
  timers: [
    {id: 1, date: '5/11/2019'},
    {id: 2, date: '5/12/2019'},
    {id: 3, date: '5/13/2019'}
  ]
}

const timerReducer = (state = initState, action) => {
  switch (action.type){
    case 'CREATE_TIMER':
      console.log('created timer', action.timer, action.date)
      return state;
    case "CREATE_TIMER_ERROR":
      console.log('create timer error', action.err)
    return state;
  default:
    return state;
  }
}

export default timerReducer
