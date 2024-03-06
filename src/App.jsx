import Counter from "./components/Counter.jsx";
import Stats from "./components/Stats.jsx";
import {useState} from "react";
import counter from "./components/Counter.jsx";
import count from "./components/Count.jsx";

const initialCounters = [
    {
        id: crypto.randomUUID(),
        value: 0
    },
    {
        id: crypto.randomUUID(),
        value: 0
    }
]


function App() {
    const [counters, setCounters] = useState(initialCounters);

    const handleIncrement = (counterId) => {
        counters.map(counter => {
            if (counter.id === counterId) {
                return {
                    ...counter,
                    value: counter.value + 1
                }
            }
            return counter
        })
    }

    const handleDecrement = (counterId) => {
        const updatedCounters = counters.map(counter => {
            if (counter.id === counterId) {
                return {
                    ...counter,
                    value: counter.value - 1
                }
            }
            return counter
        })
        setCounters(updatedCounters)
    }

    return (

        <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
            <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
                Simple Counter Application
            </h1>
            <div className="max-w-md mx-auto mt-10 space-y-5">

                {
                    counters.map((counter) => (
                        <Counter count-={counter.value}
                                 key={counter.id}
                                 onIncrement={() => handleIncrement(counter.id)}
                                 onDecrement={() => handleDecrement(counter.id)}
                        />

                    ))
                }

                <Stats totalCount={10}/>
            </div>

        </div>

    )
}

export default App
