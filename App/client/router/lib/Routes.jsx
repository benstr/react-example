const {Router, Route, IndexRoute} = ReactRouter;

const history = ReactRouter.history.useQueries(ReactRouter.history.createHistory)();

Meteor.startup(() => {
  React.render((
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="items" component={ItemsPage}/>
        <Route path="*" component={NotFound}/>
      </Route>
    </Router>
  ), document.body);
});