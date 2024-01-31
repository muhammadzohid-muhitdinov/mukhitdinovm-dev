import React from 'react'
import "./Center.css"
import myphoto from './mypfoto.jpg'
import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom";
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import PublicIcon from '@mui/icons-material/Public';
const Center = () => {
  return (
    <div className='Center'>
        <div className='top'>
        
                <NavLink className="dvdnav" to={"/home"}>Portfolio ga xush kelibsiz!</NavLink>
        </div>
        <div className='bottom'>
            <div className="left">
                <div className="hello-div">

                    <h1 className='hello'>Salom, Men</h1>
                </div>
                <div className="fio">
                    <div className="about-fio">

                        <h1 className='fm'>Muhitdinov Muhammadzohid</h1>
                        <h3 className='program'>Front-end dasturchi</h3>
                        <h4 className='region'>Andijon shahar "Wester school" chinor filialida tahsil olganman! <br/> Mening portfoli yimga xush kelibsiz!</h4>
                    </div>
                    <div className="tarmoq-about">
                        <a target="_blank" href="https://t.me/Mukhitdinovvvv" className='icona'><TelegramIcon fontSize='large' className='icont'/></a>
                        <a target="_blank" href="https://instagram.com/mukhitdinov_mz" className='icona'><InstagramIcon fontSize='large' className='icont'/></a>
                        <a href="#" id='icona'><PublicIcon fontSize='large' className='icont'/></a>
                    </div>
                    <div className="read">
                        <NavLink to={"/about"} ><Button variant="contained" id='readmore'>Ko'proq</Button></NavLink>
                    </div>
                </div>
            </div>
            <div className="right">
                <img className='myphoto' src={myphoto} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Center