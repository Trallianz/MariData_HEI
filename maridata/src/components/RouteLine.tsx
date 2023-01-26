const RouteLine = (props: { color: string }) => {
    if (props.color == "black") {
        return <div className='h-[4px] border-dashed border-black border-2'></div>
    }
    else if (props.color == "green") {
        return <div className='h-[4px] border-dashed border-rGreen border-2'></div>
    }
    else if (props.color == "blue") {
        return <div className='h-[4px] border-dashed border-rBlue border-2'></div>
    }
    else if (props.color == "purple") {
        return <div className='h-[4px] border-dashed border-rPurple border-2'></div>
    }
    else {
        console.log("Error in RouteLine.tsx");
        return <div />
    }
}

export default RouteLine