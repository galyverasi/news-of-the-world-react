import { Link } from 'react-router-dom'
import Favorites from './Favorites'

function Landing(props) {
    const topNews = props.news.map((article, i) => {
        <div>
            <Link to={`/Display/`} state={article}> <p>{article.title}</p></Link>
            <button onClick={() => props.clicky(article)}>Add to Favorites</button>
        </div>
    })
    return (
        <div>
            <h1>{props.search === '' ? 'TopNews' : props.search}</h1>
            <div>
                {topNews}
                <Favorites faves={props.faves} />
            </div>
        </div>
    )
}
export default Landing;