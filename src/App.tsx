import "./App.css";
import Message from "./Message";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import ListGroupMosh from "./components/ListGroupMosh";

function App() {
    let items = ["Scarborough", "North York", "East York", "Toronto"];

    const handleSelectItem = (item: string) => {
        console.log(item);
    };

    return (
        <>
            <div>
                <h1 className="text-3xl font-bold underline">Hello World</h1>
            </div>
            <Text text1={"there"} />
            <div>
                <Message name="Nabil" />
            </div>
            <div>
                <ListGroup
                    img="https://images.pexels.com/photos/31051714/pexels-photo-31051714/free-photo-of-traditional-chinese-bridge-in-nanjing-china.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    imgAlt=""
                    title="Whoa"
                    pricing="$10"
                    url="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"
                />
            </div>
            <ListGroupMosh
                items={items}
                heading="Cities"
                onSelectItem={handleSelectItem}
            />
            <Alert>
                Hello <span className="italic">World!</span>
            </Alert>
            <Button
                color="error"
                children="Click Me!"
                onClick={() => console.log("Clicked")}
            />
        </>
    );
}

function Text({ text1 }: { text1: string }) {
    return (
        <div>
            <h1 className="text-amber-700">Hey {text1}!</h1>
        </div>
    );
}

export default App;

