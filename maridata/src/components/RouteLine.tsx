const RouteLine = (props: { color: string }) => {
    if (props.color === "black") {
        return <div className='h-[4px] border-dotted border-t-4 border-black'></div>
    }
    else if (props.color === "green") {
        return <div className='h-[4px] border-dotted border-t-4 border-rGreen'></div>
    }
    else if (props.color === "blue") {
        return <div className='h-[4px] border-dotted border-t-4 border-rBlue'></div>
    }
    else if (props.color === "purple") {
        return <div className='h-[4px] border-dotted border-t-4 border-rPurple'></div>
    }
    else {
        console.log("Error in RouteLine.tsx");
        return <div />
    }
}

export default RouteLine