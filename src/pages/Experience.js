import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor="#502f64">
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2016 - 2018'
          iconStyle={{background: "#502f64", color: '#fff'}}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Xi'an Jiaotong-Liverpool University, Suzhou, China
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Bachelor's Degree
          </h4>
          <p> Electrical and Electronic Engineering </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2018 - 2020'
          iconStyle={{background: "#502f64", color: '#fff'}}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            University of Liverpool, Liverpool, UK
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Bachelor's Degree
          </h4>
          <p> Electrical and Electronic Engineering </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2016 - 2018'
          iconStyle={{background: "#502f64", color: '#fff'}}
          icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            My Random High School, Random Place, Random State
          </h3>
          <p> High School Diploma </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2021 - 2023'
          iconStyle={{background: "#502f64", color: '#fff'}}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            University of Washington, Seattle, USA
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Master's Degree
          </h4>
          <p> Electrical and Computer Engineering - Computer Enginneering / Data Science</p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  )
}

export default Experience;