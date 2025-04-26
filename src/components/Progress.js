function Progress({ index, numQuestions, points, maxPossiblePoints, answer }) {
    return (
        <header className="progress">
            <progress max={numQuestions} value={index + Number(answer !== null)}></progress>
            <p>Question <string>{index + 1}</string> / {numQuestions}</p>
            <p><strong>{points}</strong> / {maxPossiblePoints}</p>
        </header>
    )
}

export default Progress
