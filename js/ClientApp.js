var React = require('react')
var ReactDOM = require('react-dom')
var MyTitle = require('./MyTitle')

var div = React.DOM.div
var MyTitleFact = React.createFactory(MyTitle)

var MyFirstComponent = (
div(null,
  MyTitleFact({title: 'Props rock', color: 'papayawhip'}),
  MyTitleFact({title: 'Props are killer', color: 'peru'}),
  MyTitleFact({title: 'Props are the best', color: 'mediumaquamarine'})
)
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
