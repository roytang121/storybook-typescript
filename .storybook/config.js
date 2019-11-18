import { configure } from '@storybook/react';

const currentLocationHref = window.location.href;
const req = require.context('../src/stories', true, /\.stories\.(js|jsx|ts|tsx|mdx)?$/);

// automatically import all files ending in *.stories.js
configure(req, module);

if (module.hot) {
    module.hot.accept(req.id, () => {
        window.history.pushState(null, null, currentLocationHref);
        location.reload();
    });
}