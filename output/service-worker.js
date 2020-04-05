/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  const singleRequire = (name) => {
    if (name !== 'require') {
      name += '.js';
    }
    let promise = Promise.resolve();
    if (!registry[name]) {
      promise = new Promise(async (resolve) => {
        if ('document' in self) {
          const script = document.createElement('script');
          script.src = name;
          document.head.appendChild(script);
          script.onload = resolve;
        } else {
          importScripts(name);
          resolve();
        }
      });
    }
    return promise.then(() => {
      if (!registry[name]) {
        throw new Error(`Module ${name} didn’t register its module`);
      }
      return registry[name];
    });
  };

  const require = (names, resolve) => {
    Promise.all(names.map(singleRequire)).then((modules) =>
      resolve(modules.length === 1 ? modules[0] : modules),
    );
  };

  const registry = {
    require: Promise.resolve(require),
  };

  self.define = (moduleName, depsNames, factory) => {
    if (registry[moduleName]) {
      // Module is already loading or loaded.
      return;
    }
    registry[moduleName] = Promise.resolve().then(() => {
      const exports = {};
      const module = {
        uri: location.origin + moduleName.slice(1),
      };
      return Promise.all(
        depsNames.map((depName) => {
          switch (depName) {
            case 'exports':
              return exports;
            case 'module':
              return module;
            default:
              return singleRequire(depName);
          }
        }),
      ).then((deps) => {
        const facValue = factory(...deps);
        if (!exports.default) {
          exports.default = facValue;
        }
        return exports;
      });
    });
  };
}
define('./service-worker.js', ['./workbox-4dbac9ba'], (workbox) => {
  /**
   * Welcome to your Workbox-powered service worker!
   *
   * You'll need to register this file in your web app.
   * See https://goo.gl/nhQhGp
   *
   * The rest of the code is auto-generated. Please don't update this file
   * directly; instead, make changes to your Workbox build configuration
   * and re-run your build process.
   * See https://goo.gl/2aRDsh
   */

  workbox.skipWaiting();
  workbox.clientsClaim();
  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */

  workbox.precacheAndRoute(
    [
      {
        url: '0.bundle.js',
        revision: 'e114ba5ad4be66fee0712da10d61c0a8',
      },
      {
        url: '1.bundle.js',
        revision: 'e441ea8fdebb3d491524dedc60df4857',
      },
      {
        url: '2.bundle.js',
        revision: '60b71533771a75afd277ea9de6783973',
      },
      {
        url: '3.bundle.js',
        revision: '1544f4cde4986f2f3e3f249f365bb8f3',
      },
      {
        url: '4.bundle.js',
        revision: '2433bcd4349df76ae2000ca3e684535a',
      },
      {
        url: 'favicon.ico',
        revision: 'c92b85a5b907c70211f4ec25e29a8c4a',
      },
      {
        url: 'index.html',
        revision: '9752bdc4ee6b2e610eeb9348016cd8a9',
      },
    ],
    {},
  );
});
// # sourceMappingURL=service-worker.js.map
