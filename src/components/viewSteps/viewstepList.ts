import { DesktopViewStep } from "./DesktopViewStep";
import { MobileViewStepImp } from "./MobileViewStep";
import { ViewStep } from 'test_fluxjs'

const viewSteps = new Map<string, React.FC<{ viewStep: ViewStep }>>();
viewSteps.set('desktop_version_layout', DesktopViewStep);
viewSteps.set('mobile_version_layout', MobileViewStepImp);

export default viewSteps;
