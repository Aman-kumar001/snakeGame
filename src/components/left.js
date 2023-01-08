import style from '../styles/body.module.css';

const Left = ({ score, setScore }) => {
	return (
		<div className={style.leftComponent}>
			<h3>INSTRUCTIONS</h3>
			<div className={style.Rules}>
				<ul>
					<li>
						Press <span style={{ fontWeight: 'bold' }}>SPACE</span> to start.
					</li>
					<li>Use Arrow Keys to move the snake to the food.</li>
					<li>
						Do not touch the body or the boundaries. It will lead to GAME OVER.
					</li>
					<li>
						Eating a food itme will lead to growth of snake and increase of
						score also.
					</li>
					<li>Try making a higher score. ALL THE BEST</li>
				</ul>
			</div>
			<div className={style.currentScore}>
				<p>Your Score</p>
				<p>{score}</p>
			</div>
			<div className={style.highScore}>
				<h3>SCORE BOARD</h3>
			</div>
		</div>
	);
};

export default Left;
