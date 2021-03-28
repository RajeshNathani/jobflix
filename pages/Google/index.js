import Card from '../../components/Card'
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
const google = () => {    
    
    return (
        <div className='container'><br/>
            <h1>Google &nbsp;<img src='../images/google.png' className='im'></img></h1><br/><br/>
            <p className='lead'>Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware</p>
            <div className='comp-grid'>
                <Card title='Interview Questions' text='Practice Google Interview Questions' link='/Google/interview' link_text= 'Click Here' width='75'></Card>
                <Card title='Resources' text='view Resources' link='/Google/resources' link_text= 'Click Here' width='75'></Card>
            </div><br/>
            <Card title='Job Openings' text='jobs @Google' link='/Google/jobs' link_text= 'Click Here' width='100'></Card><br/>
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

export default google;