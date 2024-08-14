import { useDispatch } from "react-redux";
import { decrementNum, incrementNum, minusFive, plusFive, resetNum, setText } from "./redux/reducer";

const Button = () => {
    const dispatch = useDispatch()
    return (
        <div className="btn">
            <button onClick={() => {
                dispatch(incrementNum())
            }}>+1</button>
             <button onClick={() => {
                dispatch(decrementNum())
            }}>-1</button>
            <button onClick={() => {
                dispatch(plusFive())
            }}>+5</button>
            <button onClick={() => {
                dispatch(minusFive())
            }}>-5</button>
            <button onClick={() => 
                dispatch(resetNum())
            }>reset</button>
            <button onClick={() => 
                dispatch(setText('Hello Geeks'))
            }>change</button>
        </div>
    );
}

export default Button;
