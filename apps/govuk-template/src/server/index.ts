import engine, { Mode } from '@not-govuk/engine';
import config from './config';
import Template from './template';
import AppWrap from '../common/app-wrap';
import ErrorPage from '../common/error-page';
import PageWrap from '../common/page-wrap';
import pageLoader from '../common/page-loader';

const webpackConfig = require('../../webpack.config');
const entrypoints = require('../../dist/public/entrypoints.json');

const app = engine({
  AppWrap,
  ErrorPage,
  PageWrap,
  Template,
  entrypoints,
  env: config.env,
  httpd: {
    host: config.httpd.host,
    port: config.httpd.port
  },
  mode: config.mode,
  name: config.name,
  pageLoader,
  ssrOnly: config.ssrOnly,
  webpackConfig
});

export const handler = (
  config.mode === Mode.Serverless
    ? app
    : undefined
);

export default app;