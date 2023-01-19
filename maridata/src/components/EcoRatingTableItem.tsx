interface tableElements {
    icon: string,
    attribute: string,
    cPoints: number,
    sPoints: number
}

const EcoRatingTable = ({ icon, attribute, cPoints, sPoints }: tableElements) => {

    function getDifference(x: number, y: number) {
        //example "-60%"
        if (x > y) {
            return (Math.round(((y / x) * 100) - 100) + "%");
        }
        //example "+60%"
        if (x < y) {
            return ("+" + Math.round(((y / x) * 100) - 100) + "%");
        }
        //"0%"
        else {
            return (Math.round(((y / x) * 100) - 100) + "%");
        }
    }

    return (
        <div className='flex w-full items-center justify-between p-3 m-1 rounded-lg bg-gray1'>
            <div>
                <img src={icon} />
                {attribute}
            </div>
            <div className='font-bold text-3xl'>{cPoints}</div>
            <div className='font-bold text-3xl'>{sPoints}</div>
            <div>{getDifference(cPoints, sPoints)}</div>
        </div>
    )
}

export default EcoRatingTable