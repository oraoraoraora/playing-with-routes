import { Link } from 'react-router';

module.exports = React.createClass({
  render: function() {
    return (
      <div className="app-main">
      	<div className="app-header">
      		<ul className="nav">
      			<li><Link activeClassName="active" to="/">Home</Link></li>
      			<li><Link activeClassName="active" to="/games">Games</Link></li>
      			<li><Link activeClassName="active" to="/statistic">Statistic</Link></li>
      		</ul>
      	</div>
      	<div className="app-body">
      		{this.props.children}
      	</div>
      </div>
    )
  }
})