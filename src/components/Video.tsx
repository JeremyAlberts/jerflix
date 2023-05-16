import kagura from '../assets/kagura.mp4'
import { useParams } from "react-router-dom";

function Video() {
    let { id } = useParams();

    return (
      <>
        <div className="row">
          <div className="col">
            <h1 className='d-flex title'>Title + {id}</h1>
          </div>
        </div>
        <div className="row">
            <div className="col">
                <div className='video-container'>
                    <video id="vid1" className="video-js" data-setup='{}' controls>
                        <source src={kagura} type='video/mp4'/>
                    </video>
                </div>
            </div>
        </div>
      </>
    )
  }
  
  export default Video
  