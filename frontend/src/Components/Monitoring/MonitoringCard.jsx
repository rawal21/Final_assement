import React from "react";
import styles from "./MonitoringCard.module.css";
import monitoringData from "../../utils/MonitoringCardData";
import Hero from "./Hero";

const MonitoringCard = () => {
  return (
    <>
      <Hero/>
      <div className={` mb-5 ${styles.custContainer}`}>
        {monitoringData.map((card, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <div key={idx} className={` container-fluid  my-4 p-4 ${styles.cardContainer}`}>
              <div className="row align-items-center">
                {/* Text Column */}
                <div
                  className={`col-md-6 text-light ${isEven ? "order-md-1" : "order-md-2"}`}
                >
                  <h2 className={styles.title}>{card.title}</h2>
                  <p className={styles.description}>{card.description}</p>
                  <ul className="list-unstyled mt-4">
                    {card.points.map((point, index) => (
                      <li key={index} className="d-flex align-items-start mb-2">
                        <span className={`me-2 ${styles.bullet}`}>
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={styles.icon}
                          >
                            <path
                              d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                              fill="currentColor"
                              fillRule="evenodd"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <span style={{ color: "#A1A1AA" }}>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Video Column */}
                <div
                  className={`col-md-6 text-center mt-4 mt-md-0 ${isEven ? "order-md-2" : "order-md-1"}`}
                >
                  <video
                    src={card.video}
                    muted
                    autoPlay
                    loop
                    playsInline
                    className={`${styles.video}`}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MonitoringCard;
