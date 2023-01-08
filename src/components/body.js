import { useState } from 'react';
import style from '../styles/body.module.css';
import Left from './left';
import Right from './right';
const Body = () => {
	const [score, setScore] = useState(0);
	return (
		<div className={style.container}>
			<div className={style.body}>
				<Left score={score} setScore={setScore} />
				<Right score={score} setScore={setScore} />
			</div>
		</div>
	);
};
export default Body;
