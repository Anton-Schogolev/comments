import React from 'react';
import Comment from "./components/Comment/Comment";
import {CommentType} from "./state/reducers/reducer";
import {useTypedSelector} from "./state/store";
import {Form} from "./components/Forms/Form";

function App() {
    const comments = useTypedSelector<CommentType[]>(state => state.comments);
    return (
        <>
            <Form parentIds={null}/>
            {comments.map(item => <Comment key={item.id} {...item}/>)}
        </>
    );
}

export default App;
