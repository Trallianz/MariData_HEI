interface compareElements {
    icon: string,
    attribute: string,
    cPoints: number,
    sPoints: number
}

export const ComparisonTable = ({ icon, attribute, cPoints, sPoints }: compareElements) => {


    function getSum(s: number, c: number) {
        const sum = s - c;

        if (sum > 0) {
            return ("+" + sum)
        }
        else {
            return (sum)
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
                <img src={icon} />
                <div className=" mx-5">
                    {attribute}
                </div>

            </div>
            <div className='flex w-[60px] justify-end font-bold text-3xl'>{Math.round(cPoints).toFixed(1)}</div>
            <div className='flex w-[60px] justify-end font-bold text-3xl'>{Math.round(sPoints).toFixed(1)}</div>
            <div className='flex w-[42px] justify-end'>{getDifference(cPoints, sPoints)}</div>
            <div className='flex justify-end'>{getSum(cPoints, sPoints)}</div>
        </div>
    )
}

export default ComparisonTable