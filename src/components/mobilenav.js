import { useState } from "react";
import logo from '../images/logo.svg';
import close from '../images/icon-close.svg'
import hamburger from '../images/icon-hamburger.svg'
import arrow from '../images/icon-arrow-dark.svg'
import Herotext from "./herotext";



function Mobilenav() {

const [change, setChange] = useState(true)
const [drop, setDrop] = useState(
[
  { Id: 1,
    Name: "Product",
  Value: false},
  { Id: 2,
    Name: "Company",
  Value: false},
  { Id: 3,
    Name: "Connect",
  Value: false},
])

const handleChange = () => {

setChange(!change)

}

const handleOnclick = (i) => {
  
    const temp = [...drop];
  temp[i].Value = !temp[i].Value;
  setDrop(temp);

} 

const navigation = (
<>
  <div className="mobilemenu">

  <ul >     
  {drop.map((item, i) => (
  <div key={item.Id}><li style={{fontWeight : drop[i].Value && '300'}} onClick={() => handleOnclick(i)}>{item.Name}&nbsp;<img src={arrow} alt='arrow' className={drop[i].Value === false ? "arrow" : "arrowreversed"}></img></li></div>))} 
  </ul>

 { drop[2].Value && 
  <ul className="connectmenu" style={{fontWeight:'300'}}>
  <li key='contactmobile'>Contact</li>
  <li key='newslettermobile'>Newsletter</li>  
  <li key='linkedinmobile'>Linkedin</li>  
  </ul> 
 } 
  

  <div className="borderabove">
   <p style={{fontWeight: 700}}>Login</p>
   <button>Sign Up</button>
   </div>
   </div>


   </>
   )

   

return (
 
  <>
  <nav className="mobilenav">

   <div className="uppertwo" >
  <img src={logo} alt="logo" className="logo"></img>
  { change === true ? <img src={hamburger} alt='hamburger' className="hamburger" onClick={handleChange}></img> : <img alt='X' src={close} className="iconclosed" onClick={handleChange}></img>}
  </div>

  {change === false ? navigation : null}
  {change === true ? <Herotext className="heromobile"/> : null}
 
  </nav>

  
  </>


)



}



export default Mobilenav;

