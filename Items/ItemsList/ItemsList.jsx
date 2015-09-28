ItemsList = React.createClass({
  getInitialState: function() {
    return {};
  },
  addItem: function(e) {
    e.preventDefault();
    var item = React.findDOMNode(this.refs.input).value;

    ItemsCollection.insert({'content': item});
    React.findDOMNode(this.refs.input).value = "";
  },
  render: function () {
    return (
      <div>
        <ul>
          {this.props.items.map(function (item) {
            return <li key={item._id}>{item.content}</li>;
          })}
        </ul>
        <AddItem />
        <ReactRouter.Link to="/">Take me back home</ReactRouter.Link>
      </div>
    );
  }
});