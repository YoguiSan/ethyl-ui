# Introduction 
TODO: Give a short introduction of your project. Let this section explain the objectives or the motivation behind this project. 

# Hero banner

Importing `ethyl-ui` registers the `<eui-hero-banner>` custom element. Its text
and background image can be provided as HTML attributes:

```html
<eui-hero-banner
  background-image="/images/summer.jpg"
  eyebrow="Seasonal collection"
  title="Find your next favorite"
  subtitle="Explore our latest arrivals."
  cta-text="Shop now"
  cta-action="/products"
></eui-hero-banner>
```

`cta-action` is a navigation URL. For an in-page action, assign the `cta`
property in JavaScript; both URL and function actions use `<eui-button>`.
Unsafe URL schemes such as `javascript:` are rejected and emit an
`eui-hero-banner-error` event.

```js
const banner = document.querySelector('eui-hero-banner');
banner.cta = {
  text: 'Show featured products',
  action: () => openFeaturedProducts()
};
```

## Loading indicator

Importing `ethyl-ui` registers `<eui-loading-indicator>`. It uses the package's
default SVG and rotates by default; `width` is a pixel value.

```html
<eui-loading-indicator></eui-loading-indicator>
<eui-loading-indicator animation="blinking" width="32"></eui-loading-indicator>
<eui-loading-indicator
  animation="none"
  image="https://example.com/custom-loader.svg"
  width="48"
></eui-loading-indicator>
```

Set `animation` to `none`, `rotating`, or `blinking` (a one-second opacity
pulse between 1 and 0.5). `image` accepts an image URL or a data URI, including
a base64-encoded SVG.

## Toast

Importing `ethyl-ui` registers `<eui-toast>`. Set `text`, `type`, and
`timeout` attributes to configure it. The timeout is in milliseconds and
defaults to 5000; critical toasts do not time out. Every toast can be closed
with its close button and emits `eui-toast-close` when closed.

```html
<eui-toast
  text="Your changes were saved."
  type="success"
  timeout="4000"
></eui-toast>

<eui-toast text="An important alert." type="critical"></eui-toast>
```

Types are `success`, `warning`, `info`, `error`, and `critical`. Backgrounds
default to green, dark orange, dark blue, and red (for both error types), with
white text. Customize each type using its `*-color` attribute or the matching
CSS custom property:

```html
<eui-toast
  text="Custom success color"
  type="success"
  success-color="#146c43"
></eui-toast>
```

The available CSS custom properties are `--eui-toast-success-color`,
`--eui-toast-warning-color`, `--eui-toast-info-color`,
`--eui-toast-error-color`, and `--eui-toast-critical-color`.

## TypeScript

The package exposes its component attribute declarations through the `types`
entry in `package.json`. React JSX applications can augment
`react`'s `JSX.IntrinsicElements` with the exported `JSX.IntrinsicElements`
type while retaining the standard React HTML attributes.

# Getting Started
TODO: Guide users through getting your code up and running on their own system. In this section you can talk about:
1.	Installation process
2.	Software dependencies
3.	Latest releases
4.	API references

# Build and Test
TODO: Describe and show how to build your code and run the tests. 

# Contribute
TODO: Explain how other users and developers can contribute to make your code better. 

If you want to learn more about creating good readme files then refer the following [guidelines](https://docs.microsoft.com/en-us/azure/devops/repos/git/create-a-readme?view=azure-devops). You can also seek inspiration from the below readme files:
- [ASP.NET Core](https://github.com/aspnet/Home)
- [Visual Studio Code](https://github.com/Microsoft/vscode)
- [Chakra Core](https://github.com/Microsoft/ChakraCore)