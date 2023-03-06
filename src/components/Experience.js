import { useState } from "react"
import { Container, Nav, NavItem, NavLink, TabContent, TabPane, Row, Col } from "reactstrap"
import Media from 'react-media'
import { Experiences } from "../data/EXPERIENCES"

const Experience = ({darkTheme}) => {
    const [activeTab, setActiveTab] = useState(1)
    return (
        <Container>
            <h3 className="text-center" id="experience" style={{ paddingTop: '4rem', paddingBottom: '3rem' }}>MY EXPERIENCE</h3>
            <Media queries={{ small: { maxWidth: 576 } }}>
                {matches => {
                    return (
                        <Row>
                            <Col sm={{offset:2,size:2}} className="mb-4">
                                <Nav pills vertical={matches.small ? false : true} style={{flexWrap: matches.small?"nowrap":"wrap"}}>
                                    {Experiences.map((experience, idx) => {
                                        return (
                                            <NavItem key={idx}>
                                                <NavLink
                                                    className={activeTab === (idx + 1) ? "active" : ""}
                                                    onClick={() => setActiveTab(idx + 1)}
                                                    style={{color:darkTheme?"var(--plain)":"var(--dark)"}}
                                                >
                                                    {experience.employer}
                                                </NavLink>
                                            </NavItem>
                                        )
                                    }
                                    )}
                                </Nav>
                            </Col>
                            <Col sm={6}>
                                <TabContent activeTab={activeTab}>
                                    {Experiences.map((experience, idx) => {
                                        return (
                                            <TabPane tabId={idx + 1} key={idx}>
                                                <h5>{experience.title} <span style={{ color: "var(--blue)" }}>{`@ ${experience.employer}`}</span></h5>
                                                <p>{`${experience.from} - ${experience.to}`}</p>

                                                {experience.details.map((detail, i) => {
                                                    return (
                                                        <>
                                                            <div style={{ display: "flex" }} className="mt-2">
                                                                <div style={{ width: "2%" }}><i class="fa fa-caret-right iconCol" aria-hidden="true"></i></div>
                                                                <div style={{ width: "98%" }}>{detail}</div>
                                                            </div>
                                                        </>
                                                    )
                                                })}

                                            </TabPane>
                                        )
                                    })}
                                </TabContent>
                            </Col>
                        </Row>
                    )
                }

                }

            </Media>


        </Container>
    )
}

export default Experience