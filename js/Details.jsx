const React = require('react')
const Header = require('./Header')
const { connector } = require('./Store')

class Details extends React.Component {
  assignShow (id) {
    return this.props.shows.filter(show => show.imdbID === id)[0]
  }
  render () {
    const { title, description, year, poster, trailer } = this.assignShow(this.props.params.id)
    return (
      <div className='container'>
        <Header />
        <div className='video-info'>
          <h1 className='video-title'>{title}</h1>
          <h2 className='video-year'>({year})</h2>
          <img src={`public/img/posters/${poster}`} className='video-poster' />
          <p className='video-description'>{description}</p>
        </div>
        <div className='video-container'>
          <iframe src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`} frameBorder='0' allowFullScreen />
        </div>
      </div>
    )
  }
}

const { arrayOf, object } = React.PropTypes

Details.propTypes = {
  shows: arrayOf(object).isRequired,
  params: object.isRequired
}

module.exports = connector(Details)
