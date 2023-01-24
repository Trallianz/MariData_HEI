import TimeCalc from "./TimeCalc";
import red_triangle from "./../icons/arrow_down_red.svg";
import gray_triangel from "./../icons/arrow_grey.svg";
import green_triangle from "./../icons/arrow_up_green.svg";

interface compareElements {
    icon: string,
    attribute: string,
    cTime: number,
    sTime: number,
}

export const ComparisonTable = ({ icon, attribute, cTime, sTime }: compareElements) => {
    let triangle = gray_triangel

    function getAbsolutDifference(c: number, s: number) {

        const sum = c - s

        if (sum > 0) {
            return ("-" + TimeCalc(Math.abs(c - s)))
        }
        else {
            return ("+" + TimeCalc(Math.abs(c - s)))
        }
    }

    function showTriangle(c: number, s: number) {
        const sum = c - s
        if (sum < 0) {
            triangle = red_triangle
            return (triangle)
        }
        else {
            triangle = green_triangle
            return (triangle)
        }
    }

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
                <div></div>
                <img src={icon} />
                <div className=" mx-5">
                    {attribute}
                </div>

            </div>
            <div className='flex justify-end font-bold text-3xl'>{TimeCalc(cTime)}</div>
            <div className='flex justify-end font-bold text-3xl'>{TimeCalc(sTime)}</div>
            <div className='flex w-[20px] justify-center'>{getDifference(cTime, sTime)}</div>
            <div className='flex'><img src={showTriangle(cTime, sTime)} alt="the triangel for compare" /></div>
            <div className='flex '> {getAbsolutDifference(cTime, sTime)}</div>
        </div>
    )
}

export default ComparisonTable