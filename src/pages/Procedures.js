import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import "./Procedure.scss";
import Slide from "react-reveal/Slide";
import { GoChecklist } from "react-icons/go";
import { IoMdClock } from "react-icons/io";

export default function Procedures() {
  return (
    <div className="procedures">
      <Hero hero="procedHero">
        <Banner title="Procedures and Eligibility"></Banner>
      </Hero>
      <br />
      <h1 className="procTitle">
        <GoChecklist />
        Eligibility
      </h1>
      <p className="procContent">
        All applicant must have offshore income of <b>minimum</b> RM10,000
        (USD2,300) per month.
        <br />
        <br />
        For applicants <b>below 50 years old</b>, you have to show your liquid
        assets over RM588,000 (USD37,500). Applicants <b>over 50 years old </b>
        have show assets over RM374,000 (USD 87,500).
        <br />
        <br />
        Feel free to contact us to get more information on the criteria needed
        to immigrate to Malaysia.
      </p>
      <br />
      <h1 className="procTitle">
        <IoMdClock />
        Time Consumption
      </h1>
      <p className="procContent">
        <b>
          <u>APPLICATION PROCESS</u>
        </b>
        <br />
        <br />
        We will submit your application within 3 working days after we receive
        your completed documents. Ministry will take 6 to 8 months to get the{" "}
        <b>MM2H conditional approval letter</b> depending on the number of
        applications and if the period spans public holidays.
        <br />
        <br />
        <b>
          <u>DURATION OF VALIDITY FOR MM2H APPROVAL LETTER</u>
        </b>
        <br />
        <br />
        When you get your <b>conditional approval letter</b>, you have to come
        to Malaysia <b>within six months</b> to get MM2H visa endorse on your
        passport. If you cannot make it in time, you have to let us know{" "}
        <b>one month before the expiry date</b> and we will appeal for an
        extension of one month*. <br />
        <br />
        <i>*The government will allow for only one month extension.</i>
        <br />
        <br />
        <i>
          **The extension will only be allowed if the applicant is{" "}
          <b>deemed unfit to travel</b> to Malaysia due to hospitalization(must
          provide specialist doctor's letter).
        </i>
      </p>
      <h1 className="procTitle">Procedures</h1>
      <div class="card">
        <Slide left>
          <h2>
            <b>Step 1 : </b>Prepare your Documents
          </h2>

          <p>
            Before you fly to Malaysia, we will need some documents to start
            your application process. <br />
            <br />
            Drop us an <b>email</b> and we will guide you on what documents you
            need to pass to us. <br />
            <br />
            <a href="mailto:enquiry@a2z-mm2h.com.my?subject=Documents needed for MM2H&body=Hello, I am [name] from [country]. I would like to know what documents do I need to apply for MM2H?">
              <button>Email Us</button>
            </a>
            <br />
            <br />
            Once the documents are ready and complete, without having you here
            in Malaysia, <br />
            we will submit your application to MM2H centre in Kuala Lumpur.
          </p>
        </Slide>
      </div>
      <div class="card">
        <Slide right>
          <h2>
            {" "}
            <b>Step 2 : </b>Conditional Approval
          </h2>
          <p>
            Once the approval letter is obtained, you will have to schedule a
            trip to Malaysia within 6 months to:
            <br />
            <br />
            <b>1. Open a fixed deposit account : </b>
            <br />
            i) Age <u>below 50 years old</u> - Open a fixed deposit account of
            RM300,000 (roughly USD70,000) with any bank in Malaysia <br />
            ii) Age <u>50 years and above </u>- Open a fixed deposit account of
            RM150,000 (roughly USD46,500) with any bank in Malaysia
            <br />
            <br />
            <b>2.Medical check up in Malaysia.</b> <br />
            <br />
            <b>
              3.Purchase Medical Insurance which we will apply for you in
              Malaysia.
            </b>
          </p>
        </Slide>
      </div>
      <div class="card">
        <Slide left>
          <h2>
            <b>Step 3 : </b>Endorsement of MM2H Visa
          </h2>
          <p>
            After the endorsement, you can get the{" "}
            <b>10 years multi-entry visa </b>for MM2H.
            <br /> It is renewable for your entire life time. <br />
            <br />
            Part of your fixed deposit can now be withdrawn after one year for
            the following reasons:
            <br /> A) Purchase of a house in Malaysia
            <br /> B) Purchase of a car in Malaysia
            <br /> C) Medical treatment in Malaysia
            <br /> D) Education for your children in Malaysia
          </p>
        </Slide>
      </div>
    </div>
  );
}
