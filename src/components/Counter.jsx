import Count from "./Count.jsx";
import Button from "./Button.jsx";


function Counter({count, onIncrement, onDecrement}) {
    return (
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <Count count={count}/>
            <div className="flex space-x-3">
                <Button handler={onIncrement}>Increment</Button>
                <Button handler={onDecrement} type="danger">Decrement</Button>
            </div>
        </div>
    );
}

export default Counter;
