import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard> 
                <CommentDetail 
                    author="Sam" 
                    text="Nice !!" 
                    timeAgo="Today ay 2:45pm" 
                    avatar="https://source.unsplash.com/random"/>
            </ApprovalCard> 

            <ApprovalCard> 
                <CommentDetail 
                    author="Alex" 
                    text="Cool !!" 
                    timeAgo="Yesterday ay 4:45pm" 
                    avatar="https://source.unsplash.com/random"/>
            </ApprovalCard> 
            
            <ApprovalCard> 
                <CommentDetail 
                    author="Pepe" 
                    text="Fancy !!" 
                    timeAgo="Today ay 7:45pm" 
                    avatar="https://source.unsplash.com/random"/>

            </ApprovalCard> 
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'))