import Card from '../../components/Card'
import ap_review from '../../reviews'
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
    function w(){
        if(process.browser){
            var elem = document.getElementById("progress");
            elem.setAttribute('value', value+10)
            value+=10;
        }
        
    }
    return (
        <div className='container'><br/>
            <h1>Apple &nbsp;<img src='../images/apple.png' className='im'></img></h1><br/><br/>
            <p className='lead'>Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, develops, and sells consumer electronics, computer software, and online services.</p>
            <br/>  <div className='comp-grid'>
                <Card title='Interview Questions' text='Practice Apple Interview Questions' link='/apple/interview' link_text= 'Click Here' width='75'></Card>
                <Card title='Resources' text='View Resources' link='/apple/resources' link_text= 'Click Here' width='75'></Card>
            </div><br/>
            <Card title='Job Openings' text='Job Openings @Apple' link_text= 'Click Here' width='100' link='/apple/jobs'></Card>
            <br/>
            <h2>Reviews</h2> <hr/>
            <div id='rev'>
                
            </div>
            <input className='form-control' type='text' placeholder='Name' id='rname'></input> <br/>
            <input className='form-control' type='text' placeholder='Review' id='review'></input> <br/>
            <button onClick={add} className='btn btn-primary'>Add Review</button>
 <br/><br/>       </div>
    );
}

export default apple;

