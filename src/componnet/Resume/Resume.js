import React from "react";
import { FaUserGraduate } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { BsGraphDown } from "react-icons/bs";
import { IoColorPalette } from "react-icons/io5";
import "../Resume/Resume.css";
import Project from "../inc/Project/Project";
import Inst from "../inc/Interests/Inst";
import Education from "../inc/Education/Education";
import Processbar from "../inc/processbar/Processbar";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import ListGroup from "react-bootstrap/ListGroup";

function Resume() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row className="p-3 my-5 h-100">
        <Col md={5} lg={4} className="offset-lg-1 overflow-hidden d-flex">
          {/* resume icons */}
          <div className="bg-sky h-100" style={{ width: "45px" }}>
            <ListGroup as="ul" className="rounded-0 h-100 py-3 py-md-5">
              <ListGroup.Item as="li" className="border-0 text-white my-2">
                <FaUserGraduate />
              </ListGroup.Item>
              <ListGroup.Item as="li" className="border-0 text-white my-2">
                <FaComputer />
              </ListGroup.Item>
              <ListGroup.Item as="li" className="border-0 text-white my-2">
                <IoColorPalette />
              </ListGroup.Item>
              <ListGroup.Item as="li" className="border-0 text-white my-2">
                <BsGraphDown />
              </ListGroup.Item>
            </ListGroup>
          </div>
          {/* resume title */}
          <div className="w-full py-3 py-md-5">
            <Nav variant="pills" className="flex-column">
              <Nav.Item className="h-10 my-2">
                <Nav.Link
                  eventKey="first"
                  className="text-sky font-bold hover:text-white hover:bg-sky"
                  style={{ borderRadius: "0 20px 20px 0 ", width: "80%" }}
                >
                  Education
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="h-10 my-2">
                <Nav.Link
                  eventKey="second"
                  className="text-sky font-bold hover:text-white hover:bg-sky text-nowrap"
                  style={{ borderRadius: "0 20px 20px 0 ", width: "80%" }}
                >
                  Programming skills
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="h-10 my-2">
                <Nav.Link
                  eventKey="third"
                  className="text-sky font-bold hover:text-white hover:bg-sky"
                  style={{ borderRadius: "0 20px 20px 0 ", width: "80%" }}
                >
                  Project
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="h-10 my-2">
                <Nav.Link
                  eventKey="fourth"
                  className="text-sky font-bold hover:text-white hover:bg-sky"
                  style={{ borderRadius: "0 20px 20px 0 ", width: "80%" }}
                >
                  Interests
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        </Col>
        <div className="vr shadow"></div>
        <Col
          md={6}
          className="p-3 ps-5 p-md-3 ps-md-5 scrollspy"
          style={{ height: "300px", overflow: "scroll" }}
        >
          <Tab.Content>
            <Tab.Pane eventKey="first" className="">
              <Education />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <Row className="row row-cols-2">
                <Processbar />
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              {" "}
              <Project
                Title="personal portfolio website"
                subTitle="Technologys Used React js,Bootstrap,React router,tailwind."
                summary="A personal portfolio website href showcase all my details and  project at one place."
              />
              <Project
                Title="Landing page"
                subTitle="Technologys Used HTML,CSS,Javascript,Bootstrap."
                summary="Created a Landing page website using HTML,CSS,JavaScript for practice,showcasing my web development skills."
              />
              <Project
                Title="Food Website"
                subTitle="Technologys Used HTML,CSS,Javascript,Jquery,Bootstrap."
                summary="Created a Food website using HTML,CSS,JavaScript for practice,showcasing my web development skills."
              />
            </Tab.Pane>
            <Tab.Pane eventKey="fourth">
              <Inst />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default Resume;
