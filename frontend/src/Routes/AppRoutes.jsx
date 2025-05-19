// src/routes/Routes.js

import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Monitor from "../pages/DataCenter/Monitor";
import AssetManagement from "../pages/DataCenter/AssetMan";
import NetworkMonitoring from "../pages/DataCenter/Networking";
import ChangeManagement from "../pages/DataCenter/Chanage";
import CustomSolutions from "../pages/DataCenter/CustomSoluation";
import InsightsAnalytics from "../pages/DataCenter/InsightsAnalysis";
import CustomPortal from "../pages/DataCenter/CustomPortal";
import FirmwareOSManagementSection from "../pages/DataCenter/FiremMan";
import IPMan from "../pages/DataCenter/IPMan";
import DetaCenter from "../pages/DataCenter/DataCenter";
import DigitTwins from "../pages/IntellSluations/DigitTwins";
import SmartMapping from "../pages/IntellSluations/SmartMapping";
import PredictiveFailure from "../pages/IntellSluations/PredictiveFailure";
import SmartControl from "../pages/IntellSluations/SmartControl";
import AiPoweredDic from "../pages/IntellSluations/AiPoweredDic";
import DataCenterEfficiency from "../pages/SustainabilityBlog/DataCenter";
import PowerResourceMapping from "../pages/SustainabilityBlog/PowerResoure";
import RenewableEnergyIntegration from "../pages/SustainabilityBlog/Renewable";
import EPDSustainability from "../pages/SustainabilityBlog/Product";
import DCOICompliance from "../pages/DCC/Dccic";
import ComplianceSection from "../pages/DCC/ComplianceSection";
import EN50600Compliance from "../pages/DCC/EN50600Compliance";
import LEEDComplianceSection from "../pages/DCC/LEEDSection";
import ISOComplianceSection from "../pages/DCC/IOSSection";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dcim/monitoring-devices" element={<Monitor />} />
      <Route path="/dcim/asset-tracking" element={<AssetManagement />} />
      <Route path="/dcim/network-management" element={<NetworkMonitoring />} />
      <Route path="/dcim/change-management" element={<ChangeManagement />} />
      <Route path="/dcim/custom-solutions" element={<CustomSolutions />} />
      <Route path="/dcim/insights-analytics" element={<InsightsAnalytics />} />
      <Route path="/dcim/customer-portal" element={<CustomPortal />} />
      <Route path="/dcim/firmware-management" element={<FirmwareOSManagementSection />} />
      <Route path="/dcim/ip-management" element={<IPMan />} />
      <Route path="/dcim/datacenter-planner" element={<DetaCenter />} />
      <Route path="/digital-twins" element={<DigitTwins/>} />
      <Route path='/smart-mapping' element={<SmartMapping/>} />
      <Route path='/predictive-failure' element={<PredictiveFailure/>} /> 
      <Route path="/smart-control" element={<SmartControl/>} />
      <Route path="/automated-discovery" element={<AiPoweredDic/>} />
      <Route path="data-center" element={<DataCenterEfficiency/>} />
      <Route path="stranded--map" element={<DataCenterEfficiency/>} />

      <Route path="/power-resource" element={<PowerResourceMapping/>} />
      <Route path = "/renewable-integration" element={<RenewableEnergyIntegration/>} />
      <Route path="/epd" element={<EPDSustainability/>} />
      <Route path="/dcoi-compliance" element={<DCOICompliance/>} />
      <Route path='/eu-2023-1719' element={<ComplianceSection/>} />
      <Route path = "/en-50600" element={<EN50600Compliance/>} />
      <Route path = "/leed-certification" element={<LEEDComplianceSection/>} />
      <Route path = "/iso-30134-2" element={<ISOComplianceSection/>} />
      <Route path = "/epa-energy-star" element={<LEEDComplianceSection/>} />
      <Route path = "/jrc" element={<ComplianceSection/>} />
    </Routes>
  );
}
