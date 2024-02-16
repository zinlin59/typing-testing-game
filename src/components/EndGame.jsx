const EndGame = ({score, onGame, timer}) => {
    const finalScore = score.right + score.wrong;
    const changeMinute = timer / 60000;
    const calculateWpm = finalScore / changeMinute;
    console.log(changeMinute);
    return (
        <div className="endGame">
            <div className="result">
                <div>
                    <div className="title">
                        Right Word
                    </div>
                    <div className="number">
                        {score.right}
                    </div>
                </div>
                <div>
                    <div className="title">
                        Wrong Word
                    </div>
                    <div className="number">
                        {score.wrong}
                    </div>
                </div>
                <div>
                    <div className="title">
                        WPM
                    </div>
                    <div className="number">
                        {calculateWpm}
                    </div>
                </div>
            </div>
            <button className="btnPlay" onClick={() =>
            onGame('playGame')}>Play Again</button>
            <button className="btnPlay" onClick={() =>
            onGame('')}>Home</button>
        </div>
    )
}
export default EndGame;