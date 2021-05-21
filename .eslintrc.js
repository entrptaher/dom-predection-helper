module.exports = {
  "extends": ["eslint:recommended"],
  "parser": "babel-eslint",
  "env":{
    "browser": true,
    "amd": true,
    "node":true,
    "jest/globals": true,
  },
  "rules": {
    // these three rules will be removed if the main algorithm is rewritten
    "no-useless-escape": 0,
    "no-constant-condition": 0,
    "no-empty": 0,
    
    // this rule will be removed once eslint learns how to deal with false-positives
    "no-unused-vars": 0
  }
}