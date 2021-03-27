const Card = ({title, text,link, link_text, width}) => {
    return (
        <div>
            <div class= {`card w-${width}`}>
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">{text}</p>
                <a href={link} class="card-link btn btn-primary">{link_text}</a>
            </div>
            </div>
        </div>
    );
}

export default Card;