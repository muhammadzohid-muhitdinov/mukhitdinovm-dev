import React from 'react'
import './Aboutpage.css'
import myphoto from '../Home/mypfoto.jpg'
import BadgeIcon from '@mui/icons-material/Badge';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import LanguageIcon from '@mui/icons-material/Language';
const Aboutpage = () => {
  return (
  <div className='Aboutpage'>
    <div className='name-div'>
      <div className="about-mes">
        <h2 className='aboutmesh2'>Men Haqimda</h2>
        
      </div>
    </div>
    <div className='menhaqimda'>
        <h1 className='menhaqimda11'>Men Haqimda</h1>
        <h3 className='ismf'><span className='fioabout'>FIO: </span>Muhitdinov Muhammadzohid Durbek og'li</h3>
        <h3 className='ismf'>Men Front-end yo'nalishida 2023-yildan beri faoliyat yuritaman.</h3>
        <h3 className='ismf'><span>2023</span>-yilda Andijon dagi IT bo'yicha ta'lim beruvchi <span>"WESTER IT ACADEMY"</span> ga keldim va tajribali , malakali ustozlarimdan dasturlash ilmini o'rganib <span>2023</span>-yilda <span>"WESTER IT ACADEMY"</span>ning <span>Front-end</span> kursini bitirdim !</h3>
        <h3 className='ismf'>Endilikdagi maqsadim Java Scriptni yanada chuqur o'rganib hamda <span>"Node JS"</span> va <span>"Python"</span> ni o'rganib Full stack dasturchi bo'lish !</h3>
    </div>
    <div className='myinformations'>
      <div className="left-img">
        <a href="https://www.instagram.com/mukhitdinov_mz/" target='a_blank'><img className='myphotoi' src={myphoto} alt="" /></a>
      </div>
      <div className="right-inform">
          <div className="infor-me">
            <h2><BadgeIcon fontSize='large'/>Ism: Muhammadzohid</h2>
            <h2><PhoneInTalkIcon fontSize='large'/>Telefon raqam: +998(93)0725558</h2>
            <h2><EmailIcon fontSize='large'/>Email: mukhitdinov887@gmail.com</h2>
            <h2><WorkHistoryIcon fontSize='large'/>Tajriba: Yo'q</h2>
            <h2><IntegrationInstructionsIcon fontSize='large'/>Soha: Front-end dasturchi</h2>
            <h2><LanguageIcon fontSize='large'/>Til: Uzbekcha, Русский</h2>
          </div>
      </div>
    </div>
  </div>
  )
}

export default Aboutpage