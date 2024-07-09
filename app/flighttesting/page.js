import FlightTestingClearedCertification from './FlightTestingClearedCertification';
import FlightTestingExperience from './FlightTestingExperience';
import FlightTestingFeatures from './FlightTestingFeatures';
import FlightTestingHeader from './FlightTestingHeader';
import FlightTestingRealWorld from './FlightTestingRealWorld';

export default function FlightTesting() {
  return (
    <div>
      <FlightTestingHeader />
      <FlightTestingFeatures />
      <FlightTestingClearedCertification />
      <FlightTestingExperience />
      <FlightTestingRealWorld />
    </div>
  );
}
