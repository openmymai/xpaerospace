import AvionicsModernizationEnhancePilotMission from './AvionicsModernizationEnhancePilotMission';
import AvionicsModernizationFeatures from './AvionicsModernizationFeatures';
import AvionicsModernizationFixedWing from './AvionicsModernizationFixedWing';
import AvionicsModernizationHeader from './AvionicsModernizationHeader';
import AvionicsModernizationLegacyTech from './AvionicsModernizationLegacyTech';

export default function AvionicsModernization() {
  return (
    <div>
      <AvionicsModernizationHeader />
      <AvionicsModernizationFeatures />
      <AvionicsModernizationLegacyTech />
      <AvionicsModernizationFixedWing />
      <AvionicsModernizationEnhancePilotMission />
    </div>
  );
}
