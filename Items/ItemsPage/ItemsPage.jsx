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
        <div id="items-page" class="loading">
          <ReactRouter.Link to="/">Take me back home</ReactRouter.Link>
          <h2>Loading</h2>
        </div>
      );
    }

    // Render a component and pass down the loaded data
    return (
      <div id="items-page">
        <ReactRouter.Link to="/">Take me back home</ReactRouter.Link>
        <h2>Items</h2>
        <ItemsList items={this.data.items}/>
        <AddItem />
      </div>
    );
  }
});