import "./source";
import DomPredictionHelper from "../app";

import titles from './groups/first-title';
import comments from './groups/first-comments';
import { select } from "optimal-select";

// expose basic required functions
// window.jQuery = jQuery;
// window.$ = jQuery;
window.DomPredictionHelper = DomPredictionHelper;

// expose an instance for live experiments
const helper = new DomPredictionHelper();
window.helper = helper;

console.info(
  "jQuery, $, DomPredictionHelper and helper is available on this scope."
);

// optimal-select is optional
// this is for demonstration purpose only.
window.select = select;
titles(select, helper);
comments(select, helper);