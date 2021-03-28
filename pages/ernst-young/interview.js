import server from '../../config/server'
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
              </tr>
            </thead>
           {props.questions.map(question=>(<tr><td><input type='checkbox' id='cb' onClick={w}></input></td><td>{question.problem}</td></tr>))}          
          </table>
        </div>
    );
}

export default interview;

export async function getStaticProps() {
    const res = await fetch(`${server}/api/interview/pwc`,
    {
      method: "GET",
      headers: {
        // update with your user-agent
        "User-Agent":
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36", 
        Accept: "application/json; charset=UTF-8",
      },
    }
    )
    
    const questions = await res.json()
    return {
      props: {questions}, 
    }
  }