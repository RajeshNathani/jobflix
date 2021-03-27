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
            <h1>Facebook &nbsp;<img src='../images/facebook.png' className='im'></img></h1><br/><br/>
            <p className='lead'>Facebook, Inc., is an American technology conglomerate based in Menlo Park, California. It was founded by Mark Zuckerberg, along with his fellow roommates and students at Harvard College</p>
            <br/>  <div className='comp-grid'>
                <Card title='Interview Questions' text='Practice Facebook Interview Questions' link='/Facebook/interview' link_text= 'Click Here' width='75'></Card>
                <Card title='Resources' text='Practice Amazon Facebook Questions' link_text= 'Click Here' width='75'></Card>
            </div><br/>
            <Card title='Job Openings' text='Practice Facebook Interview Questions' link_text= 'Click Here' width='100'></Card>
        </div>
    );
}

export default apple;