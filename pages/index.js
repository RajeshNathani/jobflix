import CompanyHome from "../components/CompanyHome";
import Link from 'next/link'
const index = () => {
  
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
        <h3>Available Companies</h3><br/>
        <div className='gr'>
          <a href='/apple/apple'><CompanyHome name='Apple' source='images/apple.png'></CompanyHome></a>
          <a href='/Google/google'><CompanyHome name='Google' source='images/google.png'></CompanyHome></a>
          <a href='/amazon/'><CompanyHome name='Amazon' source='images/amazon.png'></CompanyHome></a>
          <a href='/netflix/'><CompanyHome name='Netflix' source='images/netflix.png'></CompanyHome></a>
          <a href='/Facebook/'><CompanyHome name='Facebook' source='images/facebook.png'></CompanyHome></a>
          <a href='/microsoft'><CompanyHome name='Microsoft' source='images/microsoft.png'></CompanyHome></a>
        </div>
    </div>
  );
}

export default index; <h1>Some Name</h1>