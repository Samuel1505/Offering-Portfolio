import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/cocktail-project.jpg";
import projImg2 from "../assets/img/candle.jpg";
import projImg3 from "../assets/img/quickvote.jpg";
import projImg4 from "../assets/img/vehicle2.jpg";
import projImg5 from "../assets/img/vehicle3.jpg";
import projImg6 from "../assets/img/crypto.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Aromae Candle Design",
      description: "This Aromaé website highlights beautiful handmade candles. Visitors can explore products, learn about their quality, read customer reviews, and sign up for updates. The warm design creates a cozy, welcoming feel",
      imgUrl: projImg2,
       
    },
    {
      title: "Cocktail & Milkshake App",
      description: "This app design shows screens for a cocktail and milkshake ordering app. The main menu lets users browse drinks, the details screen gives info about each drink, and the checkout screen summarizes the order with a final price and checkout button. The vibrant colors and simple layout make it easy to use.",
      imgUrl: projImg1,
      link: "https://eu.docs.wps.com/l/sIK7ry_DPAe6zyLkG?v=v2",
      
    },
    
    {
      title: "QuickVote",
      description: "The design of a quickvote spp that user can vote realtime directly through their device ",
      imgUrl: projImg3,
      link: "https://www.figma.com/design/3iVaV5zg55mxgOheYk7hR7/Design-iii?node-id=298-42&node-type=frame",
     
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "CryptoVendor Design",
      description: "The CryptoVendor site makes it easy to buy and sell with crypto. Businesses can set up online shops, connect directly with customers, and manage their store smoothly, all without extra fees or middlemen. FAQs and support are available for guidance.",
      imgUrl: projImg6,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Below are some awesome UI projects i've worked on</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Project Tab</Nav.Link>
                    </Nav.Item>
                    
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
