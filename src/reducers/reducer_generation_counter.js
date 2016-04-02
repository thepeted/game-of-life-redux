const counter = (state = 0, action) => {
  switch(action.type){
    case 'TICK':
      return state + 1;
    case 'CLEAR':
      return 0;
    case 'MAKE_RANDOM':
      return 0;
    default:
      return state;
  }
};

export default counter;
