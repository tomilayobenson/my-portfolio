import React from 'react';
import { Row, Col } from 'reactstrap';
import { SKILLS } from '../../data/SKILLS';

const SkillsList = () => {
    return (
        <>
            <Row>
                {
                    SKILLS.map((skill, idx) => {
                        return (
                            <Col xs={6} key={idx}>
                                <p><i class="fa fa-caret-right iconCol" aria-hidden="true"></i> {skill}</p>
                            </Col>
                        )
                    })
                }
            </Row>
        </>
    )
}

export default SkillsList