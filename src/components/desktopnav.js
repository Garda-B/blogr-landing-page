
import logo from '../images/logo.svg';
import { useState } from 'react'
import arrow from '../images/icon-arrow-light.svg'
import Herotext from './herotext'



function Desktopnav() {

    const [drop, setDrop] = useState(
        [
            {
                Id: 1,
                Name: "Product",
                Value: false
            },
            {
                Id: 2,
                Name: "Company",
                Value: false
            },
            {
                Id: 3,
                Name: "Connect",
                Value: false
            },
        ])

    const handleOnclick = (i) => {

        const temp = [...drop];
        temp[i].Value = !temp[i].Value;
        setDrop(temp);

              
    }
     
    const dropDown = (
        <ul className='desktopdropdown'>
            <li key='contactdekstop'>Contact</li>
            <li key='newsletterdesktop'>Newsletter</li>
            <li key='linkedindesktop'>LinkedIn</li>
        </ul>

    )


    return (
        <main>
            <div className="desktophero">
                <img src={logo} alt="logo" className='desktoplogo'></img>
                <div >
                    <ul className="desktopnav">

                        {drop.map((item, i) =>
                            <li key={(drop[i].Id)+3} onClick={() => handleOnclick(i)}><span>{item.Name}</span>&nbsp;&nbsp;<img key={i} alt='arrow' src={arrow} className={drop[i].Value === false ? "arrow" : "arrowreversed"}></img></li>
                        )}


                    </ul>

                    {drop[2].Value && dropDown}
                    
                </div>

               
                <button>Login</button>
                <button>Sign up</button>
                
                
            </div>
           
            <Herotext />

            
          
        </main>

    )
}


export default Desktopnav;