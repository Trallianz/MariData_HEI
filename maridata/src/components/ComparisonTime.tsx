interface compareElements {
    icon: string,
    attribute: string,
    cTime: string,
    sTime: string,
}

export const ComparisonTable = ({ icon, attribute, cTime, sTime }: compareElements) => {

    //split time in hours and minutes
    const cTime_array = cTime.split(",")
    const cTime_driven_hours = cTime_array[0];
    const cTime_driven_minutes = cTime_array[1];

    const sTime_array = cTime.split(",")
    const sTime_driven_hours = sTime_array[0];
    const sTime_driven_minutes = sTime_array[1];

    function getDifference(x: number, y: number) {
        //example "-60%"
        if (x >= y) {
            return (Math.round(((y / x) * 100) - 100) + "%");
        }
        //example "+60%"
        else {
            return ("+" + Math.round(((y / x) * 100) - 100) + "%");
        }
    }

    return (

        <div className='flex w-full items-center justify-between p-3 m-1 bg-gray1'>
            <div className="flex w-[131px] text-2xl">
                <img src={icon} />
                <div className=" mx-5">
                    {attribute}
                </div>

            </div>
            <div className='flex justify-end font-bold text-3xl'>{cTime_driven_hours}h {cTime_driven_minutes} min</div>
            <div className='flex justify-end font-bold text-3xl'>{sTime_driven_hours}h {sTime_driven_minutes} min</div>
            <div className='flex w-[42px] justify-center'>{getDifference(parseInt(cTime), parseInt(sTime))}</div>
            <div className='flex justify-end'> {parseInt(cTime) - parseInt(sTime)} min</div>
        </div>
    )
}

export default ComparisonTable