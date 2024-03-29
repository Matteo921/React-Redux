import React from 'react';

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment, removeComment, editComment}) => <li>{text} <span>votes: {votes}</span> 
<button onClick={() => thumbUpComment(id)}>Thumb up</button>
<button onClick={() => thumbDownComment(id)}>Thumb down</button>
<button onClick={() => editComment(id, text)}>Edit comment</button>
<button onClick={() => removeComment(id)}>Remove comment</button></li>;

export default Comment;