import content from '../data'
import MovieRow from '../components/MovieRow'

function MoviesPage() {

    return (
        <>
            {content.map(list => (
                <MovieRow key={list.catId} title={list.title} videos={list.videos} />
            ))}
        </>
    )
}

export default MoviesPage