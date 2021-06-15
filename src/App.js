import AppRouter from './components/util/AppRouter';
import { BrowserRouter } from 'react-router-dom';
// import Footer from './components/util/Footer';

function App() {
	return (
		<div style={{ backgroundColor: '' }}>
			<BrowserRouter>
				<AppRouter />
			</BrowserRouter>
		</div>
	);
}
export default App;
