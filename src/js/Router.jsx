import { Router, Route, browserHistory, IndexRoute, IndexRedirect } from 'react-router';
const App = require("./components/AppContainer.jsx");

const Home = require("./components/userprofile/Profile.jsx");
const Games = require("./components/games/Games.jsx");
const Catgame = require("./components/games/Catgame.jsx");
const Statistic = require("./components/statistic/Statistic.jsx");
const page_404 = require("./components/util-pages/404page.jsx");

module.exports = React.createClass({
	render: function() {
		return (
			<Router history={browserHistory}> 
				<Route component={App}> 
					<Route path="/" component={Home}/>
					<Route path="games" component={Games} >
						<IndexRedirect to="catgame"/>
						<Route path="catgame" component={Catgame}/>
					</Route> 
					<Route path="statistic" component={Statistic}/>
					<Route path="*" component={page_404} />
				</Route>
			</Router>
		)	
	}
})	

