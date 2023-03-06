import React from 'react';

function ConditionalControls(props) {
    return (
        <div>
            <button>Play</button>
            <button>Pause</button>
            {/*{props.showRest ? <button>Reset</button>: <button>Other</button>}*/}
            {/*{props.showRest ? <button>Reset</button>: undefined}*/}
            {props.showRest && <button>Reset</button> }
        </div>
    );
}

export default ConditionalControls;