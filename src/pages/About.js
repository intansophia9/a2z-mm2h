import React from "react";
import Slide from "react-reveal/Slide";
import "./about.scss";
import Hero from "../components/Hero";
import Banner from "../components/Banner";

export default function About() {
  return (
    <div className="about">
      <Hero>
        <Banner title="About malaysia my second home(A2Z)"></Banner>
      </Hero>
      <div class="row">
        <div class="column-left">
          <Slide left>
            <h1 className="about-title">
              <br />
              WHO ARE WE?
              <br />
            </h1>
            <p className="about-content">
              Spearheaded by the Government of Malaysia,{" "}
              <b>Malaysia My Second Home (MM2H)</b> is a programme allowing
              foreigners who fulfill certain criteria, to stay in Malaysia for
              as long possible on a multiple entry social visit pass.
              <br />
              <br /> Established in year 2006, A2Z MM2H Sdn Bhd (Co. Reg
              No:740046-A) is licensed by the Ministry of Tourism Malaysia as a
              bona fide government approved agent to serve the MM2H applicants.
              The Social Visit Pass is initially for a period of ten (10) years,
              and is renewable to eventually give you a lifetime of easy access
              to the country.
              <br />
              <br />
            </p>
          </Slide>
          <Slide left>
            <h1 className="about-title">
              WHY MALAYSIA?
              <br />
            </h1>
            <p className="about-content">
              Residing in Malaysia is the most fabulous experience, with high
              standards of living but at a cost far cheaper than most Western
              countries and other Asian countries.
              <br />
              <br />
              Housing, golf club membership, communications, transport
              (including taxis), local food, holiday accommodation, airfares,
              clothing, medical expenses, entertainment and recreation are
              cheaper than what most expats experience elsewhere.
              <br />
              <br />
            </p>
          </Slide>
          <Slide left>
            <h1 className="about-title">
              WHY A2Z MM2H?
              <br />
            </h1>
            <p className="about-content">
              We are well experienced in MM2H procedures and application have
              successfully obtained MM2H visas for many foreigners.
              <br />
              <br />
              We do have <b>in house and external consultants</b> working as a
              team to assist you in the whole process.
              <br />
              <br />
              Under one umbrella, we have{" "}
              <b>auditing,taxation and accounting services</b>. We also provide
              assistance for your children's <b>education</b> needs from school
              up to university. We have our own <b>property agents</b> to cater
              to your property related questions and services. We also provide{" "}
              <b>consultations</b> related to business and law should you be
              needing them, all to make your stay in Malaysia as comfortable and
              convenient as possible.
              <br />
              <br />
            </p>
          </Slide>
        </div>
        <div class="column-right">
          <Slide right>
            <h2 className="about-title">COME FIND US!</h2>
            <br />
            <p className="about-map">
              <iframe
                className="map"
                src="https://www.google.com/maps/d/embed?mid=1yQB3JntLK8zNjMO3Y5LVnkkbzEyFzK8S"
              ></iframe>
              <br />
            </p>
            <h2 className="about-title">ANY ENQUIRIES?</h2>
            <br />
            <p className="about-question">
              Email us :<br />
              <a href="mailto:enquiry@a2z-mm2h.com.my">
                enquiry@a2z-mm2h.com.my
              </a>
              <br />
              <a href="mailto:zeenathamid1@yahoo.com">zeenathamid1@yahoo.com</a>
              <br />
              <a href="mailto:faridahhamid1113@gmail.com">
                faridahhamid1113@gmail.com
              </a>
              <br />
              <a href="mailto:rabiahhamid67@gmail.com">
                rabiahhamid67@gmail.com
              </a>
              <br />
              <br />
              Call us :<br />
              <a href="tel:+60342703464">+603-42703464</a>
              <br />
              <br />
              Whatsapp us : <br />
              <a
                href="https://api.whatsapp.com/send?phone=60123151246

"
              >
                +60123151246 -Zeenat
              </a>
              <br />
              <a
                href="https://api.whatsapp.com/send?phone=60178823572

"
              >
                +60178823572 -Faridah
              </a>
              <br />
              <a
                href="https://api.whatsapp.com/send?phone=60178885355

"
              >
                +60178885355 -Datin Rabiah
              </a>
            </p>
          </Slide>
        </div>
      </div>
    </div>
  );
}
