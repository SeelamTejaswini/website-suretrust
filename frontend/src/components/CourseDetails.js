
import React from 'react';
import { useParams } from 'react-router-dom';
import './CourseDetails.css';

const courseData = {
    1: {
        name: 'Data Science',
        description: 'Introduction to data analysis tools:Data structures ,Linear Regression, Statistical Inference,Statistical Models,etc..',
        trainers: [
            { name: 'John Doe', profession: 'Senior Data Scientist', description: 'Expert in Data Science with over 10 years of experience.' },
            { name: 'Jane Smith', profession: 'Python Developer', description: 'Specialist in Python programming and AI technologies.' }
        ]
    },
    2: {
        name: 'Python',
        description: 'To train the learners to program in Python, analyzing and visualizing data,developing & evaluating models; and get introduced to complex computations',
        trainers: [
            

            { name: 'Mr Harshad Punghera', profession: 'ML Engineer at Atsuya Technologies, Chennai', description: 'B.E (EXTC) PGP in Data Science' },
            { name: 'Mr. Jayanti Jagannath', profession: 'python', description: 'B.Tech (CSE) and Pursuing MS in Univerisity of Florida - USA' },
            { name: 'Mr. Bhuvanesh Chellapandian',profession:"Data Analyst at Tech Volt Pvt Ltd", description:"B.E and PGD in Data Science & Engineering." }
        ]
    },
    3: {
        name:"JAVA",
        description:"To train students to become Java Professionals",
        trainers:[
            {name: "Mr.Praveen Burada",description:'B.Tech-IIIT, Trichy, Associate Solution Leader-Front End Developer Brane Enterprises (NSL hub)'},
            {name:"Mr. Arghya Sen Gupta",description:"B.Tech",profession:" IC4/Technical Team Lead - Oracle India Pvt Ltd, Bangalore."},
            {name: "Ms. Sakshi Namdeo",profession:" Programmer Analyst Trainee - Cognizant",description:"B.Tech"}   

        ]
    },
    4: {
        name: 'Full Stack Development',
        description: 'The course objective is train students to develop and deploy a fully functional website from end to end. ',
        trainers: [
            

            { name: 'Mr. Jasdeep Singh', profession: 'Senior Technical Manager at Microsoft', description: 'B.Sc & MCA' },
            { name: 'Mr. Paramdeep Singh', profession: 'Software Engineer - (React & Python) UST Product Engineering', description: 'M.Tech (CSE)' },
            { name: 'Mr. Prasanna Kundu',profession:"Software Engineer at Zauvijek", description:"MCA." }
        ]
    },
    5: {
        name: 'Artificial Intelligence',
        description: '',
        trainers: [
            

            { name: 'Mr. Lakshmivaraprasad Nallana,', profession: 'Senior Specialist, SATVEN - Hyderabad', description: 'B.Tech & M.Tech' },
            { name: 'Mr. Jayanti Jagannath', profession: 'python', description: 'B.Tech (CSE) and Pursuing MS in Univerisity of Florida - USA' },
         
        ]
    },
    6: {
        name: 'Machine Learning',
        description: 'To train the learners to program in Python, analyzing and visualizing data,developing & evaluating models; and get introduced to complex computations',
        trainers: [
            

            { name: 'Ms. Mayuri Gaikwad', profession: ' Worked on many projects using Python and ML models.', description: 'B.Tech(CSE)' },
            { name: 'Mr. Shyam Ashok Chakole', profession: 'AI&ML Trainer', description: 'B.Tech'},
            
        ]
    },
    7: {
        name: 'IOT',
        description: 'This Course can make the learners build embedded systems, IoT applications, and projects which are being part of smart cities',
        trainers: [
            

            { name: 'Ms. Keerthana Katuri', profession: 'Assistant Systems Engineer at TCS', description:'B.Tech(EC),Twice GATE Qualified with very good score' },
            { name: 'Ms. Sornalaskhmi', profession: 'Product & Development Engineer - Atsuya Technologies', description: 'ME (Communication & Networking)' },
          
        ]
    },
    8: {
        name: 'VLSI',
        description: 'Fundamentals,Introduction to CMOS Process Technology and Chip Fabrication,Verilog, CDC, Lint and TCL,verification....',
        trainers: [
            

            { name: 'Mr. Nikhil B', profession: 'CAD Engineer, Infineon Technologies', description: 'B.Tech and M.Tech' },
            { name: 'Mr. Aditya Kumar', profession: 'DFT Engineer at Mediatek', description: 'B.Tech & M.Tech in VLSI & Cyber Physical System, IIT - Jammu' },
            
        ]
    },
    9: {
        name: 'Data Stractures(DSA)',
        description: 'Master data structures and algorithms to succeed in engineering coursework, land high-paying positions at major tech organizations, and enhance your problem-solving abilities',
         trainers: [
            

            { name: 'Mr. Lijo Joseph', profession: 'Software Developer at Fidelity National Information Services (FIS), Bangalore.', description: '' },
        ]
    },
    10: {
        name: 'UI/UX',
        description: 'To get industry relevant learning of a technical project management and its designing from end to end besides getting the knowledge enhancement in core concepts and associated attributes of management and designing skills.',
        trainers: [
            

            { name: 'Mr. Sen Ghirri Sudhan', profession: 'UI/UX Designer - MetricStream', description: 'B.Tech' },
        ]
    },
    12: {
        name: 'SQL',
        description: 'The objective of this course is to help students acquire knowledge on how to connect PowerBI to Microsoft SQL Server database and then analyze the data to get insights.',
        trainers:[  

            { name: 'Mr. Uma Mahesh', profession: 'Senior Manager at Novac Tech, Chennai, India', description: 'B.Tech from JNTUH' },
        ]

    }
    
};

const CourseDetails = () => {
    const { courseId } = useParams();
    const course = courseData[courseId];

    if (!course) {
        return <div>Course not found</div>;
    }

    return (
        <div className="course-details-container">
            <h2>{course.name}</h2>
            
            <div className="trainers-container">
                <h3>Trainers</h3>
                {course.trainers.map((trainer, index) => (
                    <div key={index} className="trainer-card">
                        <h4>{trainer.name}</h4>
                        <p><strong>Profession:</strong> {trainer.profession}</p>
                        <p><strong>Description:</strong> {trainer.description}</p>
                    </div>
                ))}
            </div>
            
            <div className="course-description">
                <h3>Course Description</h3>
                <p>{course.description}</p>
            </div>
        </div>
    );
};

export default CourseDetails;
