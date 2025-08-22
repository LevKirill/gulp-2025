import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import ifPlugin from 'gulp-if';

export const plugins = {
  plumber: plumber,
  notify: notify,
  if: ifPlugin,
};
