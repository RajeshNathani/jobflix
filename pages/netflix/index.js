import Card from '../../components/Card'

const apple = () => {
    var value = 0;
    const reviews = [{name: 'Rajesh', review: 'Great Company'}]
    function add(){
        if(process.browser){
        var name = document.getElementById('rname').value;
        var review = document.getElementById('review').value;
        reviews.push({name: name, review: review})
        
                var elem = document.getElementById("rev");
                elem.innerHTML += `<h4>${reviews.slice(-1)[0].name}</h4><h5>${reviews.slice(-1)[0].review}</h5><br/><hr>`;            
        }
    }
    return (
        <div className='container'><br/>
            <h1>Netflix &nbsp;<img src='../images/netflix.png' className='im'></img></h1><br/><br/>
            <p className='lead'>Netflix, Inc. is an American over-the-top content platform and production company headquartered in Los Gatos, California. Netflix was founded in 1997 by Reed Hastings and Marc Randolph in Scotts Valley, California.</p>
            <br/>  <div className='comp-grid'>
                <Card title='Interview Questions' text='Practice Netflix Interview Questions' link='netflix/interview' link_text= 'Click Here' width='75'></Card>
                <Card title='Resources' text='View Resources' link='/netflix/resources' link_text= 'Click Here' width='75'></Card>
            </div><br/>
            <Card title='Job Openings' text='Jobs @Netflix' link='/netflix/jobs' link_text= 'Click Here' width='100'></Card><br/>
            <h2>Reviews</h2> <hr/>

            <div id='rev'>
                
                </div>
                <input className='form-control' type='text' placeholder='Name' id='rname'></input> <br/>
                <input className='form-control' type='text' placeholder='Review' id='review'></input> <br/>
                <button onClick={add} className='btn btn-primary'>Add Review</button>
     <br/><br/> 
        </div>
    );
}

export default apple;