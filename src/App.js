import Image_1 from './Asserts/1.png'
import Image_2 from './Asserts/2.png'
import Image_3 from './Asserts/3.png'
import Logo from './Asserts/logo.png'
import './App.css'
import { FaFacebook,  FaPhone,  FaChrome} from 'react-icons/fa';

function App() {
  return (
    <div>
      <div className="container">
        <div className="award-section">
          <img className='award' src={Image_1} alt="" />
          <div className='details'>
            <img className='logo' src={Logo} alt="" />
            <h4 className="top-heading">C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h4>
            <ul type="disc">
              <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for <br/> various projects across the globe to save energy.</li>
              <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the <br/> old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
            </ul>
            <img className='main-image' src={Image_2} alt="" />
            <p>Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh,<br/> Honorable Minister of State.</p>
          </div>
        </div>
        <div>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </div>
        <div className='equip-container'>
          <img className='equip-img' src={Image_3} alt="" />
          <center>
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors
        </center>
        </div>
        
        
        <div className='last-heading'>
          <h4>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h4>
        </div>
        <center>
          <span>CHEMICALS & PROCESS</span>
          <span> POWER</span>
          <span> WATER & WASTE WATER</span>
          <span> OILS & GAS</span>
          <span>PHARMA </span>
          <span>SUGARS & DISTILLERIES </span>
          <span>PAPER & PULP</span> 
          <span>MARINE & DEFENCE</span>
          <span> METAL & MINING</span> 
          <span>FOOD & BEVERAGE</span>
          <span> PETROCHEMICAL & REFINERIES</span>          
          <span>SOLAR</span>          
          <span>BUILDING</span>          
          <span>HVAC</span>          
          <span>FIRE FIGHTING </span>          
          <span style={{border:"none"}}>AGRICULTURE & RESIDENTIAL</span>  
          </center>        
      
      </div>
      <footer>
        <div><FaPhone size={25}/>Toll free 1800 200 1234</div>
        <div><FaFacebook size={25}/>www.facebook.com/cripumps</div>
        <div>< FaChrome size={25}/>www.crigroups.com</div>
      </footer>

    </div>
  );
}

export default App;
