import { Link } from 'react-router';

module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<div>
					<ul className="games-nav">
						<li><Link activeClassName="active" to="/games/catgame">Catgame</Link></li>
					</ul>
				</div>
				<div>
					{this.props.children}
				</div>
			</div>
		)
	}
})