import Tracker from '../../components/Tracker'
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
        <h3>Progress: </h3>
           <Tracker value={value}></Tracker><br/>
           <table className='table table-striped'>
            <thead>
              <tr>
                <th>Completed</th>
                <th>Problem</th>
                <th>URL</th>
              </tr>
            </thead>
           {props.questions.map(question=>(<tr><td><input type='checkbox' id='cb' onClick={w}></input></td><td>{question.problem}</td><td><a href= {question.url} className='btn btn-primary'> Solve </a></td></tr>))}          
          </table>
        </div>
    );
}

export default interview;

export async function getStaticProps() {
    const res = await fetch(`http://localhost:3000/api/interview/google`)
    const questions = await res.json()
    return {
      props: {questions}, 
    }
  }