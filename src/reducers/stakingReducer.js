//Reducer for character information Initialize State
const initState = {
  Status: false,
  PoolType: "Staking",
  StartDate: "9/18/2022",
  EndDate: "9/20/2022",
  LockupPeriod: "10 Days",
  payouts: "Yes",
  PoolCapacity: "1000 Test",
  MaximumDeposit: "100 Test",
};

//Define Actions
const stakingReducer = (state = initState, action) => {
  switch (action.type) {
    //Change character name
    case "CHANGE_NAME":
      return {
        ...state,
        name: action.payload,
      };

    case "CHANGE_OCCUPATION":
      return {
        ...state,
        occupation: action.payload,
      };
    case "CHANGE_AGE":
      return {
        ...state,
        age: action.payload,
      };
    default:
      return state;
  }
};

export default stakingReducer;
