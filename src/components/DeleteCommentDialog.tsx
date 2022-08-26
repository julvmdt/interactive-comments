import "./DeleteCommentDialog.scss";

const DeleteCommentDialog = () => {
    return (
        <>
            <div className="delete-dialog-backdrop" />
            <section className="delete-dialog">
                <h1>Delete comment</h1>
                <p>Are you sure you want to delete this comment? This will remove the comment and can’t be undone.</p>
                <section className="delete-dialog__button-group">
                    <button className="delete-dialog__cancel-button">No, cancel</button>
                    <button className="delete-dialog__delete-button">Yes, delete</button>
                </section>
            </section>
        </>
    );
}

export default DeleteCommentDialog;