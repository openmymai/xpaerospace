import AviationProcurementHeader from './AviationProcurementHeader';
import AviationProcurementFeatures from './AviationProcurementFeatures';
import AviationProcurementObjective from './AviationProcurementObjective';
import AviationProcurementExperience from './AviationProcurementExperience';
import AviationProcurementLogistic from './AviationProcurementLogistic';

export default function AviationProcurement() {
  return (
    <div>
      <AviationProcurementHeader />
      <AviationProcurementFeatures />
      <AviationProcurementObjective />
      <AviationProcurementExperience />
      <AviationProcurementLogistic />
    </div>
  );
}
