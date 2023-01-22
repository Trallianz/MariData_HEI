import TimeCalc from "./TimeCalc";

interface compareElements {
    icon: string,
    attribute: string,
    cTime: number,
    sTime: number,
}

export const ComparisonTable = ({ icon, attribute, cTime, sTime }: compareElements) => {

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
            <div className='flex justify-end font-bold text-3xl'>{TimeCalc(cTime)}</div>
            <div className='flex justify-end font-bold text-3xl'>{TimeCalc(sTime)}</div>
            <div className='flex w-[42px] justify-center'>{getDifference(cTime, sTime)}</div>
            <div className='flex justify-end'> {cTime - sTime}</div>
        </div>
    )
}

export default ComparisonTable