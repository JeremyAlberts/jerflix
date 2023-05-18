import { Link } from "react-router-dom";
import play  from '../assets/play.png';

function MovieCard(props: any) {

  return (
    <div className="col-xxl-3 col-md-4 col-sm-6 col-12">
        <div className="movieCard position-relative w-100">
        <Link to={`/category/${props.catId}/video/${props.video.id}`}>
            <img className='thumbnail w-100 d-block' src={props.video.thumbnail} alt="movie" />
            <img className='play w-50 position-absolute' src={play} alt="" />
            <h5 className="videoTitle">{props.video.title}</h5>
        </Link>
        </div>
    </div>
  )
}

export default MovieCard
