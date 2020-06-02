'use strict';

const plopActionSymlink = require('./.plop/actions/symlink');
const plopActionCopy = require('./.plop/actions/copy');

module.exports = plop => {
  plop.setActionType('symlink', plopActionSymlink);
  plop.setActionType('copy', plopActionCopy);

  plop.setGenerator('app', {
    description: 'Application',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Name:'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Description:'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'apps/{{{name}}}/package.json',
        templateFile: 'skel/app/package.json.hbs'
      },
      {
        type: 'add',
        path: 'apps/{{{name}}}/README.md',
        templateFile: 'skel/app/README.md.hbs'
      },
      {
        type: 'symlink',
        path: 'apps/{{{name}}}/.dockerignore',
        target: 'skel/app/.dockerignore'
      },
      {
        type: 'symlink',
        path: 'apps/{{{name}}}/.gitignore',
        target: 'skel/app/.gitignore'
      },
      {
        type: 'symlink',
        path: 'apps/{{{name}}}/tsconfig.json',
        target: 'skel/app/tsconfig.json'
      },
      {
        type: 'copy',
        destination: 'apps/{{{name}}}/src/',
        source: 'skel/app/src/'
      },
      {
        type: 'copy',
        destination: 'apps/{{{name}}}/webpack.config.js',
        source: 'skel/app/webpack.config.js'
      },
      {
        type: 'copy',
        destination: 'apps/{{{name}}}/webpack.config.server.js',
        source: 'skel/app/webpack.config.server.js'
      }
    ]
  });

  plop.setGenerator('lib', {
    description: 'Library',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Name:'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Description:'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'lib/{{{name}}}/package.json',
        templateFile: 'skel/lib/package.json.hbs'
      },
      {
        type: 'add',
        path: 'lib/{{{name}}}/README.md',
        templateFile: 'skel/lib/README.md.hbs'
      },
      {
        type: 'symlink',
        path: 'lib/{{{name}}}/.gitignore',
        target: 'skel/lib/.gitignore'
      },
      {
        type: 'symlink',
        path: 'lib/{{{name}}}/.npmignore',
        target: 'skel/lib/.npmignore'
      },
      {
        type: 'symlink',
        path: 'lib/{{{name}}}/tsconfig.json',
        target: 'skel/lib/tsconfig.json'
      },
      {
        type: 'addMany',
        destination: 'lib/{{{name}}}/src/',
        base: 'skel/lib/src/',
        templateFiles: 'skel/lib/src/**.hbs'
      }
    ]
  });
};