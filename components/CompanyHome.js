const CompanyHome = ({source, name}) => {
    return (
        <div className='company'>
            <img src={source}></img> <br/>
            <h4>{name}</h4>
        </div>
    );
}

export default CompanyHome;