class Configuration {
  constructor(inputDir, outputDir, ignore, type, additionalCssFile) {
    this.inputDir = inputDir;
    this.outputDir = outputDir;
    this.ignore = ignore;
    this.type = type;
    this.additionalCssFile = additionalCssFile;
  }
}

const CONFIG_PROP_NAME = 'redocConfig';

module.exports = { Configuration, CONFIG_PROP_NAME };
