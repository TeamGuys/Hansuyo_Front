import { useNavigate } from "react-router";
import EditImg from "../../../assets/Setting/Edit.svg"

const Edit = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/setting/edit')
    }
    return(
        <>
            <img 
                onClick={handleClick}
                src={EditImg} alt='x' />
        </>
    )
}

export default Edit;