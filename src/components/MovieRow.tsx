import MovieCard from './MovieCard'

interface VideoList {
  title: string;
  videos: any[];
}

function MovieRow(props: VideoList) {

    return (
      <>
        <div className="row">
          <div className="col">
            <h1 className='d-flex title'>{props.title}</h1>
          </div>
        </div>
        <div className="row">
          {props.videos.map(video => (
            <MovieCard video={video}/>
          ))}          
        </div>
      </>
    )
  }
  
  export default MovieRow
  