import MovieCard from './MovieCard'

function MovieRow(props: any) {

    return (
      <>
        <div className="row">
          <div className="col">
            <h2 className='d-flex title'>{props.list.title}</h2>
          </div>
        </div>
        <div className="row videos">
          {props.list.videos.map((video: any) => (
            <MovieCard key={video.id} catId={props.list.catId} video={video}/>
          ))}          
        </div>
      </>
    )
  }
  
  export default MovieRow
  