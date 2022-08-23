import React from 'react'
import image1 from '../assets/post/image1.png';
import image2 from '../assets/post/image2.png';
import image3 from '../assets/post/image3.png';
import image4 from '../assets/post/image4.png';
import image5 from '../assets/post/image5.png';
import image6 from '../assets/post/image6.png';
import image7 from '../assets/post/image7.png';
import image8 from '../assets/post/image8.png';
import image9 from '../assets/post/image9.png';

export default function Social() {
    const postChannel=(image,type,story)=>{
        return(
            <div style={{backgroundColor:'white',marginLeft:"30px",height:'130px',width:'150px',borderRadius:'10px'}}>
               <img src={image} style={{ height: '50px', width: '50px',marginLeft:'50px',marginTop:'10px'}} alt="Logo" />
               <p style={{marginLeft:'50px'}}>{type}</p>
               <p style={{marginLeft:'30px'}}>{story}</p>
            </div>
        )
    }
    const BransMarketersWedDesigners=(a,b,c,d)=>{
        return(
            <div style={{backgroundColor:"#EEF1F7",marginLeft:"10px",width:'300px',borderRadius:'15px'}}>
            <p style={{fontWright:'bold',fontSize:'30px',marginTop:'10px',marginLeft:'10px'}}>{a}</p>
            <div style={{display:'flex',flexDirection:'row',marginTop:'0px',marginLeft:'10px',marginBlockStart:'-25px'}}>
            <img src={b} style={{ height: '20px', width: '20px'}} alt="Logo" />
            <p style={{fontSize:'10px',marginLeft:'10px',}}>{c}</p>
            </div>
            <p style={{fontSize:'15px',}}>{d}</p>
            </div>
        )
    }

    return (
        <div style={{ background:'#EEF1F7',height:'100%'}}>
            {/*story */}
            <div style={{display:'flex',flexDirection:'row',justifyContent:'center',}}>
             <p style={{fontSize:'30px',fontWeight:'bold'}}>Let your story live </p>
             <p style={{fontSize:'30px',fontWeight:'bold',backgroundColor:'red',marginLeft:'2px',}}>
                Let your story live 
            </p>
            </div>

            {/* description */}
            <div style={{marginBlockStart:'-20px',display:'flex',flexDirection:'column',justifyContent:'center',paddingLeft:'420px',width:'550px',}}>
            <p style={{fontWeight:'30px',}}>
            You've worked hard to create a legit news but it disappears in 24 hours due to
             illegitimate news and misinformation? No worries, use our fake news detector 
            for safeguarding all the interests around you and to bring them to life on your website.
            </p>
            </div>

            { /*Links */}
            <div style={{display:'flex',flexDirection:'row',justifyContent:'center',marginTop:'10px'}}>
                {postChannel(image1,'Auto-Sync','Instagram Stories')}
                {postChannel(image2,'Upload','Facebook Stories')}
                {postChannel(image3,'Sync','TikTok Stories')}
                {postChannel(image4,'Upload','Twitter Fleets')}
                {postChannel(image5,'Upload','LinkedIn Stories')}
                
            </div>
            
            {/* Bellow Part */}
            <div style={{marginTop:"10px",background:'white'}}>
                <div style={{display:'flex',flexDirection:'row',justifyContent:"center"}}>
                    <p style={{fontWeight:'bold',fontSize:'30px'}}>Legit your</p>
                    <p style={{fontWeight:'bold',fontSize:'30px',background:'red',marginLeft:"2px"}}>conversions</p>
                </div>
                <div style={{display:'flex',flexDirection:'row',justifyContent:"center",marginBlockStart:"-50px"}}>
                    <p style={{fontWeight:'bold',fontSize:'30px'}}>Double your</p>
                    <p style={{fontWeight:'bold',fontSize:'30px',background:'red',marginLeft:"2px"}}>growth</p>
                </div>

                {/*Brans+Marketers+Wed Designers */}
                <div style={{display:'flex',flexDirection:'row',marginTop:'10px',marginLeft:'280px',}}>
                {BransMarketersWedDesigners('Brand',image6,'Icreases conversions','Enhance the visual showcase of your products with unique content making visitors convert to buyers.')}
                {BransMarketersWedDesigners('Marketers',image7,'Save Time','No more re-purposing, re-cropping or re-uploading the same content from your Instagram stories to your website.')}
                {BransMarketersWedDesigners('Web designers',image8,'Fresh content','Every story you post on Instagram, it is automatically saved in your account. Auto updates you unique content.')}
                </div>

                {/*True Cast */}
                <div style={{display:'flex',justifyContent:'center',marginTop:'50px'}}>
                <img src={image9} style={{ height: '70px', width: '70px'}} alt="Logo" />
                </div>

                <div style={{display:'flex',justifyContent:'center',marginTop:'20px',width:'70'}}>
                    <p style={{fontSize:'20px'}}>Working for prevention of the widespread of fakenews and misinformation using Machine learning &  Artificial Intelligence</p>
                </div>
            </div>
         </div>
    )
}
