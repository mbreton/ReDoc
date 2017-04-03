// @flow

export class Configuration {
  constructor(inputDir, outputDir, ignore, type, additionalCssFile) {
    this.inputDir = inputDir;
    this.outputDir = outputDir;
    this.ignore = ignore;
    this.type = type;
    this.additionalCssFile = additionalCssFile;
  }
}

export const CONFIG_PROP_NAME = 'redocConfig';
