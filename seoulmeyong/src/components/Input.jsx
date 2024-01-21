import { useState } from 'react';
import { useTitleState } from '../stores/useTitleState';

export const Input = () => {
	const { title, setTitle, reset } = useTitleState(); //이게 구조분해할당으로 useTitleState를 가져온거야

	const handleChange = (e) => {
		setTitle(e.target.value);
	};

	const handleKeyDown = (e) => {
		if (e.keyCode === 13) {
			reset();
		}
	};

	return <input type='text' value={title} onChange={handleChange} onKeyDown={handleKeyDown} />;
};
