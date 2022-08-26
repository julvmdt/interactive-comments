import "./SendComment.scss";

type SendComment = {
    avatarName: string;
};

const SendComment = ({ avatarName }: SendComment) => {
    return (<section className="send-comment-container">
        <label htmlFor="comment">Add a comment</label>
        <textarea id="comment" className="send-comment-textarea" />
        <footer className="send-comment-footer">
            <img src={`${process.env.PUBLIC_URL}/avatars/image-${avatarName}.png`} alt="A avatar image of the user" className="send-comment-footer__avatar" />
            <button className="send-comment-footer__button">
                <span>Send</span>
            </button>
        </footer>
    </section >
    );
}

export default SendComment;