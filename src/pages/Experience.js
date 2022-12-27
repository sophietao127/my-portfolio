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
          contentStyle={{ background: '#edd7e5'}}
          iconStyle={{background: "#502f64", color: '#fff'}}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Xi'an Jiaotong-Liverpool University
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Bachelor's Degree
          </h4>
          <p> Electrical and Electronic Engineering </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2018 - 2020'
          contentStyle={{ background: '#edd7e5'}}
          iconStyle={{background: "#502f64", color: '#fff'}}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            University of Liverpool
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Bachelor's Degree
          </h4>
          <p> Electrical and Electronic Engineering </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2019.10 - 2020.04'
          contentStyle={{ background: '#edd7e5'}}
          iconStyle={{background: "#502f64", color: '#fff'}}
          icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Alder Hey Hospital / University of Liverpool
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Liverpool, UK
          </h4>
          <p> Student Researcher (Part-Time) </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2021 - 2023'
          contentStyle={{ background: '#edd7e5'}}
          iconStyle={{background: "#502f64", color: '#fff'}}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            University of Washington
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Master's Degree
          </h4>
          <p> Electrical and Computer Engineering - Computer Enginneering / Data Science</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2022.01 - 2022.06'
          contentStyle={{ background: '#edd7e5'}}
          iconStyle={{background: "#502f64", color: '#fff'}}
          icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Zero Avia / University of Washington
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Seattle, USA
          </h4>
          <p> Software Engineer (Capstone Team Member, Part-Time) </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2022.07 - 2022.10'
          contentStyle={{ background: '#edd7e5'}}
          iconStyle={{background: "#502f64", color: '#fff'}}
          icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Sensors, Energy and Automation Labroratory (SEAL)
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Seattle, USA
          </h4>
          <p> Software Developer (Web Team, Part-Time) </p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  )
}

export default Experience;