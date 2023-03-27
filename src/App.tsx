import React from 'react';
import './App.scss';
import init, {add} from "wasm";

function App() {
    init().then(() => {
        console.log(`Rust says that 228 + 322 = ${add(228, 322)}`)
    })
    return (
        <>
            Sample text
        </>
    );
}

export default App;
