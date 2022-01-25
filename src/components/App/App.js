import Hint from '../Hint/index';
import './App.module.scss';

function App() {
	return (
		<div
			style={{
				height: '100vh',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
			}}
		>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
				}}
			>
				<Hint content='Lorem ipsum dolor sit, amet consectetur adipisicing elit.' openDelay={500}>
					<button>Test1</button>
				</Hint>
				<Hint content='Lorem ipsum dolor sit.' openDelay={1000}>
					<button>Test2</button>
				</Hint>
			</div>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
				}}
			>
				<Hint content='Lorem ipsum dolor sit, amet consectetur adipisicing elit.'>
					<button
						style={{
							marginLeft: '40px',
						}}
					>
						Test3
					</button>
				</Hint>
				<Hint content='Lorem ipsum dolor sit, amet consectetur adipisicing elit.' animation='fadeIn'>
					<button>Test4</button>
				</Hint>
				<Hint content='Lorem ipsum dolor sit.' animation='zoomIn' openDelay={500}>
					<button
						style={{
							marginRight: '40px',
						}}
					>
						Test5
					</button>
				</Hint>
			</div>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
				}}
			>
				<Hint content='Lorem ipsum dolor sit, amet consectetur adipisicing elit.'>
					<button>Test6</button>
				</Hint>
				<Hint content='Lorem ipsum dolor sit.'>
					<button>Test7</button>
				</Hint>
			</div>
		</div>
	);
}

export default App;
