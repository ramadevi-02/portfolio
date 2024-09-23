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
                    <p>hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</p>
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
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
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