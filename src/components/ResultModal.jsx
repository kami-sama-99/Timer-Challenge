import { forwardRef } from "react"

const ResultModal = forwardRef(function ResultModal({remainingTime, targetTime, onReset}, ref) {
    const userLost = remainingTime <= 0;
    const formattedTime = (remainingTime / 1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

    return <dialog className="result-modal" ref={ref}>
        {userLost ? <h2>You Lost</h2> : <h2>Your Score: {score}</h2>}
        <p>
            The target time was <strong>{targetTime} seconds</strong>
        </p>
        <p>
            You stopped timer with <strong>{formattedTime} seconds left</strong>
        </p>
        <form method="dialog" onSubmit={onReset}>
            <button>Close</button>
        </form>
    </dialog>
})

export default ResultModal;