import { useEffect, useState } from 'react';
import style from '../styles/body.module.css';
const Right = ({ score, setScore }) => {
	const [foodCordinates, setFoodCordinates] = useState({
		xCor: 2,
		yCor: 3,
	});
	const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
	const [directionToMove, setDirectionToMove] = useState({
		x: 1,
		y: 0,
	});

	const [game, setGame] = useState(false);

	const NewFood = () => {
		let a = 20;
		let b = 0;
		let x = Math.round((a - b) * Math.random());
		let y = Math.round((a - b) * Math.random());
		console.log(x, y);
		setFoodCordinates({
			xCor: x,
			yCor: y,
		});
	};

	const ChangeDirection = (e) => {
		switch (e.key) {
			case 'ArrowUp':
				setDirectionToMove({ x: -1, y: 0 });
				break;
			case 'ArrowDown':
				setDirectionToMove({ x: 1, y: 0 });
				break;
			case 'ArrowLeft':
				setDirectionToMove({ x: 0, y: -1 });
				break;
			case 'ArrowRight':
				setDirectionToMove({ x: 0, y: 1 });
				break;
			default:
				break;
		}
	};

	const CheckHit = (newSnake) => {
		for (let i = 0; i < newSnake.length; i++) {
			if (
				newSnake[i].x < 0 ||
				newSnake[i].x > 20 ||
				newSnake[i].y < 0 ||
				newSnake[i].y > 20
			) {
				setSnake([{ x: 10, y: 10 }]);
				alert(`GAME OVER. Your score is ${score}`);
				setScore(0);
				setGame(false);
			}
			if (
				i > 0 &&
				newSnake[0].x == newSnake[i].x &&
				newSnake[0].y == newSnake[i].y
			) {
				setSnake([{ x: 10, y: 10 }]);
				alert(`GAME OVER. Your score is ${score}`);
				setScore(0);
				setGame(false);
			}
		}
	};
	window.addEventListener('keydown', (e) => {
		if (e.key == ' ') {
			setGame(true);
		}
	});
	useEffect(() => {
		if (game) {
			setTimeout(() => {
				window.addEventListener('keydown', (e) => ChangeDirection(e));
				let newSnake = [...snake];
				for (let i = snake.length - 1; i > 0; i--) {
					newSnake[i] = snake[i - 1];
				}
				newSnake[0] = {
					x: newSnake[0].x + directionToMove.x,
					y: newSnake[0].y + directionToMove.y,
				};

				if (
					newSnake[0].x == foodCordinates.xCor &&
					newSnake[0].y == foodCordinates.yCor
				) {
					NewFood();
					setScore(score + 1);
					newSnake = [
						...newSnake,
						{
							x: newSnake[newSnake.length - 1].x - directionToMove.x,
							y: newSnake[newSnake.length - 1].y - directionToMove.y,
						},
					];
				}
				CheckHit(newSnake);
				// console.log(newSnake);
				setSnake(newSnake);
			}, 100);
		}
	}, [snake, game]);

	return (
		<div className={style.rightComponent}>
			<div className={style.Board}>
				<div
					id='food'
					className={style.food}
					style={{
						gridRowStart: foodCordinates.xCor,
						gridColumnStart: foodCordinates.yCor,
					}}
				></div>
				{snake?.map((item, index) => {
					return (
						<div
							className={index == 0 ? style.snakeHead : style.snakeBody}
							style={{
								gridRowStart: item.x,
								gridColumnStart: item.y,
							}}
							key={index}
						></div>
					);
				})}
			</div>
		</div>
	);
};

export default Right;
