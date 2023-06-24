import React, {useState} from 'react';
import CompletedTasks from './CompletedTasks';
import CurrentTasks from "./CurrentTasks";
const App = () => {

    return (
        <div>
            <CurrentTasks/>
            {/*<CompletedTasks />*/}

        </div>
    );
};

export default App;
