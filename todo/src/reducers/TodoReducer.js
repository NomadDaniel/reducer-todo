export const initialState = [
  {
    item: 'breath and move correctly',
    completed: false,
    id: 3892987589
  },
  {
    item: 'drink enough water to pee clear by noon',
    completed: false,
    id: 3892987590
  },
  {
    item: 'lift heavy stuff repeatedly, enough to sweat',
    completed: false,
    id: 3892987591
  }
];


// ----------------- ADD_TASK  ----------------- //
export const todoReducer = ( state, action ) => {
  switch ( action.type ) {
    case "ADD_TASK":
      if ( action.payload ) {
        return [
          ...state,
          {
            item: action.payload,
            completed: false,
            id: new Date()
          }
        ];
      }
      // --------------------------------------- //

      break;


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
      } );
    // --------------------------------------- //


    // ----------------- CLEAR_COMPLETED ----------------- //
    case "CLEAR_COMPLETED":
      return state.filter( task => !task.completed );

    default:
      return state;
    // --------------------------------------- //

  };
};