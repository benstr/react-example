AddItem = React.createClass({
  getInitialState() {
    return {};
  },
  addItem(e) {
    e.preventDefault();
    var item = React.findDOMNode(this.refs.input).value;

    ItemsCollection.insert({'content': item});
    React.findDOMNode(this.refs.input).value = "";
  },
  render() {
    return (
      <form onSubmit={this.addItem}>
        <input type="text" ref="input"/>
        <button type="submit">Add Item</button>
      </form>
    );
  }
});