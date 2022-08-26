import "./Comment.scss";
import VoteButton from "./VoteButton";

type CommentProps = {
    avatarName: string;
    userName: string;
    commentCreated: string;
    comment: string;
};

const Comment = ({ avatarName, userName, commentCreated, comment }: CommentProps) => {
    return (
        <section className="comment-container">
            <header className="comment__header">
                <img src={`${process.env.PUBLIC_URL}/avatars/image-${avatarName}.png`} alt="A avatar image of the user" className="comment__header-image" />
                <p className="comment__header-user-name">{userName}</p>
                <p>{commentCreated}</p>
            </header>
            <p>
                {comment}
            </p>
            <footer className="comment__footer">
                <VoteButton />
                <button className="comment__footer-button">
                    <img src={`${process.env.PUBLIC_URL}/icon-reply.svg`} alt="" />
                    <span>Reply</span>
                </button>
            </footer>
        </section>
    )

}

export default Comment;