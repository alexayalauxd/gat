const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("C:\\Users\\alexa\\Documents\\gat\\.cache\\dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("C:\\Users\\alexa\\Documents\\gat\\src\\pages\\404.js"))),
  "component---src-pages-checkout-js": hot(preferDefault(require("C:\\Users\\alexa\\Documents\\gat\\src\\pages\\checkout.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\Users\\alexa\\Documents\\gat\\src\\pages\\index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("C:\\Users\\alexa\\Documents\\gat\\src\\pages\\page-2.js"))),
  "component---src-pages-using-typescript-tsx": hot(preferDefault(require("C:\\Users\\alexa\\Documents\\gat\\src\\pages\\using-typescript.tsx")))
}

