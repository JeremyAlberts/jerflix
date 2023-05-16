import jerflix from './assets/jerflix.png'
import MyRouter from './MyRouter'
import MoviePage from './pages/MoviesPage'

function App() {

  return (
    <>
      <div className="w-100 header text-center d-flex justify-content-center align-items-center">
        <img className='justify-content-center' src={jerflix} alt="" />
      </div>
      <div className="container">
        <MoviePage/>
        {/* <MovieRow/> */}
        {/* <Video/> */}
        {/* <MyRouter/> */}
      </div>
    </>
  )
}

export default App
