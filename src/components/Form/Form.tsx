import { Button, InputLabel, TextField } from '@mui/material'
import styles from './form.module.css'



export default function Form() {


  return (
    <form className={styles.formContainer} action="">
        <InputLabel>Name:</InputLabel>
        <TextField
            id="outlined-basic" 
            variant="outlined" 
            size="small"   
            />

        <InputLabel>Email:</InputLabel> 
        <TextField
            id="outlined-password-input"
            type="email"
            size="small"
        />
        <InputLabel>Password:</InputLabel>
        <TextField
            id="outlined-password-input"
            type="password"
            size="small"
        />
       
        <Button href="/join" variant="contained">Join Now</Button>

    </form>
  )
}
