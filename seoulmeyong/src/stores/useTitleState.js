import { create } from 'zustand';

//콜백함수의 반환값 : 상태(객체)
export const useTitleState = create((set) => ({
	//set은 함수야
	title: '제목없음', //상태

	// setTitle: (inputTitle) => set(state => {
	//     return {
	//         ...state,
	//         title: inputTitle,
	//     }
	// }) //set의 매개변수로 들어간 걸로 리렌더링
	setTitle: (inputTitle) =>
		set((state) => ({
			...state,
			title: inputTitle,
		})),

	//자동으로 summit하면 input하면 지워주는애
	reset: () =>
		set(() => ({
			// ...state,
			title: '',
		})),
}));
