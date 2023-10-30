import React from 'react'
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lime, purple } from '@mui/material/colors';
import './addmap.css'
import { UseData } from './DataProvider'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';


const Addmap = () => {
    const { Addnewcity, dates, cityname, visitnotes, dispatch } = UseData()

    const naviadd = useNavigate()



    const Addcity = () => {
        Addnewcity();
        naviadd("/loca/City")

    }


    const theme = createTheme({
        palette: {
            primary: lime,
            secondary: purple,
        },
    });





    return (
        <div className='mapadd'>
            <label htmlFor="cityname">City name</label>

            <input type="text" name="cityname" id="cityname" value={cityname} onChange={(e) => dispatch({ type: "cityname", payload: (e.target.value) })} />

            <label htmlFor="date"> When did you gto to Gallocanta</label>

            <input type="date" name="date" id="date" value={dates} onChange={(e) => dispatch({ type: "dates", payload: (new Date(e.target.value).toDateString()) })} />

            <label htmlFor="abouttrip">Notes about your to Gallocanta</label>
            <textarea id="abouttrip" name="abouttrip" rows="7" cols="58" value={visitnotes} onChange={(e) => dispatch({ type: "visitnotes", payload: (e.target.value) })}></textarea>

            <div className="butontoadd">

                <ThemeProvider theme={theme}>
                    <Link to='/loca/City'><Button variant="contained" color="primary" onClick={Addcity}>ADD</Button></Link>
                    <Link to='/loca/City'> <Button variant="contained" color="secondary" sx={{ ml: 2 }}>
                        Back
                    </Button></Link>
                </ThemeProvider>

            </div>
        </div>
    )
}

export default Addmap