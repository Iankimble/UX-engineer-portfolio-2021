import NavigationBar from './NavigationBar';
import { Route } from 'react-router-dom';

// Main component pages
import Home from '../Home';
import Works from '../Works';
import Services from '../Services';
import About from '../About';
import Faqs from '../Faqs';
import Contact from '../Contact';

// Nest pages for services
import Strategy from '../service_pages/StrategyService';
import Design from '../service_pages/DesignService';
import Development from '../service_pages/DevelopmentService';

// Nexts pages for proejcts
import Coindexter from '../portfolio_pages/Coindexter';
import DealMaker from '../portfolio_pages/Dealmaker';
import Fstbrk from '../portfolio_pages/Fstbrk';
import BTP from '../portfolio_pages/BTP';

// import PageNotFound from ''

function AppRouter() {
	return (
		<div>
			{/* Navbar*/}
			<NavigationBar />

			{/* Navbar routes*/}
			<Route exact path="/" component={Home} />
			<Route exact path="/works" component={Works} />
			<Route exact path="/services" component={Services} />
			<Route exact path="/about" component={About} />
			<Route exact path="/faqs" component={Faqs} />
			<Route exact path="/contact" component={Contact} />

			{/* Nested Routes*/}
			<Route exact path="/services/strategy" component={Strategy} />
			<Route exact path="/services/design" component={Design} />
			<Route exact path="/services/development" component={Development} />

			<Route exact path="/works/coindexter" component={Coindexter} />
			<Route exact path="/works/dealmaker" component={DealMaker} />
			<Route exact path="/works/fstbrk" component={Fstbrk} />
			<Route exact path="/works/btp" component={BTP} />
		</div>
	);
}

export default AppRouter;
