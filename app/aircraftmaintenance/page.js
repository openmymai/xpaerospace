import AircraftMaintenanceHeader from './AircraftMaintenanceHeader';
import AircraftMaintenanceFeatures from './AircraftMaintenanceFeatures';
import AircraftMaintenanceConfidence from './AircraftMaintenanceConfidence';
import AircraftMaintenanceFAACertified from './AircraftMaintenanceFAACertified';
import AircraftMaintenanceInnovation from './AircraftMaintenanceInnovation';

export default function AircraftMaintenance() {
  return (
    <div>
      <AircraftMaintenanceHeader />
      <AircraftMaintenanceFeatures />
      <AircraftMaintenanceConfidence />
      <AircraftMaintenanceFAACertified />
      <AircraftMaintenanceInnovation />
    </div>
  );
}
