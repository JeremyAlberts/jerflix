import content from '../data'
import MovieRow from '../components/MovieRow'

function MoviesPage() {

    return (
        <>
            {content.map(list => (
                <MovieRow key={list.catId} list={list} />
            ))}
        </>
    )
}

export default MoviesPage