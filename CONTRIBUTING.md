# Pulsate Documentation - Contributing Guide

> [!WARNING]
> This page is currently being edited.

## Development Environment

Pulsate Docs assumes the following development environment.

- Node.js v20.x
- Pnpm (pnpm) v9.x

### Install the package

Using pnpm to manage packages. Run the following command to install the package.

```sh
# If pnpm is not enabled:

corepack enable pnpm
pnpm install
```

## Adding Documents

Basically, pages are placed under `pages/`. The file name is in the format of `*.en.mdx` or `*.ja.mdx`.

Each page has `.ja` and `.en` conjunctions, which are used for routing.

There is no need to prepare separate directories. Next.js creates the routing dynamically.

### MDX

The document is written in MDX format. You can use JSX syntax in Markdown.

```mdx
import { Callout } from 'nextra/components';

<Callout>This is a callout.</Callout>
```

All components supported by Nextra are available. Please see Nextra Docs for more information.

- [Built-ins](https://nextra.site/docs/guide/built-ins) (Callout and Tabs, Steps etc...)

### Translation (i18n)

Next.js i18n is used for multilingual support. The following languages are supported at this time.

- Japanese (ja)
- English (en)

Translation is basically editing the file `*.en.mdx`. You may use Deepl or other tools to translate the text, but please use it only as an aid. If you use Deepl to read all pages, it may destroy the Markdown notation.

If you cannot translate it in time, import the following component, place it in MDX, and commit.

```md
import { TranslationCallout } from "../components/molecules/TranslationCallout";

<TranslationCallout lang={'en'}/>
```

- The following values are available for `lang`.
  - `en`: English
  - `ja`: Japanese

## Components

MDX can use JSX Syntax and React components.

pulsate.dev provides components built-in to Nextra as well as its own components. This section describes how to use these components and how to create components.

## Using Nextra components & features

- [Syntax Highlighting](https://nextra.site/docs/guide/syntax-highlighting)
  - Code blocks using Sniki.
- [Npm2Yarn](hhttps://nextra.site/docs/guide/advanced/npm2yarn)
  - Installation command code blocks for npm, pnpm and yarn using Npm2Yarn.
- [Rendering Tables](https://nextra.site/docs/guide/advanced/table)
  - Markdown tables using GFM syntax.

- [Callout](https://nextra.site/docs/guide/built-ins/callout)
  - A callout component that can be used to display messages.
  ```md
  import { Callout } from 'nextra/components'

  <Callout type="info" emoji="ℹ️">
    Today is Friday.
  </Callout>
  ```

- [Tabs Component](https://nextra.site/docs/guide/built-ins/tabs)
  - A component that can be used to switch between multiple tabs.
  ```md
  import { Tabs } from 'nextra/components'

  <Tabs items={["Tab1", "Tab2"]}>
    <Tabs.Tab>
      This is Tab1.
    </Tabs.Tab>
    <Tabs.Tab>
      This is Tab2.
    </Tabs.Tab>
  </Tabs>
  ```
  
- [Cards Component](https://nextra.site/docs/guide/built-ins/cards)
  - A component that can be used to display multiple cards.
  ```md
  import { Cards, Card } from 'nextra/components'
  import { CardsIcon, OneIcon, WarningIcon } from '../../icons'

  <Cards>
    <Card icon={<WarningIcon />} title="Callout" href="/docs/guide/built-ins/callout" />
    <Card icon={<CardsIcon />} title="Tabs" href="/docs/guide/built-ins/tabs" />
    <Card icon={<OneIcon />} title="Steps" href="/docs/guide/built-ins/steps" />
  </Cards>
  ```
  
- [Steps](https://nextra.site/docs/guide/built-ins/steps)
  ```mdx
  import { Steps } from 'nextra/components'

  <Steps>
    ### Step 1

    Contents for step 1.

    ### Step 2

    Contents for step 2.
  </Steps>
  ```
    

- [File Tree Component](https://nextra.site/docs/guide/built-ins/filetree)
  ```md
  import { FileTree } from 'nextra/components'

  <FileTree>
    <FileTree.Folder name="pages" defaultOpen>
      <FileTree.File name="_meta.json" />
      <FileTree.File name="contact.md" />
      <FileTree.File name="index.mdx" />
      <FileTree.Folder name="about">
        <FileTree.File name="_meta.json" />
        <FileTree.File name="legal.md" />
        <FileTree.File name="index.mdx" />
      </FileTree.Folder>
    </FileTree.Folder>
  </FileTree>
  ```

### Using Pulsate Components

### TranslationCallout

--- Defined by [TranslationCallout.tsx](components/molecules/TranslationCallout.tsx)

Add a component to indicate that the translation is in progress, untranslated.

```md
import { TranslationCallout } from "../components/molecules/TranslationCallout";

<TranslationCallout lang={'en'}/>
```

### Define your own components

You can add new components under `components/`. Make sure you create them in TypeScript JSX for type safety.

The directory structure under `components/` is assumed to be as follows.

- `atoms/`: components that cannot express a specific meaning by themselves
- `molecules/`: components that have a meaning on their own and can be placed freely within the page.
- `organisms/`: components that can stand alone and constitute a specific segment of a page.

`pages/` should only contain MDX files.

## KumaUI

KumaUI can be used to design and create website components.

See [KumaUI documentation](https://www.kuma-ui.com/docs) for more information.

> [!NOTE]
> 
> It is not possible to use KumaUI components directly in MDX.
> Only components can be used by KumaUI. [Define and use them yourself](#define-your-own-components).

This section summarises examples of the use of components that may be used frequently. Please refer to the documentation for more information.

### Box

--- [Docs](https://www.kuma-ui.com/docs/Components/Box)

```typescript jsx
import { Box } from '@kuma-ui/core';

const ThisIsTheBox = () => {
  return (
          <Box p={8} bg="blue" color="white">
            Hello world
          </Box>
  );
};
```

### Grid

--- [Docs](https://www.kuma-ui.com/docs/Components/Grid)

```typescript jsx
import { Grid } from '@kuma-ui/core';

const GridExample = () => {
  return (
          <Grid gridTemplateColumns="repeat(2, 1fr)" gap={6}>
            <Box bg="teal" height="80px" />
            <Box bg="teal" height="80px" />
            <Box bg="teal" height="80px" />
            <Box bg="teal" height="80px" />
          </Grid>
  );
};
```

### Text

--- [Docs](https://www.kuma-ui.com/docs/Components/Text)

```typescript jsx
import { Text } from '@kuma-ui/core';

<Text variant="h1">Hello, World!</Text>
```

### Button

--- [Docs](https://www.kuma-ui.com/docs/Components/Button)

```typescript jsx
import { Button } from '@kuma-ui/core';

const ButtonExample = () => {
  return (
    <Button p={8} bg="blue" color="white" borderRadius={6}>
      Click me
    </Button>
  );
};
```
