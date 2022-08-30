import { Box, Button, Input } from "@mui/material";
import { useState } from "react";

export default function AddDrivers(){
    const [state, setState] = useState({
        driver_name:'',
        email:'',
        phone:'',
        password:''
    })
    
    const add = () => {
        //axios.post('https://esim inch/api/add-driver',state).then(res=>...)
        console.log(state);
    }
    return(
        <Box width={'100%'} height={'calc(100vh - 20vh)'} padding={2} sx={{background:'white'}}>
            <Box display={'flex'} gap={3} flexDirection={'column'}>
                {/* //copy em oBject-y vor karanam modify anem */}
                {/* yndlyaner y jardum neq {} srank vor mtnenk*/}
                {/* {{driver_name:'',email:'',phone:'',password:''},driver_name:sdfgsdfg} */}
                <Input onChange={(e)=>setState({...state, driver_name:e.target.value})} placeholder="driver name"/>
                <Input onChange={(e)=>setState({...state, email:e.target.value})} placeholder="email"/>
                <Input onChange={(e)=>setState({...state, phone:e.target.value})} placeholder="phone"/>
                <Input onChange={(e)=>setState({...state, password:e.target.value})} placeholder="password"/>
                <Button variant={'contained'} onClick={add}>add</Button>
            </Box>
        </Box>
    )
}