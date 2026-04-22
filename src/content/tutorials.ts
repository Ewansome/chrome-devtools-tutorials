import { Tutorial } from '../types/tutorial'
import { accessibilityTreeTutorial } from './accessibility/accessibility-tree/accessibility-tree'
import { conditionalBreakpointsTutorial } from './breakpoints/conditional-breakpoints/conditional-breakpoints'
import { domBreakpointsTutorial } from './breakpoints/dom-breakpoints/dom-breakpoints'
import { eventListenerBreakpointsTutorial } from './breakpoints/event-listener-breakpoints/event-listener-breakpoints'
import { auditingPagesTutorial } from './lighthouse/auditing-pages/auditing-pages'
import { lighthouseTimespansTutorial } from './lighthouse/lighthouse-timespans/lighthouse-timespans'
import { blockingNetworkRequestsTutorial } from './network-requests/blocking-network-requests/blocking-network-requests'
import { networkDebuggingTutorial } from './network-requests/network-debugging/network-debugging'
import { dimThirdPartiesTutorial } from './performance/dim-third-parties/dim-third-parties'
import { lighthousePerformanceTutorial } from './performance/lighthouse-performance/lighthouse-performance'
import { smallScriptsBigCostsTutorial } from './performance/small-scripts-big-costs/small-scripts-big-costs'
import { whatsBlockingRenderingTutorial } from './performance/whats-blocking-rendering/whats-blocking-rendering'
import { breakpointsInRecordingsTutorial } from './recorder/breakpoints-in-recordings/breakpoints-in-recordings'
import { exportingPuppeteerScriptsTutorial } from './recorder/exporting-puppeteer-scripts/exporting-puppeteer-scripts'
import { generatingPerformanceProfilesTutorial } from './recorder/generating-performance-profiles/generating-performance-profiles'
import { recordingUserFlowsTutorial } from './recorder/recording-user-flows/recording-user-flows'
import { replayingUserFlowsTutorial } from './recorder/replaying-user-flows/replaying-user-flows'
import { slowingDownReplaysTutorial } from './recorder/slowing-down-replays/slowing-down-replays'


const breakpointsTutorials = [
  conditionalBreakpointsTutorial,
  eventListenerBreakpointsTutorial,
  domBreakpointsTutorial,
]

const networkRequestTutorials = [
  networkDebuggingTutorial,
  blockingNetworkRequestsTutorial
]

const lighthouseTutorials = [
  auditingPagesTutorial,
  lighthouseTimespansTutorial,
]

const accessibilityTutorials = [
  accessibilityTreeTutorial
]

const performanceTutorials = [
  dimThirdPartiesTutorial,
  whatsBlockingRenderingTutorial,
  smallScriptsBigCostsTutorial,
  lighthousePerformanceTutorial,
]

const recorderTutorials = [
  recordingUserFlowsTutorial,
  replayingUserFlowsTutorial,
  slowingDownReplaysTutorial,
  breakpointsInRecordingsTutorial,
  exportingPuppeteerScriptsTutorial,
  generatingPerformanceProfilesTutorial
]

export const tutorials: Tutorial[] = [
  ...breakpointsTutorials,
  ...networkRequestTutorials,
  ...lighthouseTutorials,
  ...accessibilityTutorials,
  ...performanceTutorials,
  ...recorderTutorials
]
