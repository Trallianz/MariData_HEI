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
        setDropdownSelect("Eco-Rating");
        shipProp.setOrderedRoutes(shipProp.orderedRoutes.sort((a: any, b: any) => (a.eco_rating > b.eco_rating) ? -1 : 1));
    }

    //Sortierung Time zunehmend
    const handleClick2 = () => {
        setIsMenuVisible(true);
        setDropdownSelect("Time");
        shipProp.setOrderedRoutes(shipProp.orderedRoutes.sort((a: any, b: any) => (
            (a.time_driven + a.time_anchor) < (b.time_driven + b.time_anchor)) ? -1 : 1));
    }

    //Sortierung aktuellste Daten zuerst
    const handleClick3 = () => {
        setIsMenuVisible(true);
        setDropdownSelect("Date");

        let tempOrderedRoutes = shipProp.orderedRoutes;

        //example "01.02.2023" --> 20230201
        let tempArr: Array<number> = [];
        for (let i = 0; i < tempOrderedRoutes.length; i++) {
            const dateElement = tempOrderedRoutes[i].date.split(".");
            let tempArrItem = parseInt(dateElement[2]) * 10000 + parseInt(dateElement[1]) * 100 + parseInt(dateElement[0]);
            tempArr.push(tempArrItem);
        }

        //Bubble sort algorithm
        let somethingChanged: boolean = true;
        while (somethingChanged) {
            somethingChanged = false;
            for (let i = 0; i < tempOrderedRoutes.length - 1; i++) {
                let xTemp: any;

                if (tempArr[i] < tempArr[i + 1]) {
                    somethingChanged = true;

                    xTemp = tempArr[i];
                    tempArr[i] = tempArr[i + 1];
                    tempArr[i + 1] = xTemp;
                    xTemp = tempOrderedRoutes[i];
                    tempOrderedRoutes[i] = tempOrderedRoutes[i + 1];
                    tempOrderedRoutes[i + 1] = xTemp;
                }
            }
        }
        shipProp.setOrderedRoutes(tempOrderedRoutes);
    }


    return (
        <div className='dropdown'>
            <ul>
                <li onClick={handleClick}>Eco-Rating</li>
                <li onClick={handleClick2}>Time</li>
                <li onClick={handleClick3}>Date</li>
            </ul>
        </div>
    )
}

export default Dropdown