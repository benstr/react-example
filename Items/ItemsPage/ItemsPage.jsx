ItemsPage = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    // This is the place to subscribe to any data you need
    var handle = Meteor.subscribe("items");

    return {
      itemsLoading: ! handle.ready(), // Use handle to show loading state
      items: ItemsCollection.find().fetch()
    };
  },
  render() {
    // Show a loading indicator if data is not ready
    if (this.data.itemsLoading) {
      return (
        <div>
          <h1>Loading</h1>
        </div>
      );
    }

    // Render a component and pass down the loaded data
    return (
      <ItemsList items={this.data.items}/>
    );
  }
});