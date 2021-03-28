import Card from '../../components/Card'

const microsoft = () => {
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
            <h1>Microsoft &nbsp;<img src='../images/microsoft.png' className='im'></img></h1><br/><br/>
            <p className='lead'>Microsoft Corporation is an American multinational technology company with headquarters in Redmond, Washington. It develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.</p>
            <br/>  <div className='comp-grid'>
                <Card title='Interview Questions' text='Practice Microsoft Interview Questions' link='/microsoft/interview' link_text= 'Click Here' width='75'></Card>
                <Card title='Resources' text='View Resources' link='/microsoft/resources/' link_text= 'Click Here' width='75'></Card>
            </div><br/>
            <Card title='Job Openings' text='Jobs @Microsoft' link='/microsoft/jobs' link_text= 'Click Here' width='100'></Card><br/>
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

export default microsoft;