import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../images/mainlogo.webp";

export default function Navbar() {
  const menuItems = [
    {
      label: "Data Center Infrastructure Management",
      id: "dropdown1",
      links: [
        { name: "Monitoring Devices", path: "/dcim/monitoring-devices" },
        { name: "Asset Tracking", path: "/dcim/asset-tracking" },
        { name: "Network Management", path: "/dcim/network-management" },
        { name: "Change Management", path: "/dcim/change-management" },
        { name: "Colocation Management", path: "/dcim/colocation-management" },
        { name: "Data Center Planner", path: "/dcim/datacenter-planner" },
        { name: "Firmware Management", path: "/dcim/firmware-management" },
        { name: "IP Address Management", path: "/dcim/ip-management" },
        { name: "Customer Portal", path: "/dcim/customer-portal" },
        { name: "Custom Insights", path: "/dcim/custom-insights" },
      ],
    },
    {
      label: "Intelligence Solutions",
      id: "dropdown2",
      links: [
        { name: "Digital Twins", path: "/digital-twins" },
        { name: "Smart Power Mapping", path: "/smart-mapping" },
        { name: "Predictive Failure and Alerting", path: "/predictive-failure" },
        { name: "Smart Control Systems", path: "/smart-control" },
        { name: "Automated Discovery", path: "/automated-discovery" },
      ],
    },
    {
      label: "Data Center Compliance",
      id: "dropdown3",
      links: [
        { name: "DCOI Compliance", path: "/dcoi-compliance" },
        { name: "(EU) 2023/1719", path: "/eu-2023-1719" },
        { name: "EN 50600", path: "/en-50600" },
        { name: "LEED Certification", path: "/leed-certification" },
        { name: "ISO/IEC 30134-2", path: "/iso-30134-2" },
        { name: "(EPA) ENERGY STAR", path: "/epa-energy-star" },
        { name: "European Commission JRC", path: "/jrc" },
      ],
    },
    {
      label: "Sustainability Blog",
      id: "dropdown4",
      links: [
        { name: "Energy Efficiency", path: "/data-center" },
        { name: "Stranded Energy Map", path: "/stranded--map" },
        { name: "Environmental Product Declaration", path: "/epd" },
        { name: "Renewable Integration", path: "/renewable-integration" },
        { name: "Power Resource Management", path: "/power-resource" },
      ],
    },
  ];

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark ${styles.navbar} `} >
      <div className={`container-fluid ${styles.custContainer}`}>
        <Link className={`navbar-brand d-flex align-items-center ${styles.logo}`} to="/">
          <img src={logo} alt="CentralAxis Logo" style={{ width: "2.5rem" }} />
          <span className={styles.logoText}>CentralAxis</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${styles.part}`} id="mainNavbar">
          <ul className={` ms-auto ${styles.navItems}`} style={{listStyle : "none"}}>
            {menuItems.map((dropdown, i) => (
              <li className={`nav-item dropdown  ${styles.Lin}`} key={i}>
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id={dropdown.id}
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {dropdown.label}
                </a>
                <ul className={`dropdown-menu ${styles.customDropdown}`} aria-labelledby={dropdown.id}>
                  {dropdown.links.map((item, j) => (
                    <li key={j}>
                      <Link className={`dropdown-item ${styles.customDropdownItem}`} to={item.path}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
