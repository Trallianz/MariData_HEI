import TimeCalc from "./TimeCalc";
import red_triangle from "./../icons/arrow_red_up.svg";
import gray_triangel from "./../icons/arrow_grey.svg";
import green_triangle from "./../icons/arrow_green_down.svg";

interface compareElements {

    cTime: number,
    sTime: number,
}

export const ComparisonTable = ({ cTime, sTime }: compareElements) => {
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

        <div className="flex">
            <div className="w-[60px]">{getDifference(cTime, sTime)}</div>
            <div ><img src={showTriangle(cTime, sTime)} alt="the triangel for compare" /></div>
            <div className="flex w-[100px] justify-end"> {getAbsolutDifference(cTime, sTime)}</div>
        </div>
    )
}

export default ComparisonTable