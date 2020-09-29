import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
    switch(action.type) {
        case 'add': 
            return [
                ...state, 
                {
                    id: Math.floor(Math.random() * 99999), 
                    title: action.payload.title, 
                    content: action.payload.content
                }
            ];
        case 'delete':
            return state.filter((blogPost) => blogPost.id !== action.payload)
        case 'update':
            return state.map((blogPost) => {
                return blogPost.id === action.payload.id ? action.payload : blogPost;
            });
        default: 
            return state;
    }
}
const addBlogPost = (dispatch) => {
    return (title, content, callback) => {
        dispatch({ type: 'add', payload: { title: title, content: content}});
        callback();
    }
}

const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({ type: 'delete', payload: id})
    }
}

const updateBlogPost = (dispatch) => {
    return(id, title, content, callback) => {
        dispatch(
            { 
                type: "update", 
                payload: {id: id, title: title, content: content }
            }
        )
        callback();
    }
}

export const {Context, Provider} = createDataContext(
    blogReducer, 
    {addBlogPost, deleteBlogPost, updateBlogPost}, 
    []);
