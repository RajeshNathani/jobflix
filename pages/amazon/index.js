import Card from '../../components/Card'

const apple = () => {
    var value = 0;
    function w(){
        if(process.browser){
            var elem = document.getElementById("progress");
            elem.setAttribute('value', value+10)
            value+=10;
        }
        
    }
    return (
        <div className='container'><br/>
            <h1>Amazon &nbsp;<img src='../images/amazon.png' className='im'></img></h1><br/><br/>
            <p className='lead'>Amazon.com, Inc. is an American multinational technology company based in Seattle, Washington, which focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence.</p>
            <br/>  <div className='comp-grid'>
                <Card title='Interview Questions' text='Practice Amazon Interview Questions' link='/amazon/interview' link_text= 'Click Here' width='75'></Card>
                <Card title='Resources' text='Practice Amazon Interview Questions' link_text= 'Click Here' width='75'></Card>
            </div><br/>
            <Card title='Job Openings' text='Practice Amazon Interview Questions' link_text= 'Click Here' width='100'></Card>
        </div>
    );
}

export default apple;