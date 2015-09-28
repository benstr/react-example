ItemsList = React.createClass({
  getInitialState: function() {
    return {};
  },
  render: function () {
    return (
      <ul>
        {this.props.items.map(function (item) {
          return <li key={item._id}>{item.content}</li>;
        })}
      </ul>
    );
  }
});