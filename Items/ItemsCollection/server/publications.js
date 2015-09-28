Meteor.publish("items", () => {
  return ItemsCollection.find();
});