import React, { Component } from "react";
import Title from "../Title";
import property from "../../icons/condo.svg";
import car from "../../icons/car.svg";
import help from "../../icons/maid.svg";
import book from "../../icons/edu.svg";
import tax from "../../icons/tax.svg";
import parents from "../../icons/parents.svg";
import business from "../../icons/business.svg";
import { HashLink } from "react-router-hash-link";

import "./Cards.scss";

export default class Cards extends Component {
  state = {
    services: [
      {
        icon: <img src={property} alt="condo" />,
        title: "purchase property",
        info: "Purchase properties for stay or investment in Malaysia",
        extra: <HashLink to="/services#property">Learn more</HashLink>,
      },
      {
        icon: <img src={car} alt="car" />,
        title: "import a car",
        info:
          "Purchase locally assembled cars or import personal car without tax and duty",
        extra: <HashLink to="/services#car">Learn more</HashLink>,
      },
      {
        icon: <img src={help} alt="help" />,
        title: "domestic help",
        info:
          "Bring a maid from your country of origin or from other countries",
        extra: <HashLink to="/services#domestic">Learn more</HashLink>,
      },
      {
        icon: <img src={book} alt="book" />,
        title: "education",
        info:
          "Get a Student Pass for your children to continue their schooling in Malaysia",
        extra: <HashLink to="/services#education">Learn more</HashLink>,
      },
      {
        icon: <img src={tax} alt="tax" />,
        title: "tax incentives",
        info:
          "Income brought into Malaysia is Tax Free, but income earned in Malaysia is subject to tax",
        extra: <HashLink to="/services#tax">Learn more</HashLink>,
      },
      {
        icon: <img src={parents} alt="parents" />,
        title: "MM2H for your parents",
        info:
          "Bring your immediate family such as your spouse and your dependants under the age of 21",
        extra: <HashLink to="/services#family">Learn more</HashLink>,
      },
    ],
    lastOne: [
      {
        icon: <img src={business} alt="business" id="last-one" />,
        title: "start a business",
        info: "Register a limited liability company with paid up capital",
        extra: <HashLink to="/services#business">Learn more</HashLink>,
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="our services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
                <p>{item.extra}</p>
              </article>
            );
          })}
        </div>
        <div className="lastOne">
          {this.state.lastOne.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
                <p>{item.extra}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
