import {Counter} from './components/Counter';
import {User} from "./components/User";

import {FatherTimer} from "./components/FatherTimer";
import {CounterRed} from "./components/CounterRed";
import {Form} from "./components/Form";
import {Form2} from "./components/Form2";

function App() {

        return (
            <>
                    <h1>Hello World! - TypeScript</h1>
                    <hr />
                    <Counter />
                    <User />

                    <h2> useEffect - useRef</h2>
                    <hr/>
                    <FatherTimer/>

                    <h2>useReducer</h2>
                    <hr/>
                    <CounterRed/>

                    <h2>Customs hooks</h2>
                    <hr/>
                    <Form/>
                    <br/><br/><br/><br/><br/>
                    <Form2/>
            </>
        );
}

export default App;
