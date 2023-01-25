import TimeCalc from "./TimeCalc";
import red_triangle from "./../icons/arrow_down_red.svg";
import gray_triangel from "./../icons/arrow_grey.svg";
import green_triangle from "./../icons/arrow_up_green.svg";

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

        <div className="flex justify-between">
            <div >{getDifference(cTime, sTime)}</div>
            <div ><img src={showTriangle(cTime, sTime)} alt="the triangel for compare" /></div>
            <div > {getAbsolutDifference(cTime, sTime)}</div>
        </div>
    )
}

export default ComparisonTable