import {Col, Container, Row, Nav, Tab} from "react-bootstrap"
import { ProjectCard } from "./ProjectCard";
import colorsharp2 from "../assets/img/color-sharp2.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {


    const projects = [
        
        {
            title: "Lilypad",
            description:" Developed a responsive e-commerce EV website using React.js to showcase Electric Vehicles and able to buy the products.",
            imgUrl: projImg3,
         },

         {
            title: "Cardinal Life Sciences",
            description: "Developed a comprehensive product catalog application using React.js, allowing users to browse awide range of high-quality reagents.",
            imgUrl: projImg2,
         },

    ];
         
    
    return(
          <section className="project" id="project">
            <Container>
                <Row>
                    <Col size={12}>
                    <TrackVisibility>
                    {({isVisible}) => 
                     <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                    <h2>Projects</h2>
                    <p>Developed a responsive and user-friendly web application that integrates cutting-edge technologies to enhance functionality and streamline user interactions, resulting in improved performance and user satisfaction.</p>
   <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" defaultActiveKey="/projects">
                    <Nav.Item>
                    <Nav.Link eventKey="first">Projects</Nav.Link>
                     </Nav.Item>
                     <Nav.Item>
                    <Nav.Link eventKey="second">Tab One</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="third">Tab Two </Nav.Link>
                   </Nav.Item>
                   </Nav>
                   <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                        <Row>
                            {
                                projects.map((Projects, index) => {
                                    return(
                                        <ProjectCard
                                        key={index}
                                        {...Projects}
                                        />
                                    )
                                })
                            }
                        </Row>
                        </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        <p>● Created a dynamic product listing page using React.js and Redux for state management.</p>
                          <p> ● Integrated a mock API to fetch product data and implemented search and filter functionalities.</p>
                          <p>● Utilized CSS Grid and Flexbox for a responsive layout.</p>
                      <p>  ● Designed a user-friendly interface with responsive design principles.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>● Implemented a dynamic search and filter functionality to help users easily find specific compounds
                      tailored to their research needs.</p>
                      <p>● Created a dynamic product listing page using React.js and Redux for state management.</p>
                      <p> ● Enhanced user experience by optimizing the application for performance, ensuring quick load times
                      and smooth navigation..</p>
                      <p> ● Collaborated with a team to integrate API endpoints for fetching up-to-date product information and
                      availability..</p>
                      <p>● Utilized responsive design principles to ensure compatibility across various devices and screensizes.</p>

                    </Tab.Pane>
                
                   </Tab.Content>
                   </Tab.Container>
                   </div>}
                   </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorsharp2 }></img>
          </section>
    )
}