import React from 'react';
import {
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Row,
  Col,
  Card,
  CardTitle,
  CardText,
  Button,
} from 'reactstrap';
export default function Tabs({ data }) {
  return (
    <>
      <Nav tabs>
        {data.map((item) => {
          return (
            <>
              <NavItem key={item.id}>
                <NavLink active onClick={function noRefCheck() {}}>
                  {item.title}
                </NavLink>
              </NavItem>
            </>
          );
        })}
      </Nav>
      <TabContent activeTab="1">
        {data.map((item) => {
          return (
            <>
              <TabPane tabId={`${item.id}`} key={item.id}>
                <Row>
                  <Col sm="12">
                    <h4>{item.data}</h4>
                  </Col>
                </Row>
              </TabPane>
            </>
          );
        })}
      </TabContent>
    </>
  );
}
