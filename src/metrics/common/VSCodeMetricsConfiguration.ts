import { MetricsConfiguration } from 'tsmetrics-core/MetricsConfiguration';
import { LuaStatementMetricsConfiguration } from './LuaStatementMetricsConfiguration';
export class VSCodeMetricsConfiguration extends MetricsConfiguration {
  Exclude = [];
  EnabledForLua = true;
  EnabledForJS = true;
  EnabledForJSX = true;
  EnabledForTS = true;
  EnabledForTSX = true;
  DecorationModeEnabled = true;
  CodeLensEnabled = true;
  DiagnosticsEnabled = true;

  FileSizeLimitMB = 0.5;
  LuaStatementMetricsConfiguration = new LuaStatementMetricsConfiguration();
}