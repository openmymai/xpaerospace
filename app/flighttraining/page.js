import FlightTrainingBePrepared from './FlightTrainingBePrepared';
import FlightTrainingExperience from './FlightTrainingExperience';
import FlightTrainingFeatures from './FlightTrainingFeatures';
import FlightTrainingHeader from './FlightTrainingHeader';
import FlightTrainingRodTroy from './FlightTrainingRodTroy';

export default function FlightTraining() {
  return (
    <div>
      <FlightTrainingHeader />
      <FlightTrainingFeatures />
      <FlightTrainingRodTroy />
      <FlightTrainingExperience />
      <FlightTrainingBePrepared />
    </div>
  );
}
