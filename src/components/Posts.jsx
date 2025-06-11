
import './post.css'

export const Posts = (props) => {
    return(
        <>
            <div className="post">
                <img src={props.img}/>
                {console.log(props)}
                <h3>{props.place}</h3>
                <h4>{props.type}</h4>
                <button onClick={props}>
                    View Menu
                </button>
            </div>
        </>
    )
}