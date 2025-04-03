import React from 'react'
import insta from '../assets/insta.png';
import facebook from '../assets/facebook.png'
import Youtube from '../assets/Youtube.png'
import ReactPlayer from 'react-player'
import { FaInstagram } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
import { VscArrowCircleUp } from "react-icons/vsc";
import TeaBreakLogo from '../assets/TeaBreak.png';
import { InstagramEmbed } from 'react-social-media-embed';
import photo14 from '../assets/photo14.jpg'

function Page() {
    const instahandleclick = () => {
        window.location.href = "https://www.instagram.com/sathish_official_29/?utm_source=ig_embed&ig_rid=2e6ea3fd-1bf2-460e-96c9-932ac8acc527";
    };
    const whatsapphandleclick = () => {
        window.location.href = "https://wa.me/919677943288";
    };
  return (
    <div className='Overall-Page'>
          
        {/* Photo ___ Section */}
        <div className="photo-section">
              <div className='photo'>
                  <div className='photo-bg'>
                 
                  </div>
                  <div className='photo-text'>
                      <h2>ACTOR</h2>
                      <h1>SATHISHKUMAR</h1>
                  </div>
                
              </div>
        </div>

        {/* About section---- */}
        <div className="about-section" id='about'>
                 <h2>About <span>Me</span></h2>
                <div className="about-first">
                    <div className="txt">
                         <p><span></span>This is the autobiography of <b style={{color:"#1f1f1f"}}>Sathish Kumar</b>, a young man from the small village of Eelakkudipatti, who arrived in the big city of Chennai with a deep love for cinema and acting.</p>
                         <div className='profile-details'>
                              <div>
                                   <p className='para-first'>Name</p>
                                   <p className='para-second'>Sathish Kumar</p>
                              </div>
                              <div>
                                   <p className='para-first'>DOB</p>
                                   <p className='para-second'>29.01.2001</p>
                              </div>
                              <div>
                                   <p className='para-first'>Age</p>
                                   <p className='para-second'>24</p>
                              </div>
                              <div>
                                   <p className='para-first'>Contact</p>
                                   <p className='para-second'>9677943288</p>
                              </div>
                              <div>
                                   <p className='para-first'>Location</p>
                                   <p className='para-second'>Chennai</p>
                              </div>
                              <div>
                                   <p className='para-first'>Native</p>
                                   <p className='para-second'>Eelakkudipatti</p>
                              </div>
                        
                         </div>
                    </div>
                    <div className="about-photo"></div>
                </div>
        </div>



        {/* Work Experience Page */}
        <div className="work-experience" id='work'>
             <h2>Work<span> Experience</span></h2>
             <div className='Theneer-idaivelai'>
                   <div className='logo-photo'>
                      <img src={TeaBreakLogo} alt='TeakBreak'></img>
                   </div>
                   <div className='logo-txt'>
                        <p className='p'>Content Creator & Artist <b style={{color:"black"}}>in Theneer Idaivelai</b></p>
                        <div className='logo-txt-img'>
                            <div>
                                <img src={Youtube}></img>
                                <p>3M+ Subscribers</p>
                            </div>
                            <div>
                                <img src={insta}></img>
                                <p>1.5M+ Followers</p>
                            </div>
                            <div>
                                <img src={facebook}></img>
                                <p>3.4M+ Followers</p>
                            </div>
                        </div>
                   </div>
             </div>
            {/* at Content creator */}
            <div className="at-contentcreator">
               <div className='at-text'>
                <h2>Work Experience at <span>Content Creator</span></h2>
                <p>How to notify during an emergency? What are the challenges face by police officers, firefighters, sanitation workers, and electrical linemen in their duties? What is the good for our body? What food should we eat? What is bad? What food should we avoid? How can we identify problems in our body through a full body check-up? For almost four years, I have been uploading awareness videos necessary for people with the help of a tea break.</p>
               </div>
                <div className='at-contentcreator-photos'>
                    <div className='at-left'>
                        
                    </div>
                    <div className='at-right'>
                         <div className="video-div">
                            <ReactPlayer
                                            className='react-player'
                                            controls='true'
                                            url='https://www.youtube.com/watch?si=3sLX9ThEw5PcBxTz&v=XJXw2QjZAAA&feature=youtu.be'
                                            width='100%'
                                            height='100%'
                            />
                         </div>
                         <div className="video-div">
                              <ReactPlayer
                                            className='react-player'
                                            controls='true'
                                            url='https://www.youtube.com/watch?v=xH2HpWWIagQ'
                                            width='100%'
                                            height='100%'
                              />
                         </div>
                         <div className="video-div">
                              <ReactPlayer
                                            className='react-player'
                                            controls='true'
                                            url='https://www.youtube.com/watch?v=kfsY4IWhZf0'
                                            width='100%'
                                            height='100%'
                              />
                         </div>
                         <div className="video-div">
                               <ReactPlayer
                                            className='react-player'
                                            controls='true'
                                            url='https://www.youtube.com/watch?v=51ypqFmRtp4'
                                            width='100%'
                                            height='100%'
                                />
                         </div>
                         <div className="video-div">
                               <ReactPlayer 
                                            className='react-player'
                                            controls='true'
                                            url='https://www.youtube.com/watch?v=435Cr5r4Rnw'
                                            width='100%'
                                            height='100%'
                                        
                                 />
                         </div>
                         <div className="video-div">
                                  <ReactPlayer
                                            className='react-player'
                                            controls='true'
                                            url='https://youtu.be/0GoufIjfhow?si=nYgghZSr9bGSeYAK'
                                            width='100%'
                                            height='100%'
                                />
                         </div>
                    </div>
                </div>
            </div>
             {/* ----Host____Section---- */}
             <div className="host-section">
                  <h2>Host</h2>
                  <p>I have conducted more interviews with experts excelling in their respective fields to provide clear explanations for any doubts people may have.</p>
                  <div className='host-photo'></div>
                  <div className='host-video'>
                       <div className='video-host-div'>
                              <ReactPlayer
                                            className='react-player'
                                            controls='true'
                                            url='https://www.youtube.com/watch?v=W35GHWHgqfQ'
                                           
                                            width='100%'
                                            height='100%'
                                />
                       </div>
                       <div className='video-host-div'>
                            <ReactPlayer
                                            className='react-player'
                                            controls='true'
                                            url='https://youtu.be/lv35eM7BBrc?si=WKa1uyg_RXyRtj5S'
                                        
                                            width='100%'
                                            height='100%'
                                />
                       </div>
                       <div className='video-host-div'>
                            <ReactPlayer
                                            className='react-player'
                                            controls='true'
                                            url='https://www.youtube.com/watch?v=amKmo3s6lA8'
                                            width='100%'
                                            height='100%'
                            />
                       </div>
                       <div className='video-host-div'>
                             <ReactPlayer
                                            className='react-player'
                                            controls='true'
                                            url='https://youtu.be/z64IO2BUmoI?si=rTcm38q-IbSXtGXn'
                                            
                                            width='100%'
                                            height='100%'
                            />
                       </div>
                  </div>
             </div>

            {/* Vlogger---Section---- */}
             <div className="vlogger-section">
                        <h2>Vlogger</h2>
                  <div className='vlogger-first'>
                     <div className='vlogger-first-txt'>
                        <p>In today`s times, when we present ideas in an engaging and humorous mannner, they reach people more effectively. For this reason, I have created more awareness videos as fun vlogs.</p>
                      </div>
                      <div className='vlogger-first-photo'></div>
                  </div>
                  <div className='vlogger-second'>
                        <div className='vlogger-second-video-div'>
                            <ReactPlayer
                                            className='react-player'
                                            controls='true'
                                            url='https://youtu.be/Qm6fIz-aQ3I?si=0tqPW4l3b4RN2DqM'
                                            width='100%'
                                            height='100%'
                            />
                        </div>
                        <div className='vlogger-second-video-div'>
                            <ReactPlayer
                                            className='react-player'
                                            controls='true'
                                            url='https://www.youtube.com/watch?v=Z-CsP6uny4E'
                                            width='100%'
                                            height='100%'
                            />
                        </div>
                        <div className='vlogger-second-video-div'>
                          <ReactPlayer
                                            className='react-player'
                                            controls='true'
                                            url='https://youtu.be/yaPdQYyFhAc?si=2l64jUR_-VgMEXG0'
                                            width='100%'
                                            height='100%'
                            />
                        </div>
                  </div>
             </div>

             {/* Actor-----Section =--- */}
             <div className="actor-section">
                <h2>Actor</h2>
                <p>In order to take my acting to the next level, I have acted in over twenty short films as a hero, villain , and transgender character.</p>
                <div className='actor-photo'>
                     <div className='actor-photo1'>
                     </div>
                     <div className='actor-photo2'></div>
                </div>
                <div className='actor-video'>
                        <div className='actor-video-div'>
                          <ReactPlayer
                                            className='react-player'
                                            controls='true'
                                            url='https://youtu.be/OjGpnrriE5M?si=wkhwpz_BCZlebNDS'
                                            width='100%'
                                            height='100%'
                            />
                        </div>
                        <div className='actor-video-div'>
                            <ReactPlayer
                                            className='react-player'
                                            controls='true'
                                            url='https://youtu.be/hQHBvHgpzRQ?si=Ihaw1Ey5DEnH3m8u'
                                            width='100%'
                                            height='100%'
                            />
                        </div>
                        <div className='actor-video-div'>
                             <ReactPlayer
                                            className='react-player'
                                            controls='true'
                                            url='https://youtu.be/iuhjYL2yafo?si=22qr_CmG7SGWChqG'
                                            width='100%'
                                            height='100%'
                            />
                        </div>
                  </div>
                
             </div>
    
            {/* ----Pattimandram-----Section */}
             <div className="pattimandram-section">
                    <div className='patti-text'>
                        <h2>Pattimandram</h2>
                        <p>We have been engaging with people through videos. To directly interact and raise awareness, a special Pattimandram was conducted by theneer idaivelai with over a hundred viewers. During the discussion, I spoke on the topic of increasing the celebration of the Pongol festival, which has been diminishing over time.</p>
                    </div>
                    <div className='patti-grid' style={{display:"flex"}}>
                        <div className='p-grid-d1'>
                            <div className='patti-photo p-p-1'></div>
                            <div className='p-grid-d2' style={{display:"flex"}}>
                                <div className='patti-photo p-p-2'></div>
                                <div className='patti-photo p-p-3'></div>
                            </div>
                        </div>
                            <div className='p-grid-d3'>
                                <div className='patti-photo p-p-4'></div>
                                <div className='patti-photo p-p-5'></div>
                                <div className='patti-photo p-p-6'></div>
                            </div>
                        
                    </div>
                    <div className="patti-video">
                      <ReactPlayer
                                            className='react-player'
                                            controls='true'
                                            url='https://www.youtube.com/watch?v=uWsk0sTZWns'
                                            width='100%'
                                            height='100%'
                            />
                    </div>
             </div>
              {/* Acting Class */}
              <div className="acting-class-section">
                        <div className='acting-cls-text'>
                            <h2>Acting Class</h2>
                            <p>To determine if I truly have a talent for acting, I have been undergoing acting training in a <b>thirai pattarai acting workshop</b> for the past six months.</p>
                        </div>
                        <div className='acting-cls-videos'>
                             <div className="acting-cls-video a-c-v1">
                                <InstagramEmbed
                                                className='insta-player'
                                                url='https://www.instagram.com/reel/C7_kOhZC-Hp/?igsh=MW02azFhZnhxMjh4dw=='
                                                height={600}
                                                 captioned
                                       
                                />
                             </div>
                             <div className="acting-cls-video a-c-v2">
                                <InstagramEmbed
                                                className='insta-player'
                                                url='https://www.instagram.com/reel/C8mPAmpix1-/?igsh=d2tjaGw1am9oZTIy'
                                                height={600}
                                />
                             </div>
                             <div className="acting-cls-video a-c-v3">
                                <InstagramEmbed
                                                className='insta-player'
                                                url='https://www.instagram.com/reel/C8jjFIhC_89/?igsh=bGhrbm5kMjA5dG5p'
                                                height={600}
                                />
                             </div>
                        </div>
              </div>

              {/* Documentary section */}
              <div className="documentary-section">
                 <h2>Documentary</h2>
                <div className="document-photo">
                     <div className="docu-photo-d1">
                          <div className="docu-photos d-p1"></div>
                          <div className="docu-photos d-p2"></div>
                     </div>
                    <div className="docu-photos d-p3"></div>
                    <div className="docu-photos d-p4"></div>
                </div>
                <img src={photo14} className='photo14'></img>
                <div className="docu-txt">
                     <p>Can a young man born in a rural area not fall in love with bulls? Since I was old enough to understand, I have attended many events, met many bulls, and interacted with numerous players. To this day, we have been creating awareness videos highlighting the challenges and benefits of Jallikattu, Manjuvirattu, and Vadamaadu Manjuvirattu. This year, for Pongal, I have also made a documentary video featuring the owners of bulls in Avaniyapuram</p>
                </div>
                <div className="docu-video">
                <ReactPlayer
                                            className='react-player'
                                            controls='true'
                                            url='https://youtu.be/uI73dKgmeZQ?si=tO0iZM9PZXv9rgeH'
                                            width='100%'
                                            height='100%'
                            />
                </div>

              </div>
              
              {/* Vikatan Article */}
               <div className="vikatan-section">
                  <h2>Vikatan Article</h2>
                  <div className="vikatan-photo">
                         <div className="vikatan-photos v-p1"></div>
                      <div className='vikatan-p-div' >
                         <div className="vikatan-photos v-p2"></div>
                         <div className="vikatan-photos v-p3"></div> 
                      </div>
                  </div>
               </div>

               {/* Gallery _ Section */}

              <div className="gallery-section" id='gallery'>
                 <h2>Gallery</h2>
                 <div className="gallery-photos">

                      <div className="g-div1" >
                           <div className="g-photos g-p1"></div>
                           <div className="g-photos g-p2"></div>
                           <div className="g-photos g-p3"></div>
                      </div>
                      <div className="g-div2">
                           <div className="g-photos g-p4"></div>
                           <div className="g-photos g-p5"></div>                          
                      </div>
                      <div className="g-div3">
                           <div className="g-photos g-p6"></div>                          
                           <div className="g-photos g-p7"></div>                          
                           <div className="g-photos g-p8"></div>                          
                      </div>
                      <div className="g-div4">
                           <div className="g-photos g-p9"></div>                          
                           <div>
                               <div className="g-photos g-p10"></div>                          
                               <div className="g-photos g-p11"></div>                          
                           </div>
                            <div className="g-photos g-p12"></div>                          
                      </div>
                      <div className="g-div5">
                            <div className="g-photos g-p13"></div>                          
                            <div className="g-photos g-p14"></div>                          
                             
                      </div>
                 </div>
              </div>

        </div>
        {/* WorkExperience End */}


        {/* contact us */}
        <div className="contact-us" id='contact'>
            <h2>Let`s Connect</h2>
            <p className='p1'>I'm always open to new opportunities. Feel free to drop me a line if you have any questions or projects!</p>
            <div className='contact-button'>
                   <div className='c-insta-button'><a>Follow me on Instagram </a><FaInstagram className='insta-icon'/></div>
                   <div className="c-email-button"><a>Email</a> <MdOutgoingMail className='email-icon' /></div>
            </div>

             <div className="contact-input">
                         <div className='input'>
                                 <div className='name'><input type='text' name="name" required /><p>Name</p></div>
                                 <div className='email'><input type='text' name="email"  required/><p>Email</p></div>
                                 <div className='message' ><textarea required name="message"  /><p>Message</p></div>
                                 <div className='submit-button'><button type='submit'>Submit</button></div>
                           </div>
                            <div className='input-right'>
                                <div className="input-contact-right">
                                        <div className="instagram-div" onClick={instahandleclick}>
                                            <div className='insta-over-div-bg over-div-bg'>
                                                
                                            </div>
                                            <div className='insta-profile'>
                                                <p>sathis_official_29</p>
                                            </div>
                                            <div className="insta-up-arrow">
                                                    <VscArrowCircleUp className='insta-up-arrowicon' />
                                                </div>                                       
                                        </div>
                                        <div className="whatsapp-div" onClick={whatsapphandleclick}>
                                            <div className='whats-over-div-bg over-div-bg'></div>
                                            <div className='whatsapp-profile'>
                                                <p>Whatsapp</p>
                                            </div>
                                            <div className="what-up-arrow">
                                                    <VscArrowCircleUp className='what-up-arrowicon' />
                                            </div>    
                                        </div>
                                        <div className="location-div">
                                                <div className='location-over-div-bg over-div-bg'></div>
                                                <div className='location-profile'>
                                                    <p>Chennai, TamilNadu</p>
                                                </div>
                                                <div className="location-up-arrow">
                                                        <VscArrowCircleUp className='location-up-arrowicon' />
                                                </div>    
                                        </div>
                                </div>
                            </div>


                           {/* <div className="also-in-social">
                                <div className='in-social-logo'></div>
                                <div>
                                   <p className='also-s-p1'>Also in social</p>
                                   <span className='also-s-p2'>Feel free to reach me at any of social networks listed below:</span>
                                </div>
                                <div className="also-s-icon">
                                      
                                </div>
                           </div> */}
             </div>
        </div>


       
    </div>
  )
}

export default Page