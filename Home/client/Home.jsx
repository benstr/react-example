HomePage = React.createClass({
  render() {
    return (
      <div>
        <h1>Welcome Home</h1>
        <ReactRouter.Link to="/items">Show me the items.</ReactRouter.Link>
      </div>
    );
  }
});