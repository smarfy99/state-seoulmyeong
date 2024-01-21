import { useTitleState } from '../stores/useTitleState';

export const Nav = () => {
    //state.title은 useTitleState에서 title만 가져오는거야
	const title = useTitleState((state) => state.title);
	console.log(title);

	return <nav>{title}</nav>;
};
