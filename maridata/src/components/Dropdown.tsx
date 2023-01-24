import { useContext } from 'react';
import { ShipContext } from '../ShipContext';
import './Dropdown.css'

interface DropdownProps {
    setDropdownSelect: any;
    setIsMenuVisible: any;
}

const Dropdown = ({ setDropdownSelect, setIsMenuVisible }: DropdownProps) => {

    const shipProp = useContext(ShipContext);

    //Sortierung Eco-Score absteigend
    const handleClick = () => {
        setIsMenuVisible(true);
        setDropdownSelect("eco-score");
        shipProp.setOrderedRoutes(shipProp.orderedRoutes.sort((a: any, b: any) => (a.eco_rating > b.eco_rating) ? -1 : 1));
    }

    //Sortierung Time zunehmend
    const handleClick2 = () => {
        setIsMenuVisible(true);
        setDropdownSelect("time");
        shipProp.setOrderedRoutes(shipProp.orderedRoutes.sort((a: any, b: any) => (
            (a.time_driven + a.time_anchor) < (b.time_driven + b.time_anchor)) ? -1 : 1));
    }

    //TODO
    const handleClick3 = () => {
        setIsMenuVisible(true);
        setDropdownSelect("date");
        shipProp.setOrderedRoutes(shipProp.orderedRoutes.sort((a: any, b: any) => (a.eco_rating > b.eco_rating) ? -1 : 1));
    }


    return (
        <div className='dropdown'>
            <ul>
                <li onClick={handleClick}>eco-score</li>
                <li onClick={handleClick2}>time</li>
                <li onClick={handleClick3}>date</li>
            </ul>
        </div>
    )
}

export default Dropdown