import Card from '../../components/Card'
import ap_review from '../../reviews'
const ernstyoung = () => {
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
            <h1>Ernst and Young &nbsp;<img src='../images/ernst-young.png' className='im'></img></h1><br/><br/>
            <p className='lead'>Ernst & Young Global Limited, commonly known as Ernst & Young or simply EY, is a multinational professional services network with headquarters in London, England. EY is one of the largest professional services networks in the world</p>
            <br/>  <div className='comp-grid'>
                <Card title='Interview Questions' text='Practice ernst and young Interview Questions' link='/ernst-young/interview' link_text= 'Click Here' width='75'></Card>
                <Card title='Resources' text='View Resources' link='/ernst-young/resources' link_text= 'Click Here' width='75'></Card>
            </div><br/>
            <Card title='Job Openings' text='Job Openings @ernst and young' link_text= 'Click Here' width='100' link='/ernst-young/jobs'></Card>
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

export default ernstyoung;

