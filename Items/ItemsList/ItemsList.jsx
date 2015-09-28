ItemsList = React.createClass({
  getInitialState() {
    return {};
  },
  render() {
    return (
      <ul>
        {this.props.items.map(function (item) {
          return <li key={item._id}>{item.content}</li>;
        })}
      </ul>
    );
  }
});