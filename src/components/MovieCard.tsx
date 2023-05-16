import { Link } from "react-router-dom";

interface Video {
  video: {
      id: string;
      title: string;
      thumbnail: string;
  };
}

function MovieCard(props: Video) {
  console.log(props.video)

  return (
    <div className="col-xxl-3 col-md-4 col-sm-6 col-12">
        <span className="movieCard position-relative w-100">
        {/* <Link to="/video/1"> */}
            <img className='thumbnail w-100 d-block' src={props.video.thumbnail} alt="movie" />
            <img className='play w-50 position-absolute' src="https://iconsplace.com/wp-content/uploads/_icons/800080/256/png/play-icon-13-256.png" alt="" />
        {/* </Link> */}
        </span>
    </div>
  )
}

export default MovieCard
