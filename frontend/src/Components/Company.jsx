import React from "react";
import styles from "./Company.module.css";
import amd from "./logos/amd.svg";
import cisco from "./logos/cisco.svg";
import dell from "./logos/dell.svg";
import hpe from "./logos/hp.svg";
import intel from "./logos/intel.svg";
import lenovo from "./logos/lenovo.svg";
import schneider from "./logos/schneider.svg";
import supermicro from "./logos/supermicro.svg";
import nvidia from "./logos/nvidia.svg";

const logos = [amd, cisco, dell, hpe, intel, lenovo, schneider, supermicro, nvidia];

export default function CompanySlider() {
  return (
    <div className="mb-5">

    <div className={`${styles.wrapper}`}>
      <h5 className=" text-center mb-4" style={{fontSize:"1rem" , color:"#71717A"}}>
        Seamless integrations with any data center hardware
      </h5>
      <div className={styles.sliderContainer}>
        <div className={styles.sliderTrack}>
          {logos.concat(logos).map((logo, index) => (
            <div key={index} className={styles.logoWrapper}>
              <img src={logo} alt="Company logo" className={styles.logo} />
            </div>
          ))}
        </div>
      </div>
    </div>
          </div>
  );
}
