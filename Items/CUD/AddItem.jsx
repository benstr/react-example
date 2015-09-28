AddItem = React.createClass({
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
        <form onSubmit={this.addItem}>
          <input type="text" ref="input"/>
          <button type="submit">Add Item</button>
        </form>
      </div>
    );
  }
});