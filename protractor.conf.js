module.exports.config = {
  framework: 'custom',
  frameworkPath: 'node_modules/protractor-cucumber-framework',

  cucumberOpts: {
    format: ['json:example.json'],
    require: ['features/support/**/*.js', 'features/step-definitions/**/HomePage.js'],
    strict: true
  },

  capabilities: {
    browserName: 'chrome',
    specs: 'features/**/*.feature',
    shardTestFiles: true,
    maxInstances: 1
  }
};
