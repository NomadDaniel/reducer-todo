export const initialState = [
  {
    item: 'Drink 3 full bottles of water',
    completed: false,
    id: 2458963487
  },
  {
    item: '10x10x10 lifting routine',
    completed: false,
    id: 2458963486
  }
];

// ----------------- ADD_TASK  ----------------- //
export const todoReducer = ( state, action ) => {
  switch ( action.type ) {
    case "ADD_TASK":
      return [
        ...state,
        {
          item: action.payload,
          completed: false,
          id: new Date().getUTCMilliseconds()
        }
      ];

    // ----------------- TOGGLE_TASK  ----------------- //
    case "TOGGLE_TASK":
      return state.map( task => {
        if ( task.id === action.payload ) {
          return {
            ...task,
            completed: !task.completed
          };
        }
        return task;
      }
      );

    // ----------------- CLEAR_COMPLETED ----------------- //
    case "CLEAR_COMPLETED":
      return state.filter( task => !task.completed );

    default:
      return state;
  };
};