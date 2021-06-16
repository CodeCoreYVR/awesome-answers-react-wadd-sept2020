// Demo useState Hook
import React, { useState } from 'react';

const MyFunctionalComponent = () => {
    // Now we can use the useState hook
    const [currentValue, setCurrentValue] = useState('initialValueOfStateVariable')
    // We have 3 parts to take care of while we are using useState hook.
    // 1 - Initial value of the stage e.g. this.state = {questions: []}
    // 2 - The currentValue of the state variable e.g. this.state.questions
    // 3 - setCurrentValue method that sets the value of state variable e.g. this.setState()
    return (
        // Return some JSX
        <div>
            {/* This will give us the currentValue of state */}
            {currentValue} 
            <button onClick={() => setCurrentValue(prevValue => prevValue + 'something else')}/>
            {/* The above method inside onClick will set the currentValue in state based on the previous value */}
        </div>
    )
}

export default MyFunctionalComponent;

