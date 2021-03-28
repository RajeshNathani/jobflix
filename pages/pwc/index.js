import Card from '../../components/Card'
import ap_review from '../../reviews'
const pwc = () => {
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
            <h1>pwc &nbsp;<img src='../images/pwc.png' className='im'></img></h1><br/><br/>
            <p className='lead'>PricewaterhouseCoopers is a multinational professional services network of firms, operating as partnerships under the PwC brand. PwC ranks as the second-largest professional services network in the world and is considered one of the Big Four accounting firms, along with Deloitte, EY and KPMG.</p>
            <br/>  <div className='comp-grid'>
                <Card title='Interview Questions' text='Practice pwc Interview Questions' link='/pwc/interview' link_text= 'Click Here' width='75'></Card>
                <Card title='Resources' text='View Resources' link='/pwc/resources' link_text= 'Click Here' width='75'></Card>
            </div><br/>
            <Card title='Job Openings' text='Job Openings @pwc' link_text= 'Click Here' width='100' link='/pwc/jobs'></Card>
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

export default pwc;

