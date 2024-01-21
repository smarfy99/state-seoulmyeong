//부모 props 신경안쓰고 바로 값 넣어주기 => 모듈화하기 좋아
import { createContext, useContext, useState } from 'react';

export const SampleContext = createContext(undefined);

const useSample = () => {
	const value = useContext(SampleContext);
	if (!value) throw new Error('Provider 밖에서 썼어요!');
	return value;
};

export const SampleContextProvider = ({ children }) => {
	const state = useState(1);
	return <SampleContext.Provider value={state}>{children}</SampleContext.Provider>;
};

export const Component = () => {
	const [state] = useSample();
	return <div>{state}</div>;
};

export const Button = () => {
	const [_, setState] = useSample();
	return <button onClick={() => setState((prev) => prev + 1)}>ClickMe</button>;
};
