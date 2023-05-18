import kagura from '../assets/kagura.mp4'
import { useParams } from "react-router-dom";
import MovieRow from '../components/MovieRow'
import content from '../data'

function Video() {
    const {catId, videoId} = useParams();

    const list = content.find(list => String(list.catId) === catId)
    const video = list?.videos.find(video => video.id === videoId)

    const test: any = {...list}

    if (test != undefined) {
      test.videos = test.videos?.filter(video => video.id != videoId);
    }

    return (
      <>
        <div className="row">
          <div className="col">
            <h1 className='d-flex title'>{video?.title}</h1>
          </div>
        </div>
        <div className="row">
            <div className="col">
                <div className='video-container'>
                    <video id="vid1" className="video-js" data-setup='{}' controls>
                        <source src={video.source} type='video/mp4'/>
                    </video>
                </div>
            </div>
        </div>
        <MovieRow list={test} />
      </>
    )
  }
  
  export default Video
  