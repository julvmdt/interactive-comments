import { useState } from "react";
import "./VoteButton.scss";

const PLUS = "plus";
const MINUS = "minus";

const VoteButton = () => {
    const [count, setCount] = useState(0);

    const vote = (action: string) => {
        if (action === PLUS) {
            setCount(count + 1);
        } else {
            setCount(count - 1);
        }
    }
    return (
        <section className="vote-button-container">
            <button className="vote-button" onClick={() => { vote(PLUS) }}>+</button>
            <span className="vote-count">{count}</span>
            <button className="vote-button" onClick={() => { vote(MINUS) }}>-</button>
        </section>
    )
}

export default VoteButton;