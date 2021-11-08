import React, { Component, useState } from 'react';

const LikeDislike = () => {
    const [likes, setLikes] = useState(100)
    const [dislikes, setDisikes] = useState(25)
    const handleLikes = () => {
        if (likes === 100) {

            setLikes(likes + 1)
        } else {
            setLikes(likes - 1)
        }

    }
    const handleDislike = () => {
        if (dislikes === 25) {

            setDisikes(dislikes + 1)
        } else {
            setDisikes(dislikes - 1)
        }


    }

    return (
        <>
            <div>
                <h2>Like/Dislike</h2>
                <button className="like-button" type="button" onClick={handleLikes}>Like | <span className="likes-counter">{likes}</span></button>
                <button className="dislike-button" type="button" onClick={handleDislike}>Dislike | <span className="dislikes-counter">{dislikes}</span></button>
                <span></span>

            </div>
            <style>{`
                    .like-button, .dislike-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:   #585858;
                    }

                    .liked, .disliked {
                        font-weight: bold;
                        color: #1565c0;
                    }
                `}</style>
        </>
    );

}

export default LikeDislike
