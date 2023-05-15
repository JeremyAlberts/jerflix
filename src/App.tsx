import jerflix from './assets/jerflix.png'
import MovieRow from './components/MovieRow'

function App() {

  return (
    <>
      <div className="w-100 header text-center d-flex justify-content-center align-items-center">
        <img className='justify-content-center' src={jerflix} alt="" />
      </div>
      <div className="container">
        <MovieRow/>
        <MovieRow/>
        <MovieRow/>
      </div>
    </>
  )
}

export default App
