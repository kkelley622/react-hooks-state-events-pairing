import Comment from "./Comment"

function Comments({ commentsData }) {
    return (
        <div>
            <h2>{commentsData.length} Comments</h2>
            <div>{commentsData.map(
                comment => (<Comment key={comment.id} comment={comment}/>)
            )}</div>
        </div>
    )
}

export default Comments;