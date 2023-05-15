function MovieCard() {

  return (
    <div className="col-xxl-3 col-md-4 col-sm-6 col-12">
        <span className="movieCard position-relative w-100">
            <img className='thumbnail w-100 d-block' src="https://e1.pxfuel.com/desktop-wallpaper/337/674/desktop-wallpaper-tanjiro-kamado-hinokami-kagura-tanjiro-hinokami-kagura.jpg" alt="movie" />
            <img className='play w-50 position-absolute' src="https://iconsplace.com/wp-content/uploads/_icons/800080/256/png/play-icon-13-256.png" alt="" />
        </span>
    </div>
  )
}

export default MovieCard
