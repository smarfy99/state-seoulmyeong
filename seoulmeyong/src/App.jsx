import { useQueryClient, useMutation, useQuery } from '@tanstack/react-query';
import './App.css';
import { Input } from './components/Input';
import { Nav } from './components/Nav';
import { getData } from './apis/getData';

const somePost = async () => {
	console.log('post실행해쩌');
	return;
};

//queryKey가 캐싱이 되는 값, 보통은 상수로 관리
//매우중요!!!!!
//queryKey - 키, queryFn - api로 받아온 값
//promise를 반환해야 함
function App() {
	//main에서 선언해준 거
	const queryClient = useQueryClient();

	//useEffect로 useState로 data받아오는 것과 똑같음
	//그래서 data의 초기값은 undefined임 - 중요
	//get일때
	const { data, isError } = useQuery({ queryKey: ['information'], queryFn: getData });

	//post와 같이 멱등성 없는거
	//mutate함수
	const { mutate } = useMutation({
		mutationFn: somePost, //왜 이건 키 없삼? 왜냐구? 굳이
		onSuccess: () => {
			console.log('실행완료');
			queryClient.invalidateQueries({ queryKey: ['information'] });
		},
		onError: () => {
			alert('error');
		},
	});

	console.log(data);

	if (!data) return <div>로딩중</div>;

	//isLoading도 있지만, ts가 화내
	//if(!data) <Loading />으로

	return (
		<>
			<Nav />
			<Input />

			<div>
				{data.map((gyiyomi) => (
					<div>{gyiyomi.name}</div>
				))}
			</div>

			<button onClick={mutate}>post로 받아와볼게요</button>
		</>
	);
}

export default App;
