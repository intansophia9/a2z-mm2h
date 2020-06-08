import React from "react";
import Slide from "react-reveal/Slide";
import Bounce from "react-reveal/Bounce";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Card, CardTitle, CardText, CardColumns, CardBody } from "reactstrap";
import "./benefits.scss";

export default function Benefits() {
  return (
    <div className="benefit">
      <Hero hero="benefitHero">
        <Banner title="benefits of our program"></Banner>
      </Hero>

      <br />
      <Slide left>
        <h1 className="title">...We are a 100% risk-free program</h1>
      </Slide>
      <br />
      <CardColumns className="cards">
        <Bounce>
          <Card body outline color="secondary">
            <CardBody>
              <CardTitle className="heading">No inheritance tax</CardTitle>
              <CardText>
                You are free to transfer your property to your beneficiaries
                without levy.
              </CardText>
            </CardBody>
          </Card>
        </Bounce>
        <Bounce>
          <Card body outline color="secondary">
            <CardBody>
              <CardTitle className="heading">No minimum stay</CardTitle>
              <CardText>
                You are free to enter and leave the Malaysia anytime.
              </CardText>
            </CardBody>
          </Card>
        </Bounce>
        <Bounce>
          <Card body outline color="secondary">
            <CardBody>
              <CardTitle className="heading">
                Immediate family members
              </CardTitle>
              <CardText>
                Immediate family members can apply together. Even children(below
                the age of 21) are eligible to apply together.
              </CardText>
            </CardBody>
          </Card>
        </Bounce>
        <Bounce>
          <Card body outline color="secondary">
            <CardBody>
              <CardTitle className="heading">Parents</CardTitle>
              <CardText>
                Parents of applicant can be included in the application and they
                will be given six month social visit visa.
              </CardText>
            </CardBody>
          </Card>
        </Bounce>
        <Bounce>
          <Card body outline color="secondary">
            <CardBody>
              <CardTitle className="heading">Property purchase</CardTitle>
              <CardText>
                You are allowed to purchase unlimited properties with a minimum
                of MYR 1million per unit. MM2H Holders are able to get housing
                loan or car loan from domestic banks.
              </CardText>
            </CardBody>
          </Card>
        </Bounce>
        <Bounce>
          <Card body outline color="secondary">
            <CardBody>
              <CardTitle className="heading">Invest</CardTitle>
              <CardText>
                You can invest in unit trust, stock markets and local companies.
              </CardText>
            </CardBody>
          </Card>
        </Bounce>
        <Bounce>
          <Card body outline color="secondary">
            <CardBody>
              <CardTitle className="heading">Car</CardTitle>
              <CardText>
                MM2H Holder can buy one exempted car either local assembled car
                or one imported car from their home country.
              </CardText>
            </CardBody>
          </Card>
        </Bounce>
      </CardColumns>
    </div>
  );
}
