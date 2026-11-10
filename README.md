# Introduction 
TODO: Give a short introduction of your project. Let this section explain the objectives or the motivation behind this project. 

# Hero banner

Importing `ethyl-ui` registers the `<eui-hero-banner>` custom element. Its text
and background image can be provided as HTML attributes:

```html
<eui-hero-banner
  background-image="/images/summer.jpg"
  callout="Seasonal collection"
  title="Find your next favorite"
  subtitle="Explore our latest arrivals."
  cta-text="Shop now"
  cta-action="/products"
></eui-hero-banner>
```

`cta-action` is a navigation URL. For an in-page action, assign the `cta`
property in JavaScript; function values are rendered as buttons, while string
values are rendered as links. Unsafe URL schemes such as `javascript:` are
rejected and emit an `eui-hero-banner-error` event.

```js
const banner = document.querySelector('eui-hero-banner');
banner.cta = {
  text: 'Show featured products',
  action: () => openFeaturedProducts()
};
```

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