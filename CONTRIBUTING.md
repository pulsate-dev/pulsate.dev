# Pulsate Documentation - Contributing Guide

> [!WARNING]
> This page is currently being edited.

- [Development Environment](#development-environment)
  - [Install the package](#install-the-package)
- [Adding Documents](#adding-documents)
  - [MDX](#mdx)
  - [Translation (i18n)](#translation-i18n)

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

```tsx
import { TranslationCallout } from "../components/molecules/TranslationCallout";

<TranslationCallout lang={'en'}/>
```

- The following values are available for `lang`.
  - `en`: English
  - `ja`: Japanese
