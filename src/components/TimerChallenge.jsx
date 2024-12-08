import { useState } from "react"
import { useRef } from "react"
import ResultModal from "./ResultModal";

export default function TimerChallenge({title, targetTime}) {
    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

    const timer = useRef();
    const dialog = useRef();

    const timerActive = timeRemaining > 0 && timeRemaining < (targetTime * 1000);

    if (timeRemaining <= 0) {
        clearInterval(timer.current);
        dialog.current.showModal();
    }

    function handleReset() {
        setTimeRemaining(targetTime * 1000);
    }

    function handleStart() {
        timer.current = setInterval(() => {
            setTimeRemaining(prevTime => prevTime - 10);
        }, 10);
    }

    function handleStop() {
        dialog.current.showModal();
        clearInterval(timer.current);
    }

    return <section className="challenge">
        <ResultModal remainingTime={timeRemaining} targetTime={targetTime} onReset={handleReset} ref={dialog}/>
        <h2>{title}</h2>
        <p className="challenge-time">
            {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
            <button onClick={timerActive ? handleStop : handleStart}>
                {timerActive ? 'Stop' : 'Start'} Challenge
            </button>
        </p>
        <p className={timerActive ? "active" : undefined}>
            {timerActive ? 'Timer is running...' : 'Timer inactive'}
        </p>
    </section>
}