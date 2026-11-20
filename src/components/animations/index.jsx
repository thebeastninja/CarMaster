import EngineAnimation from '../EngineAnimation.jsx'
import BrakeAnimation from './BrakeAnimation.jsx'
import GearboxAnimation from './GearboxAnimation.jsx'
import TurboAnimation from './TurboAnimation.jsx'
import DrivetrainAnimation from './DrivetrainAnimation.jsx'
import CarExplorer from '../CarExplorer.jsx'
import WarningLights from '../WarningLights.jsx'

export const ANIMATIONS = {
  fourStroke: { title: 'Four-stroke cycle', icon: '🔥', Component: EngineAnimation },
  gearbox: { title: 'Manual gearbox', icon: '⚙️', Component: GearboxAnimation },
  drivetrain: { title: 'FWD / RWD / AWD / 4WD', icon: '🛞', Component: DrivetrainAnimation },
  brakes: { title: 'How brakes work', icon: '🛑', Component: BrakeAnimation },
  turbo: { title: 'Turbo vs supercharger', icon: '🌀', Component: TurboAnimation },
  explorer: { title: 'Car Explorer', icon: '🚗', Component: CarExplorer },
  warningLights: { title: 'Warning lights', icon: '⚠️', Component: WarningLights },
}
