const ADD_BOOK ='book-store/books/ADD_BOOKS';
const REMOVE_BOOK ='book-store/books/REMOVE_BOOKS';

const initialState = [];

export const addbook= (payload) => ({
    index:0,
    type: ADD_BOOK,
    payload,
});

export const removebook = (payload) => (
    {
        index:0,
        type:REMOVE_BOOK,
        payload
    });

const reducer = (action,state=initialState) => {
    switch(action.type){
        case ADD_BOOK:
            return [...state, action.payload];

        case REMOVE_BOOK:
            return state.map((book,index) => {
              if(action.index === index) state.splice(index-1, 1);
              return book;
            });
            default:
                return state;
    }
};

export default reducer;