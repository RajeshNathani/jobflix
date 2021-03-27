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
            <h1>Netflix &nbsp;<img src='../images/netflix.png' className='im'></img></h1><br/><br/>
            <p className='lead'>Netflix, Inc. is an American over-the-top content platform and production company headquartered in Los Gatos, California. Netflix was founded in 1997 by Reed Hastings and Marc Randolph in Scotts Valley, California.</p>
            <br/>  <div className='comp-grid'>
                <Card title='Interview Questions' text='Practice Netflix Interview Questions' link='netflix/interview' link_text= 'Click Here' width='75'></Card>
                <Card title='Resources' text='Practice Netflix Interview Questions' link_text= 'Click Here' width='75'></Card>
            </div><br/>
            <Card title='Job Openings' text='Practice Netflix Interview Questions' link_text= 'Click Here' width='100'></Card>
        </div>
    );
}

export default apple;