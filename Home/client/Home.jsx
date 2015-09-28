HomePage = React.createClass({
  render() {
    return (
      <div id="home-page">
        <ReactRouter.Link to="/items">Show me the items.</ReactRouter.Link>
        <h2>Welcome Home</h2>
      </div>
    );
  }
});