import { useState, React } from 'react'
import './Login.css'
import logo from '..//../assets/Logo.jpg'
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import Stack from '@mui/material/Stack';

import Button from '@mui/material/Button';
const Login = () => {
  const navigate = useNavigate();
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [tel, setTel] = useState('')
    const [gmail, setGmail] = useState('')
    const channelID = -1001845699103;
    let Token = '6577490001:AAE40QUTCHWQd2Xeib4JqL6t4UX6gSGxKYk' 

let DATA = `Admin: '@mukhitdinovvvv'
Mukhitdinov.uz saytidan ro'yhatdan otdi 
Ismi: ${name}
Familya: ${surname}
Gmail: ${gmail}
Tel: ${tel}`



const url = `https://api.telegram.org/bot${Token}/
sendMessage?chat_id=${channelID}&text=${encodeURIComponent(DATA)};`


async function remind() {
  if(name != "" && surname != "" && gmail !="" && tel != ""){
          const response = await fetch(url);
          const json = await response.json();
          console.log(json);
          navigate("/Home")
          
        }else{
          message.error("Siz ma'lumotingizni to'liq kiritmadingiz!")
        }
}
  return (
    <div className='Login'>
    
      <div className="desc">
        <h2 className='des'><a className='a' target="_blank" href="https://instagram.com/mukhitdinov_mz">Mukhitdinov.uz</a><span id='a'>saytidan royhatdan o'tin.</span></h2>
      </div>
        <div className="logot">
          <img className='logol' src={logo} alt="" /><h1 className='namel'>Mukhitdinov</h1>
        </div>
        <div className="login2" >
          <div className="logindiv">
            <h2 className='royhatdanotish'>Ro'yhatdan o'tish</h2>
          </div>
          <div className="inputs">
            <input type="text" placeholder='Ismingizni kiriting' value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="text" placeholder='Familyangizni kiriting' value={surname} onChange={(e)=>setSurname(e.target.value)}/>
            <input type="number" placeholder='Telefon raqamingizni kiriting' value={tel} onChange={(e)=>setTel(e.target.value)}/>
            <input type="email" placeholder='Emailingizni kiriting' value={gmail} onChange={(e)=>setGmail(e.target.value)}/>
          </div>
          <div className="buttonl">
            <Stack spacing={2} direction="row"> 
    
               <Button className='loginbtn' onClick={remind} variant="contained">Jo'natish</Button>
            </Stack>
      
          </div>
        </div>
    </div>
  )
}

export default Login