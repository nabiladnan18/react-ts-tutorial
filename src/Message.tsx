function Message({ name }: { name: string }) {
    if (name == "Nabil") {
        return <h2>Hey there {name}!</h2>;
    } else {
        return <h2>Hi stranger!</h2>;
    }
}

export default Message;

