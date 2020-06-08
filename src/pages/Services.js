import React from "react";
import ServicesCarousel from "../components/ServicesCarousel";
import { Card, CardImg, CardGroup, CardText } from "reactstrap";
import sunway from "../images/sunway.png";
import monash from "../images/monash.jpg";
import taylors from "../images/taylors.jpg";
import "./Procedure.scss";

export default function Car() {
  return (
    <React.Fragment>
      <ServicesCarousel />
      <div classname="property" id="property">
        <h2 className="procTitle" id="property">
          Purchase property for residential or investment purposes
        </h2>
        <p className="procContent">
          Foreigners or MM2H holders are allowed to purchase any number of
          residential properties in Malaysia in their own name with a minimum
          price of RM 1 million per unit, which is roughly USD300,000. <br />
          <br />
          As we are committed to catering to your needs, we also provide
          fully-furnished designer apartments for you to <b>rent</b> or{" "}
          <b>purchase</b> that have been designed by our own interior designers
          to help you get started on your residential needs in Malaysia. <br />
          <br />
          Do refer to our{" "}
          <a href="http://www.designerapartments.com.my/">
            Designer Apartments
          </a>{" "}
          website to find out more. <br />
          <br />
          Children are allowed to inherit the property without any tax or duty.
          However, property purchase is <b>not</b> a pre-requisite for
          participating in the MM2H programme.
          <br />
          <br />
        </p>
      </div>
      <h2 className="procTitle" id="car">
        Purchase Locally Assembled Car Without Tax And Duty
      </h2>
      <p className="procContent">
        You are entitled to purchase a <b>new locally assembled car</b> while
        enjoying an exemption on exercise duty and sale tax. <br />
        <br />
        For instance, a Mercedes Benz E200 Avantgarde (7G-Tronic) which normally
        costs RM 366,888.00 (or about USD113,735.28) is reduced to RM257,917.74
        (USD79,954.49) for you, as per your duty-free entitlement. A Toyota
        Camry model which normally cost about RM150,000.00 (or about
        USD46,500.00), is yours for RM103,000 (or USD31,930.00).
        <br />
        <br />
        <b>Import Personal Car Without Duty And Tax</b>
        <br />
        <br />
        You may import a car from your country of citizenship or where you are
        last domiciled with the criteria that you must have{" "}
        <b>owned the car for at least six months</b> before the MM2H visa is
        endorsed on your passport. You are exempted from paying import duty,
        excise duty and sales tax on the imported motorcar.
        <br />
        <br />
      </p>
      <h2 className="procTitle" id="domestic">
        Domestic Helper
      </h2>
      <p className="procContent">
        As a privilege of MM2H you may bring a maid or domestic helper from your
        country of origin or choose from one of these five countries :<br />
        <br />
        1. Indonesia <br />
        2. Thailand
        <br />
        3. Cambodia
        <br /> 4. Phillipines <br /> 5. Sri Lanka
        <br />
        <br />
      </p>
      <h2 className="procTitle" id="education">
        Education
      </h2>
      <p className="procContent">
        You are allowed to bring your children to stay with you as your
        dependants in Malaysia under your MM2H pass if they are <b>under </b>21
        years old and not married. <br />
        <br />
        MM2H dependents who intend to continue their schooling in Malaysia are
        required to apply for a Student Pass and should be insured throughout
        their stay under this programme.
        <br />
        <br />
        To make your transition here more convenient, we also offer assistance
        to apply to private universities in Malaysia under MM2H. We will handle
        all the important steps needed to enroll students into universities such
        as Sunway University, Taylor's University and Monash University. Not
        only will we help you with the application process, we will also assist
        you with the necessary arrangements to stay at the university
        residences.
        <br />
        <br />
        <CardGroup>
          <Card className="educards">
            <CardText>Sunway University</CardText>
            <CardImg src={sunway} alt="Card image cap" />
          </Card>
          <Card className="educards">
            <CardImg src={monash} alt="Card image cap" />
            <CardText>Monash University</CardText>
          </Card>
          <Card className="educards">
            <CardText>Taylor's University</CardText>
            <CardImg src={taylors} alt="Card image cap" />
          </Card>
        </CardGroup>
      </p>
      <h2 className="procTitle" id="tax">
        Tax Incentives
      </h2>
      <p className="procContent">
        All income brought into Malaysia is Tax Free, but income earned in
        Malaysia is subject to tax. <br />
        <br />
        There is <b>no death duty or inheritance tax</b> in Malaysia and are
        free to transfer your assets to your beneficiaries or immediate family.
        <br />
        <br />
      </p>
      <h2 className="procTitle" id="family">
        Bring your Family Along
      </h2>
      <p className="procContent">
        You can bring your immediate family such as your spouse and your
        dependants <b>under</b> the age of 21 (who are not married). <br />
        <br />
        Your parents who are over 60-year old are eligible to live in Malaysia
        under a special <b>6-month social visit visa</b> renewable as long as
        your MM2H visa is valid.
        <br />
        <br />
      </p>
      <h2 className="procTitle" id="business">
        Start your Business
      </h2>
      <p className="procContent">
        <br />
        You can register a limited liability company with paid up capital and
        reserves of <b>at least RM250,000.00</b>.<br />
      </p>
    </React.Fragment>
  );
}
