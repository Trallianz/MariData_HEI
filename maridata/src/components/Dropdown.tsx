import './Dropdown.css'

interface DropdownProps{
    setCurrentSelect: any;
    setRoutes: any;
    route_list: Array<any>;
    setIsMenuVisible: any;
}

const Dropdown = ({setCurrentSelect, setRoutes, route_list, setIsMenuVisible}: DropdownProps) => {


    let currentSelect2: string = "eco-score";

    const handleClick= () => {
        setIsMenuVisible(true);
        setCurrentSelect("eco-score");
        currentSelect2 = "eco-score";
        sort_route_panel_list();
    }

    const handleClick2= () => {
        setIsMenuVisible(true);
        setCurrentSelect("time");
        currentSelect2 = "time";
        sort_route_panel_list();
    }

    const handleClick3= () => {
        setIsMenuVisible(true);
        setCurrentSelect("date");
        currentSelect2 = "date";
        sort_route_panel_list();
    }


    //function that sorts the route list after the selected parameter
    const sort_route_panel_list = () => {
        if (currentSelect2 === "eco-score") {
            let route_list_eco = route_list.sort((a, b) => (a.eco_rating > b.eco_rating) ? -1 : 1);
            setRoutes(route_list_eco);

        } else if (currentSelect2 === "time") {
            let route_list_time = route_list.sort((a, b) => (
                (parseInt(a.time_driven.split(",")[0]) * 60 + parseInt(a.time_anchor.split(",")[0]) * 60 + parseInt(a.time_driven.split(",")[1]) + parseInt(a.time_anchor.split(",")[1]))
                < (parseInt(b.time_driven.split(",")[0]) * 60 + parseInt(b.time_anchor.split(",")[0]) * 60 + parseInt(b.time_driven.split(",")[1]) + parseInt(b.time_anchor.split(",")[1]))) ? -1 : 1);
            setRoutes(route_list_time);
            console.log(route_list_time);
            

        } else if (currentSelect2 === "date") {
            let route_list_date = route_list.sort((a, b) => (a.eco_rating > b.eco_rating) ? 1 : -1);
            setRoutes(route_list_date);
        }
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