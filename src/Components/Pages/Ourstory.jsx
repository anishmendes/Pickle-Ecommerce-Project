import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import FlagIcon from '@mui/icons-material/Flag';
import PeopleIcon from '@mui/icons-material/People';
import StarIcon from '@mui/icons-material/Star'
import ConstructionIcon from '@mui/icons-material/Construction';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import './Story.css'
import '../../App.css';
const Ourstory = () => {
  return (


    <>
       <div className='flex flex-row justify-around items-center mb-[40px] mt-[40px] bg-navbar text-black'>

<div className='flex border-[30%] items-start pl-[20px] mt-[100px] pb-[100px] border border-[15px] border-hard '>
  <img src="./src/assets/srijana.png" alt="person" className='h-[400px] w-[400px]'/>
</div>
<div className='flex flex-col pr-[80px] pt-[160px] pb-[60px] max-w-[550px]'>
  <h1 className='text-2xl font-bold pb-6 text-green-800'>Who Are We?</h1>

  <h2 className='text-xl font-medium pb-6 text-hard'>It all started with her!</h2>

  <p className='font-medium'>Srijana Aryal is an exemplary and inspirational woman who epitomizes resilience and determination in the face of adversity. As a single parent, she encountered financial crisis following the untimely demise of her husband. Despite the immense struggles she faced, Srijana refused to succumb to despair and demonstrated unwavering determination to create a better life for herself and her family.</p>
</div>

</div>





    <div className='mt-[50px] flex items-center bg-navbar1 pt-[50px] pb-[50px]'>
       

      



     <VerticalTimeline >
  <VerticalTimelineElement
    className="vertical-timeline-element--work "
    
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2009 - 2011" 
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<FlagIcon />}
  >
    <h3 className="vertical-timeline-element-title text-xl font-bold text-green-600">Our Humble Beginnings</h3>
    {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
    <p>
    Srijana's entrepreneurial journey began after her husband's demise, driven by her determination to support herself and her son. She entered the business world, specializing in pickle-making, starting with a small variety that grew into over 10 diverse options.

    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2015-2016"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<PeopleIcon />}
    >
    <h3 className="vertical-timeline-element-title text-xl font-bold text-green-600">Dedication</h3>
    {/* <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4> */}
    <p>
    Srijana's journey into entrepreneurship blossomed from the ashes of adversity following her husband's passing. With dedication as her guiding light, she ventured into the art of pickle-making, starting with a humble selection that flourished into a diverse array of over 10 tantalizing options. Each jar filled not just with flavors, but with the essence of her resilience and dedication to turning challenges into Glories.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2017-2024"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<ConstructionIcon />}
    >
    <h3 className="vertical-timeline-element-title  text-xl font-bold text-green-600">Growth</h3>
    {/* <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4> */}
    <p>
    As Srijana poured herself into her pickle-making venture, her business flourished steadily, fueled by glowing word-of-mouth reviews. Her kitchen became a bustling hub of creativity, where new flavors sparked from her innovative spirit. Soon, her pickles graced gourmet stores and local markets, enchanting food enthusiasts everywhere.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="Present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<PersonAddAlt1Icon />}
    >
    <h3 className="vertical-timeline-element-title text-xl font-bold text-green-600 ">Inspirational</h3>
    {/* <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4> */}
    <p>
    Srijana's thriving pickle business turned her into an inspiration, embodying resilience and determination. Her story touched many facing challenges, motivating them to pursue their dreams with courage. Through her journey, Srijana not only transformed her own life but also became a beacon of hope for others. Her achievements remind us that with passion and perseverance, any challenge can lead to greatness. Srijana stands as a testament to the potential within us all, waiting to be unlocked through hard work and belief in ourselves.
    </p>
  </VerticalTimelineElement>
  {/* <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="April 2013"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<SchoolIcon />}
    >
    <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
    <p>
    Strategy, Social Media
    </p>
  </VerticalTimelineElement> */}
  {/* <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="November 2012"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<SchoolIcon />}
  >
  <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
    <p>
    Creative Direction, User Experience, Visual Design
    </p>
  </VerticalTimelineElement> */}
  {/* <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2002 - 2006"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<SchoolIcon />}
    >
    <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
    <p>
    Creative Direction, Visual Design
    </p>
  </VerticalTimelineElement> */}
  <VerticalTimelineElement
  contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
   date="Thank You"
   iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
   icon={<StarIcon />}
   
   >
     <h3 className="vertical-timeline-element-title text-xl font-bold text-green-600">Be part our story</h3>
    {/* <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4> */}
    <p>
    In the heart of tradition and taste, Gaunko Aachar brings the authentic flavors of homemade pickles straight to your doorstep. Inspired by age-old recipes and crafted with the finest ingredients, our pickles capture the essence of rustic culinary heritage. At Gaunko Aachar, we believe in preserving the rich cultural legacy of pickle making, offering a diverse range of mouthwatering aachars that promise to take you on a flavorful journey back to the simplicity and warmth of rural kitchens.
    </p>
    </VerticalTimelineElement>
</VerticalTimeline>
    </div>
     </>
  )
}

export default Ourstory
