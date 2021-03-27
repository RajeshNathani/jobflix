
const Tracker = ({value}) => {
    return (
        <div className=''>
            <progress className= "progress-bar progress-bar-striped progress-bar-animated" value={value} role="progressbar" max='100' id='progress'></progress>
        </div> 
    );
}

export default Tracker;