import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School'; 
import StarIcon from '@mui/icons-material/Star'

const Ourstory = () => {
  return (
    <div className='mt-[50px] flex items-center bg-gray-300'>
     <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2009 - 2011" 
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title text-xl font-bold text-green-600">Our Humble Beginnings</h3>
    {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
    <p>
    Srijana's entrepreneurial journey began after her husband's demise, driven by her determination to support herself and her son. She entered the business world, specializing in pickle-making, starting with a small variety that grew into over 10 diverse options.

    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2015-2016"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title text-xl font-bold text-green-600">Dedication</h3>
    {/* <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4> */}
    <p>
    Srijana's journey into entrepreneurship blossomed from the ashes of adversity following her husband's passing. With dedication as her guiding light, she ventured into the art of pickle-making, starting with a humble selection that flourished into a diverse array of over 10 tantalizing options. Each jar filled not just with flavors, but with the essence of her resilience and dedication to turning challenges into Glories.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2017-2024"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title  text-xl font-bold text-green-600">Growth</h3>
    {/* <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4> */}
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2006 - 2008"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
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
  </VerticalTimelineElement>
  <VerticalTimelineElement
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
  </VerticalTimelineElement>
  <VerticalTimelineElement
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
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<StarIcon />}
  />
</VerticalTimeline>
    </div>
  )
}

export default Ourstory
