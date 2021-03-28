import Tracker from '../../components/Tracker'
import server from '../../config/server'

const interview = (props) => {
  var value = 0;
  var checks=[1]
    function w(){
      
        if(process.browser){
            var cb = document.getElementById('cb');
            if(cb.checked==true){
              var elem = document.getElementById("progress");
              elem.setAttribute('value', value+10)
              value+=10;
            
            }
          } 
        }
      
    return (
        <div className='container'> <br/>
        <h3>Jobs at Microsoft </h3><br/>
           <table className='table table-striped'>
            <thead>
              <tr>
                <th>id</th>
                <th>Position</th>
                <th>URL</th>
              </tr>
            </thead>
           {props.questions.map(question=>(<tr><td>{question.id}</td><td>{question.JobPosition}</td><td><a href= {question.url} className='btn btn-primary'> Apply </a></td></tr>))}          
          </table>
        </div>
    );
}

export default interview;

export async function getStaticProps() {
    const res = await fetch(`${server}/api/jobs/microsoft_jobs`)
    const questions = await res.json()
    return {
      props: {questions}, 
    }
  }