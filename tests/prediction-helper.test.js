import DomPredictionHelper from '../app';
import { elementSelector } from './helpers';

let helper;

beforeEach(() => {
  helper = new DomPredictionHelper();
});

test('returns empty string for empty selection', () => {
  expect(helper.predictCss([])).toEqual('');
});

test('can select all the storylinks with the first element', () => {
  const link = elementSelector('[id="25262303"] > td:nth-child(3) > a');
  const commonCss = helper.predictCss(link, []);

  expect(commonCss).toEqual('.storylink');

  expect(elementSelector(commonCss).length).toEqual(30);
});

test('selects only first link when second link is rejected', () => {
  const firstLink = elementSelector('[id="25262303"] > td:nth-child(3) > a');
  const secondLink = elementSelector('[id="25261068"] > td:nth-child(3) > a');
  const commonCss = helper.predictCss(firstLink, secondLink);

  // do not change exact css, because it might change with non jQuery version
  // but the final selection result should be same
  // expect(commonCss).toEqual('#25262303 .storylink');

  expect(elementSelector(commonCss)[0]).toBe(firstLink[0]);
});

// this should not be the behaviour, but this is how it is working now
test('selects nothing when first and second link is selected but third link is rejected', () => {
  const firstSecondLink = elementSelector(
    '[id="25262303"] > td:nth-child(3) > a, [id="25261068"] > td:nth-child(3) > a'
  );
  const thirdLink = elementSelector('[id="25262186"] > td:nth-child(3) > a');

  const commonCss = helper.predictCss(firstSecondLink, thirdLink);

  expect(commonCss).toEqual('');
});

test('selects all links with first comment link and no rejection', () => {
  const firstCommentLink = elementSelector(
    '#hnmain > tbody > tr:nth-child(3) > td > table > tbody > tr:nth-child(2) > td.subtext > a:nth-child(6)'
  );

  const commonCss = helper.predictCss(firstCommentLink, []);

  expect(commonCss).toEqual('a');
});

test('selects only comment links with selection of first comment link and rejection one hide link and one link from header', () => {
  const firstCommentLink = elementSelector(
    '#hnmain > tbody > tr:nth-child(3) > td > table > tbody > tr:nth-child(2) > td.subtext > a:nth-child(6)'
  );

  const hideAndFront = elementSelector(
    '#hnmain > tbody > tr:nth-child(1) > td > table > tbody > tr > td:nth-child(2) > span > a:nth-child(6), #hnmain > tbody > tr:nth-child(3) > td > table > tbody > tr:nth-child(2) > td.subtext > a:nth-child(5)'
  );

  const commonCss = helper.predictCss(firstCommentLink, hideAndFront);

  expect(commonCss).toEqual('.subtext a:nth-child(6)');

  expect(elementSelector(commonCss).length).toEqual(29);
});
