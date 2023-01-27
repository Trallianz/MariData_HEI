import {useNavigate} from "react-router-dom";

interface TopbarProps {
  name: string
}

const Topbar = ({name}:TopbarProps) => {

  const navigate = useNavigate();

  return (
    <div className='h-[80px] flex justify-between items-center p-5 bg-gray0'>
      <div className='text-2xl font-bold text-text0'>{name}</div>
      <button onClick={() => navigate("/")}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-[50px] fill-text0">
          <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  )
}

export default Topbar