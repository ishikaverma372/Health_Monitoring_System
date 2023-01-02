import { ethers } from 'ethers';
import logo from '../assets/myproject.png';

const Navigation = ({ account, setAccount }) => {
    const connectHandler = async () => {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = ethers.utils.getAddress(accounts[0])
        setAccount(account);
    }

    return ( 
        <nav>
            <div className='nav__brand'>
                <img src={logo} alt="Logo" />
                {/* <h1>Millow</h1> */}
            </div>
            
            <ul className='nav__links'>
                <li><a href="#"  >Find Medicine</a></li>
                <li><a href="#">Reminder</a></li>
                <li><a href="#" >Medical Records</a></li>
                <li><a href="#" >Disease Prediction</a></li>
            </ul>

            

            {account ? (
                <button
                    type="button"
                    className='nav__connect'
                >
                    {account.slice(0, 6) + '...' + account.slice(38, 42)}
                </button>
            ) : (
                <button
                    type="button"
                    className='nav__connect'
                    onClick={connectHandler}
                >
                    Connect
                </button>
            )}
        </nav>
    );
}

export default Navigation;