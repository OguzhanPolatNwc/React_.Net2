import { Button, ButtonGroup, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { decrement, increment } from "./counterSlice";
//import { decrement, increment } from "./counterReducer";

export default function ContactPage() {
    const dispatch = useAppDispatch();
    //const dispatch = useDispatch();
    const { data, title } = useAppSelector(state => state.counter);  //we've got IntelliSense and Auto Complete available now.
    //const {data, title} = useSelector((state : CounterState) => state);

    return (
        //JSX expressions must have one parent element.
        <>
            <Typography variant='h2'>
                {title}
            </Typography>
            <Typography variant='h5'>
                The data is: {data}
            </Typography>
            <ButtonGroup>
                <Button onClick={() => dispatch(decrement(1))} variant='contained' color='error'>Decrement</Button>
                {/* <Button onClick={() => dispatch({type : DECREMENT_COUNTER }) } variant='contained' color='error'>Decrement</Button> */}
                <Button onClick={() => dispatch(increment(1))} variant='contained' color='primary'>Increment</Button>
                <Button onClick={() => dispatch(increment(5))} variant='contained' color='secondary'>Increment by 5</Button>
            </ButtonGroup>
        </>

    )
}