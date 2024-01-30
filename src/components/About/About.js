import React, { useState } from "react"; // Combine imports
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import styles from "./About.module.css";
import LogoDiamond from "../LogoDiamond/LogoDiamond";
import "./About.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function About() {
  const faqData = [
    {
      id: "One",
      question: "Why don't you offer 'Pro' Ceramic Coatings?",
      answer:
        "'Pro' coatings are like paying extra for a designer label on a bottle of water. Fancy, but it's still just water. We use Gyeon coatings - same glitz, none of the wallet hits. They work brilliantly, don't cost a small fortune, and come with our in-house 2-5 year warranty. Why overpay for a shiny label when you can get actual shine on your car?",
    },
    {
      id: "Two",
      question: "How are you so much cheaper than the competition?!",
      answer:
        "Well, for starters, we don’t play the 'Pro' coatings game (refer back up one for the juicy details). Our profit margins? Leaner than a budget-conscious accountant in a discount store. And since we’re mobile, we cut the overhead, not corners. This means we bring the savings to you, like a luxury service at a not-so-luxury price.",
    },
    {
      id: "Three",
      question: "How long does a detailing session take?",
      answer:
        "Depends on how much love your car needs. It's like a spa day for your car - you can't rush perfection or a good facial, can you? Expect us to be pampering your ride for a few hours, more if it's been living the off-road dream. ",
    },
    {
      id: "Four",
      question: " Is car detailing really worth it?",
      answer:
        "Is a freshly baked pizza better than a frozen one? Absolutely. Detailing not only keeps your car looking snazzy but also helps maintain its value. It's like anti-aging cream, but for your car.",
    },
    {
      id: "Five",
      question: " Do I need to prepare anything before your arrival?",
      answer:
        "Just make sure your car is there, and maybe remove any ancient artifacts or gym bags from the backseat. We bring the magic, you bring the canvas (your car, that is).",
    },
  ];

  return (
    <div className={styles.aboutsection}>
      {/* Counter Item 1 */}
      <div className={styles.counterssection}>
        <div className={styles.counteritem}>
          <CountUp end={116} duration={1.5} redraw={true}>
            {({ countUpRef, start }) => (
              <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} className={styles.h2} />
              </VisibilitySensor>
            )}
          </CountUp>
          <p className={styles.counteritem}>Happy Customers</p>
        </div>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="January 2022 - Business Start"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          // icon={<WorkIcon />} // Optional: You can use a custom icon here
        >
          <h3 className="vertical-timeline-element-title">
            Business Inception
          </h3>
          <p>
            Attention to Detail Auto begins its journey, embarking on a mission
            to offer unparalleled car detailing services in NJ, DE, and PA.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="March 2024 - Grand Opening"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          // icon={<WebIcon />} // Optional: You can use a custom icon here
        >
          <h3 className="vertical-timeline-element-title">
            Online Grand Opening
          </h3>
          <p>
            Launch of our official website, marking a significant milestone in
            enhancing customer experience and online presence.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2024 - Anticipated Rewards Program Launch"
          iconStyle={{ background: "rgb(243, 179, 33)", color: "fff" }}
          // icon={<WebIcon />} // Optional: You can use a custom icon here
        >
          <h3 className="vertical-timeline-element-title">
            Anticipated Rewards Program Launch Date
          </h3>
          <p>
            All purchases from 12/12/2023 forward will quality for rewards.
            (When it launches - early 2024){" "}
          </p>
        </VerticalTimelineElement>

        {/* You can add more timeline elements here as your business grows */}
      </VerticalTimeline>
      <section className={styles.section}>
        <h3 className={styles.h3}>Exceptional Value, Uncompromised Quality</h3>
        <p className={styles.p}>
          At Attention to Detail Auto, located in Pennsville NJ, we redefine
          what it means to get top-notch car detailing at an honest value. Our
          journey began with a clear vision: to offer the highest quality
          detailing at prices that don't break the bank. With our ceramic
          coatings starting at only $299.99, including paint correction, we
          stand out in a market where the average price starts at $1000.
        </p>
      </section>

      <section className={styles.section}>
        <h3 classname={styles.h3}>Transparent, Fair Pricing</h3>

        <p className={styles.p}>
          We believe in transparent pricing. No surprises, no hidden fees. Our
          rates are clear and available – you book, you pay, and you get the
          exceptional results you expect. No need for on-site quotations; we
          value your time as much as your trust in our services.
        </p>
      </section>

      <section className={styles.section}>
        <h3 classname={styles.h3}>Revolutionizing Booking in Car Detailing</h3>
        <p className={styles.p}>
          We're proud to offer the only fully online, hassle-free booking system
          in the local car detailing industry. With just a few clicks, you can
          schedule your car's transformation from the comfort of your home. This
          ease of access, combined with our commitment to quality, sets us apart
          and reflects our dedication to customer satisfaction.
        </p>
      </section>

      <section className={styles.section}>
        <h3 classname={styles.h3}>Our Commitment to Excellence</h3>
        <p classname={styles.p}>
          Our team comprises professionals who are not just skilled but also
          deeply passionate about automobiles. Whether you own a vintage classic
          or a modern marvel, your vehicle will receive the specialized care it
          deserves, enhancing both its aesthetics and longevity.
        </p>
        <p classname={styles.p}>
          From ceramic coatings to paint protection, our services are a
          testament to our pursuit of perfection. Step into the world of
          Attention to Detail Auto, and experience car care that goes beyond the
          conventional - it's an investment in your vehicle’s future.
        </p>
      </section>

      <section className={styles.section}>
        <h3 className={styles.h3}>Join Our Satisfied Customers</h3>
        <p className={styles.p}>
          We invite you to join the ranks of our satisfied customers. Experience
          the unparalleled value and care that Attention to Detail Auto
          provides. It’s not just detailing; it’s a commitment to preserving and
          elevating your vehicle's beauty and value.
        </p>
      </section>
      <h2 className={styles.h2}>FAQ</h2>
      <div className="accordion" id="accordionExample">
        {faqData.map((faq) => (
          <div className="accordion-item" key={faq.id}>
            <h2 className="accordion-header" id={`heading${faq.id}`}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${faq.id}`}
                aria-expanded="false"
                aria-controls={`collapse${faq.id}`}
              >
                {faq.question}
              </button>
            </h2>
            <div
              id={`collapse${faq.id}`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading${faq.id}`}
            >
              <div className="accordion-body">
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default About;
