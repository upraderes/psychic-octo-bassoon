# psychic-octo-bassoon
Gatsbyjs test

# Prerequisite 

Node has to be installed

```bash
    brew install node
```


# current versions used within the project 

[![Generic badge](https://img.shields.io/badge/node-21.6.1-green)](https://shields.io/)
[![Generic badge](https://img.shields.io/badge/npm-10.2.4-green)](https://shields.io/)
[![Generic badge](https://img.shields.io/badge/gatsby-3.13.1-purple)](https://shields.io/)

# Installation

```bash
    npx create-gatsby 
```

Follow the prompt indications and select the default options.

WARNING 
the installation will create a new folder which is reported as submodule for this repository. (in my example the src folder)
In order to avoid this, I removed cached submodule (took me part 6 to see the issue)
```bash
    git rm --cached src
    git rm -rf src/.git
```

In this installation, I used Typescript and chose not to use the CMS part and no styling system.
I also chose not to install any additional plugins.

```bash
    cd src
    npm run develop
```

# Plugins

```bash
    npm install gatsby-plugin-image gatsby-plugin-sharp gatsby-source-filesystem # part 3 and 4
    npm install gatsby-plugin-mdx @mdx-js/react # part 5
```

start performing some common customization to the project.