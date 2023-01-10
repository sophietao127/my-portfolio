import Proj1 from '../assets/proj1.jpg';
import Proj2 from '../assets/proj2.jpg';
import Proj3 from '../assets/proj3.jpg';
import Proj4 from '../assets/proj4.jpg';
import Proj5 from '../assets/proj5.jpg';
import Proj6 from '../assets/proj6.jpg';
import pdf1 from '../assets/596A.pdf';
import pdf2 from '../assets/ZeroAviaReport.pdf';
import pdf3 from '../assets/API_Document.pdf';
import pdf4 from '../assets/tactileReport.pdf';
import pdf5 from '../assets/fypReport.pdf';
import poster4 from '../assets/tactile.pdf';
import poster5 from '../assets/fypPoster.pdf';


export const projectList = [
  {
    name: "Object Detection in Street (Machine Learning)",
    image: Proj1,
    skills: "Python, Pytorch, Yolo v5 Network, Google Colab",
    time: "Graduate",
    report: pdf1,
    video: null,
    posterPPT: "https://docs.google.com/presentation/d/e/2PACX-1vQokcEuY3OcbdbNYRRzAD5Zoa3zUvchm3yckgFHwmGn2btIv6Ygi7oz3aehPMbmCQ/embed?start=false&loop=false&delayms=3000",
    posterPDF: null,
    introduction: "This project focuses on object detection in different street scenes, " +
                  "the targets would be detected including people, animals and transportation. " +
                  "Training existed dataset: Use COCO dataset based on three different models YOLOv5 network. " +
                  "Training new dataset: New Datasets created manually by using Makesense.ai. " +
                  "The detection performance of each model would be observed based on these datasets"
  },
  {
    name: "Web Tool for Testing Airbone Equipment",
    image: Proj2,
    skills: "HTML, CSS, JavaScript, Bootstrap, Python, Flask",
    time: "Graduate",
    report: pdf2,
    video: "https://www.youtube.com/embed/S3JcjERpU-U",
    posterPPT: "https://docs.google.com/presentation/d/e/2PACX-1vS-vS_E8zdWcuuCwJx66prZ5SgI7yUpPWrTBt3Iz3HdepC_tIEoNaLRMbV23q5MkKvbG9i8xOwpJEbW/embed?start=false&loop=false&delayms=3000",
    posterPDF: null,
    introduction: "This project developed an interactive web app for testing environmental conditions and " +
                  "airborne equipment procedures, that is titled 'RTCA DO-160G'. DO-160G contains 16 different " +
                  "sections for testing. This App aims to take this DO-160G from a hardback copy to an interactive application. " +
                  "The current project focus will be on two sections: Section 4 - Temperature Control and Section 6 - Humidity Control"
  },
  {
    name: "Yipper Website",
    image: Proj3,
    skills: "JavaScript, HTML, CSS, Node.js, SQLite",
    time: "Graduate",
    report: pdf3,
    video: "https://www.youtube.com/embed/eq-LVoLJqaw",
    posterPPT: null,
    posterPDF: null,
    introduction: "'Yipper' is inspired by the website 'Twitter' but this site is exclusively for dogs " +
                  "(the superior household pet and companion). " +
                  "Comes from CSE154 Web Programming CourseWork"
  },
  {
    name: "Tactle Mouse Wheel",
    image: Proj4,
    skills: "C/C++, C#, Ardunio, 3D Printing, Virtual Reality",
    time: "Undergraduate",
    report: pdf4,
    video: "https://www.youtube.com/embed/0_Fmej8eGX0",
    posterPPT: null,
    posterPDF: poster4,
    introduction: "This project developed a device that uses a drive wheel below fingertip to move up and down, " +
                  "make contact with the virtual surface, and rotate synchronously as user slides along the " +
                  "virtual surface."
  },
  {
    name: "Medical Image Processing",
    image: Proj5,
    skills: "Python, DICOM, Numpy, Panda, Opencv, Excel",
    time: "Undergraduate",
    report: pdf5,
    video: null,
    posterPPT: null,
    posterPDF: poster5,
    introduction: "This Project built and applied a mathematical model to achieve coordinates transformation" +
                "between Scanner Coordinate Systems and Anatomical Coodrinate Systems. " +
                "It provides more convenience for clinicians' and researchers' work on data analysis and visualization."
  },
  {
    name: "Upcomming...",
    image: Proj6,
    skills: "...",
    time: "Graduate",
    report: null,
    video: null,
    posterPPT: null,
    posterPDF: null,
    introduction: "xxxxxxxxxxxxxx"
  }
]