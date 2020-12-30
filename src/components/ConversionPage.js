import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, InputLabel, Modal, TextField,Card } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Header from './Header';

const DIVIDER = 0.93;
const VOLTAGE = 12;
const factor = 100;
const fact = 0.95;

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
    alignContent:"center",
    alignItems:"center",
    textAlign: 'center',
  },
  row:{
    margin: 5,
    padding:5,
    textAlign: 'center',
  },
  titleText:{
    fontSize:30,
    margin:5,
    textAlign: 'center',
  },
  label:{
    marginBottom:5,
  },
  modal:{
    alignContent: 'center'
    
  },
  card:{
  width: 300,
   height: 300,
   position: 'absolute',
   left: 600 ,
   top: 250, 
   marginleft: -150,
   margintop: -150,
   textAlign: 'center',
    
  }
}));

const sections = [
  { title: 'Home', url: '/' },
  { title: 'Design', url: '/Dpage' },
  { title: 'Principle', url: '/Ppage' },
  { title: 'Images', url: '/Ipage' },
  { title: 'Coversion', url: '/Cpage' },
  { title: 'Feedback', url: '/Fpage' },
  { title: 'Comparison', url: '/Copage' },
  { title: 'Graph', url: '/Gpage' },
];


export default function Conversion(props) {
  const classes = useStyles();
  const [fanData, setFanData] = useState({
    rating: 0,
    quantity: 0,
    time: 0,
    power:0,
    energy:0,
  })
  const [acData, setAcData] = useState({
    rating: 0,
    quantity: 0,
    time: 0,
    power:0,
    energy:0,
  })
  const [light1Data, setLight1Data] = useState({
    rating: 0,
    quantity: 0,
    time: 0,
    power:0,
    energy:0,
  })
  const [light2Data, setLight2Data] = useState({
    rating: 0,
    quantity: 0,
    time: 0,
    power:0,
    energy:0,
  })
  const [motorData, setMotorData] = useState({
    rating: 0,
    quantity: 0,
    time: 0,
    power:0,
    energy:0,
  })
  const[res, setRes] = useState({
    Current:0,
    Res1:0,
    Res2:0,
  });
  const[isOpen, setIsOpen] = useState(false)

  const handleClose = ()=>{
    setIsOpen(false);
  }

  const handleClick = ()=>{
    console.log("1");
    setAcData({...acData,power:acData.rating*acData.quantity, energy: acData.rating*acData.time*acData.quantity});
    setFanData({...fanData,power:fanData.rating*fanData.quantity, energy: fanData.rating*fanData.time*fanData.quantity});
    console.log("2");
    setLight2Data({...light2Data,power:light2Data.rating*light2Data.quantity, energy: light2Data.rating*light2Data.time*light2Data.quantity});
    setMotorData({...motorData,power:motorData.rating*motorData.quantity, energy: motorData.rating*motorData.time*motorData.quantity});
    console.log("3");
    setLight1Data({...light1Data,power:light1Data.rating*light1Data.quantity, energy: light1Data.rating*light1Data.time*light1Data.quantity});
    
    
    
    setTimeout(() => {
      console.log("4");
      console.log(fanData)
      const totalPower = (acData.power+fanData.power+light1Data.power+light2Data.power+motorData.power)/DIVIDER;
    const totalEnergy = (acData.energy+fanData.energy+light1Data.energy+light2Data.energy+motorData.energy)/DIVIDER;
    const current = Math.ceil(totalPower/VOLTAGE);
    const F = 2*(totalEnergy/VOLTAGE);
    const res1 = Math.ceil(F/factor);
    const E = Math.ceil(totalEnergy/fact);
    const res2 = Math.ceil(E/500);

    


      setRes({
        Current:current,
        Res1:res1,
        Res2:res2,
      });
      console.log(res);
      setIsOpen(true)
    }, 0);
  }

  return (
    <Container maxWidth="lg" className={classes.mainGrid}>
      <Header title="SolarApp" sections={sections} />
      <div className={classes.titleText}>
        CONVERSION
      </div>
      <div className={classes.row}>
        <InputLabel className={classes.label}>FAN</InputLabel>
      <TextField variant="outlined" color="secondary" label="Rating(W)" value={fanData.rating} onChange={(e)=>{setFanData({...fanData,rating:+e.target.value})}} ></TextField>
      <TextField variant="outlined" label="Quantity" color="secondary" value={fanData.quantity} onChange={(e)=>{setFanData({...fanData,quantity:+e.target.value})}}></TextField>
      <TextField variant="outlined" label="Time(hr)" color="secondary"  value={fanData.time} onChange={(e)=>{setFanData({...fanData,time:+e.target.value})}}></TextField>
      </div>
      <div className={classes.row}>
      <InputLabel className={classes.label}>LIGHT-1</InputLabel>
      <TextField variant="outlined" label="Rating(W)" color="secondary" value={light1Data.rating} onChange={(e)=>{setLight1Data({...light1Data,rating:+e.target.value})}} ></TextField>
      <TextField variant="outlined" label="Quantity" color="secondary" value={light1Data.quantity} onChange={(e)=>{setLight1Data({...light1Data,quantity:+e.target.value})}}></TextField>
      <TextField variant="outlined" label="Time(hr)" color="secondary" value={light1Data.time} onChange={(e)=>{setLight1Data({...light1Data,time:+e.target.value})}}></TextField>
      </div>
      <div className={classes.row}>
      <InputLabel className={classes.label}>LIGHT-2</InputLabel>
      <TextField variant="outlined" label="Rating(W)" color="secondary"  value={light2Data.rating} onChange={(e)=>{setLight2Data({...light2Data,rating:+e.target.value})}} ></TextField>
      <TextField variant="outlined" label="Quantity" color="secondary" value={light2Data.quantity} onChange={(e)=>{setLight2Data({...light2Data,quantity:+e.target.value})}}></TextField>
      <TextField variant="outlined" label="Time(hr)" color="secondary" value={light2Data.time} onChange={(e)=>{setLight2Data({...light2Data,time:+e.target.value})}}></TextField>
      </div>
      <div className={classes.row}>
      <InputLabel className={classes.label}>MOTOR</InputLabel>
      <TextField variant="outlined" label="Rating(W)" color="secondary" value={motorData.rating} onChange={(e)=>{setMotorData({...motorData,rating:+e.target.value})}} ></TextField>
      <TextField variant="outlined" label="Quantity" color="secondary" value={motorData.quantity} onChange={(e)=>{setMotorData({...motorData,quantity:+e.target.value})}}></TextField>
      <TextField variant="outlined" label="Time(hr)" value={motorData.time} onChange={(e)=>{setMotorData({...motorData,time:+e.target.value})}}></TextField>
      </div>
      <div className={classes.row}>
      <InputLabel className={classes.label}>AC</InputLabel>
      <TextField variant="outlined" label="Rating(W)" color="secondary" value={acData.rating} onChange={(e)=>{setAcData({...acData,rating:+e.target.value})}} ></TextField>
      <TextField variant="outlined" label="Quantity" color="secondary" value={acData.quantity} onChange={(e)=>{setAcData({...acData,quantity:+e.target.value})}}></TextField>
      <TextField variant="outlined" label="Time(hr)" color="secondary" value={acData.time} onChange={(e)=>{setAcData({...acData,time:+e.target.value})}}></TextField>
      </div>

      <div>
      <Button onClick={handleClick} variant="contained" color="secondary">Convert</Button>
      </div>
      <Modal open={isOpen} onClose={handleClose}>
        <div className={classes.modal}>

        <Card className={classes.card}>
          <div className={classes.row}>
        THE DATA OBTAINED ARE
        </div>
        <div className={classes.row}>
        The maximum current =
        {res.Current}
        (A)
        </div>
        <div className={classes.row}>
        Number of Battery of 100 Ah =
        {res.Res1}
        </div>
        <div className={classes.row}>
        Number of PV Modules  of 100 Wp =
        {res.Res2}
        </div>

        </Card>
      </div>
    </Modal>
    </Container>
  );
}
