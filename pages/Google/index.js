import Card from '../../components/Card'

const google = () => {    
    
    return (
        <div className='container'><br/>
            <h1>Google &nbsp;<img src='../images/google.png' className='im'></img></h1><br/><br/>
            <p className='lead'>Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware</p>
            <div className='comp-grid'>
                <Card title='Interview Questions' text='Practice Apple Interview Questions' link_text= 'Click Here' width='75'></Card>
                <Card title='Resources' text='Practice Apple Interview Questions' link_text= 'Click Here' width='75'></Card>
            </div><br/>
            <Card title='Job Openings' text='Practice Apple Interview Questions' link_text= 'Click Here' width='100'></Card>
        </div>
    );
}

export default google;