const React = require('react')
const ShowCard = require('./ShowCard')
const { object, string, arrayOf } = React.PropTypes
const Header = require('./Header')
const { connector } = require('./Store')

const Search = React.createClass({
  propTypes: {
    shows: arrayOf(object),
    searchTerm: string
  },
  render () {
    return (
      <div className='container'>
        <Header showSearch />
        <div className='shows'>
          {this.props.shows
            .filter(show => `${show.title}${show.description}`.toUpperCase().includes(this.props.searchTerm.toUpperCase()))
            .map(show => <ShowCard key={show.imdbID} {...show} />)}
        </div>
      </div>
    )
  }
})

module.exports = connector(Search)
