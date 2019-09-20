import React from 'react';
import {CTX} from './Store';
import Alert from './components/Alert';

export default function Poem() {
    const [appState, dispatch] = React.useContext(CTX);

    return (
        <div>
            <Alert />
            <button onClick={() => dispatch({type: 'ERROR'})}>Click</button>
        </div>
    )
}