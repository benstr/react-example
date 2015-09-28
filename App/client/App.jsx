App = React.createClass({
  getInitialState() {
    return {};
  },
  render() {
    return (
      <div>
        <h1>Meteor-React Demo</h1>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
});