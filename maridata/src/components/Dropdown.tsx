import './Dropdown.css'

interface DropdownProps {
    setDropdownSelect: any;
    setRoutes: any;
    route_list: Array<any>;
    setIsMenuVisible: any;
}

const Dropdown = ({ setDropdownSelect, setRoutes, route_list, setIsMenuVisible }: DropdownProps) => {


    //Sortierung Eco-Score absteigend
    const handleClick = () => {
        setIsMenuVisible(true);
        setDropdownSelect("eco-score");
        setRoutes(route_list.sort((a, b) => (a.eco_rating > b.eco_rating) ? -1 : 1));
    }

    //Sortierung Time zunehmend
    const handleClick2 = () => {
        setIsMenuVisible(true);
        setDropdownSelect("time");
        setRoutes(route_list.sort((a, b) => (
            (a.time_driven + a.time_anchor) < (b.time_driven + b.time_anchor)) ? -1 : 1));
    }

    //TODO
    const handleClick3 = () => {
        setIsMenuVisible(true);
        setDropdownSelect("date");
        setRoutes(route_list.sort((a, b) => (a.eco_rating > b.eco_rating) ? -1 : 1));
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