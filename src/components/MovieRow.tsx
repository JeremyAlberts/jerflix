import MovieCard from './MovieCard'

function MovieRow() {

    return (
      <>
        <div className="row">
          <div className="col">
            <h1 className='d-flex title'>Title</h1>
          </div>
        </div>
        <div className="row">
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
        </div>
      </>
    )
  }
  
  export default MovieRow
  