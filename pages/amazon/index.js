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
                elem.innerHTML += `<h4>${reviews.slice(-1)[0].name}</h4><h5>${reviews.slice(-1)[0].review}</h5>`;            
        }
    }
    return (
        <div className='container'><br/>
            <h1>Amazon &nbsp;<img src='../images/amazon.png' className='im'></img></h1><br/><br/>
            <p className='lead'>Amazon.com, Inc. is an American multinational technology company based in Seattle, Washington, which focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence.</p>
            <br/>  <div className='comp-grid'>
                <Card title='Interview Questions' text='Practice Amazon Interview Questions' link='/amazon/interview' link_text= 'Click Here' width='75'></Card>
                <Card title='Resources' text='View Resources' link='/amazon/resources' link_text= 'Click Here' width='75'></Card>
            </div><br/>
            <Card title='Job Openings' text='Jobs @Amazon'  link='/amazon/job' link_text= 'Click Here' width='100'></Card> <br/>
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