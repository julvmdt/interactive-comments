import Comment from "./Comment";
import SendComment from "./SendComment";

const App = () => {
    return (
        <main>
            <Comment avatarName="amyrobson" userName="amyrobson" commentCreated="1 month ago" comment="Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You’ve nailed the design and the responsiveness at various breakpoints works really well." />
            <SendComment avatarName="amyrobson" />
        </main>
    )
}

export default App;