import CapabilitiesHeader from './CapabilitiesHeader';
import CapabilitiesFeatures from './CapabilitiesFeatures';
import CapabilitiesComprehensive from './CapabilitiesComprehensive';

export default function Capabilities() {
  return (
    <div>
      <CapabilitiesHeader />
      <CapabilitiesComprehensive />
      <CapabilitiesFeatures />
    </div>
  );
}
