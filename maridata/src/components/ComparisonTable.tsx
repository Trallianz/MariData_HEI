import red_triangle from "./../icons/arrow_down_red.svg";
import gray_triangel from "./../icons/arrow_grey.svg";
import green_triangle from "./../icons/arrow_up_green.svg";

interface compareElements {

    cPoints: number,
    sPoints: number
}

export const ComparisonTable = ({ cPoints, sPoints }: compareElements) => {

    let triangle = gray_triangel

    function getSum(s: number, c: number) {
        const sum = c - s;

        if (sum > 0) {
            return ("+" + sum.toFixed(1))
        }
        else {
            return (sum.toFixed(1))
        }

    }

    function showTriangle(c: number, s: number) {
        const sum = c - s
        if (sum > 0) {
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
        <div className=" flex">
            <div className="w-[60px]">{getDifference(cPoints, sPoints)}</div>
            <div ><img src={showTriangle(cPoints, sPoints)} alt="the triangel for compare" /></div>
            <div className="flex w-[100px] justify-end">{getSum(cPoints, sPoints)}</div>
        </div >
    )
}

export default ComparisonTable