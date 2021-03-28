const resources = () => {
    return (
        <div className='container'>
            <br/><h1>Resources</h1> <br/>
            <div className='re-grid'>
                <iframe width="460" height="315" src="https://www.youtube.com/embed/HYK5lpkKBPo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <iframe width="460" height="315" src="https://www.youtube.com/embed/vdjhil3OYYs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div><br/>
           <h3>Articles: </h3><br/>
           <div class="alert alert-primary" role="alert">
                <a href='https://www.interviewkickstart.com/blog/apple-interview-questions-to-crack-the-coding-interview' className=''> How to crack interviews</a>
            </div>
            <div class="alert alert-primary" role="alert">
                <a href='https://www.businessinsider.in/tech/the-trickiest-questions-apple-will-ask-in-a-job-interview/articleshow/46882077.cms' className=''> Tricky Questions</a>
            </div>
        </div>
    );
}

export default resources;