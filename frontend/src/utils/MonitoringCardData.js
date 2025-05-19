import v1 from "../images//videos/hb-monitoring.mp4"
import v2 from "../images/videos/networking-b.mp4"
import v3 from "../images/videos/asset-management-b.mp4"
import v4 from "../images/videos/__compliance.mp4"
import v5 from "../images/videos/SinglePane-b.mp4"
import v6 from "../images/videos/dc-planning.mp4"


const monitoringData = [
  {
    title: "Advanced Monitoring",
    description:
      "CentralAxis provides cutting-edge monitoring solutions for your data center, offering real-time insights and comprehensive analytics to optimize performance, reduce costs, and enhance reliability.",
    points: [
      "Real-time performance metrics and predictive analytics",
      "Automated alerts and intelligent incident response",
      "Comprehensive reporting and trend analysis"
    ],
    video: v1
  },
  {
    title: "Network Management and Monitoring",
    description:
      "Comprehensive network monitoring and management that ensures optimal performance, security, and reliability across your entire data center infrastructure",
    points: [
      "Real-time network performance monitoring and bandwidth optimization",
      "Automated network security and threat detection",
      "Advanced network diagnostics and troubleshooting tools"
    ],
    video: v2
  },
  {
    title: "Asset Management",
    description:
      "Streamline your data center operations with our comprehensive asset management system. Track, maintain, and optimize your infrastructure with precision and ease",
    points: [
      "Cross-system data aggregation",
      "Visual performance dashboards",
      "Historical trend and usage data"
    ],
    video: v3
  },
  {
    title: "A Single Pane of Glass",
    description:
      "A unified view across all of your BMS and EPMS systems, tailored to your needs.",
    points: [
      "Comprehensive visibility across all of your colocation infrastructure",
      "Customizable interface tailored to your specific operational requirements and priorities.",
      "Unified dashboard integrating all BMS and EPMS systems for seamless monitoring and management."
    ],
    video: v4
  },

  {
    title: "Built-In Compliance",
    description:
      "CentralAxis provides compliance as a service for data centers.",
    points: [
      "Track data for EU, US, and global regulatary standards",
      "We guarantee compliance and handle every step between monitoring and reporting.",
      
    ],
    video: v5
  },

  {
    title: "Data Center Planning",
    description:
      "Want to support the latest and greatest architectures on the market? Modern GPUs and even CPUs are more water and energy intensive than ever.",
    points: [
      "Model new architectures and see detailed implications on power and cooling needs.",
      "Design unique specifications for your data center.",
      "Our continuous monitoring is the most advanced on the market, lowering costs while increasing reliability."
      
    ],
    video: v6
  },

];

export default monitoringData;
