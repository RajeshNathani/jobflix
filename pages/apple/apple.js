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
            <h1>Apple &nbsp;<img src='../images/apple.png' className='im'></img></h1><br/><br/>
            <p className='lead'>Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, develops, and sells consumer electronics, computer software, and online services.</p>
            <br/>  <div className='comp-grid'>
                <Card title='Interview Questions' text='Practice Apple Interview Questions' link='/apple/interview' link_text= 'Click Here' width='75'></Card>
                <Card title='Resources' text='Practice Apple Interview Questions' link_text= 'Click Here' width='75'></Card>
            </div><br/>
            <Card title='Job Openings' text='Practice Apple Interview Questions' link_text= 'Click Here' width='100'></Card>
        </div>
    );
}

export default apple;