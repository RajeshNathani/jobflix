import CompanyHome from "../components/CompanyHome";
import Link from 'next/link'
const index = () => {
  function filter(){
    if(process.browser){
      var field = document.getElementById('field');
      var value = field.options[field.selectedIndex].value;
      if(value=='tech'){
        document.getElementById('commerce').style.display='none';
        document.getElementById('tech').style.display='block';

      }
      else{
        document.getElementById('tech').style.display='none';
        document.getElementById('commerce').style.display='block';
      }
    }
  }
  return (
    <div className ='container'> 
    <br/>
        <div className='contain'>
          <img src='images/apple.png' className='im'></img>
          <img src='images/google.png' className='im'></img> 
          <img src='images/amazon.png' className = 'im'></img>
          <img src='images/netflix.png' className = 'im'></img>
        </div><br/>
        <center><h2>Get Your Dream Job</h2></center> <br></br>
        <label for='skills'><h5>Filters: </h5> </label>&nbsp; &nbsp;
        <input type='text' name='skills' id='skills' className='form-control' placeholder='Skills'></input> <br/>
        <div class="input-group mb-3">
        <div class="input-group-prepend">
          <label class="input-group-text"  for="field">Fields</label>
        </div>
        <select class="custom-select" id="field">
          <option selected>Choose...</option>
          <option value="tech">Tech</option>
          <option value="commerce">Commerce</option>
        </select>
      </div>        
      <button className='btn btn-primary' onClick={filter}>Apply</button><br/><br/>
        <h3>Available Companies</h3><br/>
        <div className='gr'>
          <a href='/apple/apple' id='tech'><CompanyHome name='Apple' source='images/apple.png'></CompanyHome></a>
          <a href='/Google/' id='tech'><CompanyHome name='Google' source='images/google.png'></CompanyHome></a>
          <a href='/amazon/' id='tech'><CompanyHome name='Amazon' source='images/amazon.png'></CompanyHome></a>
          <a href='/netflix/' id='commerce'><CompanyHome name='Netflix' source='images/netflix.png'></CompanyHome></a>
          <a href='/Facebook/' id='tech'><CompanyHome name='Facebook' source='images/facebook.png'></CompanyHome></a>
          <a href='/microsoft' id='tech'><CompanyHome name='Microsoft' source='images/microsoft.png'></CompanyHome></a>
          <a href='/pwc' id='commerce'><CompanyHome name='PwC' source='images/pwc.png'></CompanyHome></a>
          <a href='/ernst-young' id='commerce'><CompanyHome name='Ernst and Young' source='images/ernst-young.png'></CompanyHome></a>          
        </div><br/><br/>
    </div>
  );
}

export default index; <h1>Some Name</h1>