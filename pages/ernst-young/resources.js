const resources = () => {
    return (
        <div className='container'>
            <br/><h1>Resources</h1> <br/>
            <div className='re-grid'>
            <iframe width="460" height="315" src="https://www.youtube.com/embed/3ocOyVYBdIs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                
            <iframe width="560" height="315" src="https://www.youtube.com/embed/d0sIeyEU7EA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            </div><br/>
           <h3>Articles: </h3><br/>
           <div class="alert alert-primary" role="alert">
                <a href='https://www.caclubindia.com/articles/how-to-prepare-for-an-interview-in-big-4--32653.asp' className=''> How to crack big 4 interviews</a>
            </div>
            <br/>
            <h3>Courses:</h3><br/>
            <div class="alert alert-primary" role="alert">
                <a href='https://www.udemy.com/course/clearbig4interview/' className=''> How to clear EY PwC KPMG Deloitte Big 4 interview? | For CAs</a>
            </div>
        </div>
    );
}

export default resources;