import React, { Component, useState } from 'react';

const LikeDislike = () => {
    const [likes, setLikes] = useState(100)
    const [dislikes, setDislikes] = useState(25)
    const [liked, setLiked] = useState(false)
    const [disliked, setDisliked] = useState(false)
    const handleLikes = () => {
        if (liked) {
            setLikes(likes - 1)
            setLiked(!liked)

        } else {
            if (disliked) {
                setDislikes(dislikes - 1)
                setDisliked(!disliked)
            }
            setLikes(likes + 1)
            setLiked(!liked)
        }
    }
    const handleDislike = () => {
        if (disliked) {
            setDislikes(dislikes - 1)
            setDisliked(!disliked)
        } else {
            if (liked) {
                setLikes(likes - 1)
                setLiked(!liked)
            }
            setDislikes(dislikes + 1)
            setDisliked(!disliked)
        }


    }

    return (
        <>
            <div>
                <h2>Like/Dislike</h2>
                <button className="like-button" type="button" onClick={handleLikes}>Like | <span className="liked">{likes}</span></button>
                <button className="dislike-button" type="button" onClick={handleDislike}>Dislike | <span className="disliked">{dislikes}</span></button>
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
