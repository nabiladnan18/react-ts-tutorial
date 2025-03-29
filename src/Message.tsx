interface Props {
    name: string;
}

function Message(props: Props) {
    if (props.name === "Nabil") {
        return <h2>Hey there {props.name}!</h2>;
    } else {
        return <h2>Hi stranger!</h2>;
    }
}

export default Message;

