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
            <h1>Microsoft &nbsp;<img src='../images/microsoft.png' className='im'></img></h1><br/><br/>
            <p className='lead'>Microsoft Corporation is an American multinational technology company with headquarters in Redmond, Washington. It develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.</p>
            <br/>  <div className='comp-grid'>
                <Card title='Interview Questions' text='Practice Microsoft Interview Questions' link='/microsoft/interview' link_text= 'Click Here' width='75'></Card>
                <Card title='Resources' text='Practice Microsoft Interview Questions' link_text= 'Click Here' width='75'></Card>
            </div><br/>
            <Card title='Job Openings' text='Practice Microsoft Interview Questions' link_text= 'Click Here' width='100'></Card>
        </div>
    );
}

export default apple;