import { useState, useEffect } from "react";

function useCountDown(totalTime=30) {
    const [countDown, setCountDown] = useState(totalTime) // reduce from 60 to 0

    useEffect(() => {
        const interval = setTimeout(()=> {
            setCountDown(cd => cd - 1)
        }, 1000)

        return () => clearInterval(interval)
    }, [countDown])

    return getReturnValues(countDown)
}

const getReturnValues = (countDown) => {
    if (countDown < 0) {
        return [0,0]
    }
    const minutes = Math.floor(countDown / 60);
    const seconds = Math.floor(countDown % 60);
  
    return [minutes, seconds];
  };

export default useCountDown