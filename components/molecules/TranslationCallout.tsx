import { Callout } from 'nextra/components';
import React from 'react';

const issueUrl =
  'https://github.com/pulsate-dev/pulsate.dev/labels/translation-';
type Language = 'en' | 'ja';

interface TranslationCalloutProps {
  lang: Language;
}

export const TranslationCallout = ({ lang }: TranslationCalloutProps) => {
  switch (lang) {
    case 'ja':
      return (
        <Callout type="warning" emoji="🌍">
          このページはまだ翻訳されていません。もしあなたがこの言語に精通している場合は
          <a href={issueUrl + 'ja'} style={{ textDecoration: 'underline' }}>
            翻訳に参加してください
          </a>
          。
        </Callout>
      );
    case 'en':
      return (
        <Callout type="warning" emoji="🌍">
          This page has not yet been translated. If you are familiar with this
          language,{' '}
          <a href={issueUrl + 'en'} style={{ textDecoration: 'underline' }}>
            please participate in the translation
          </a>
          .
        </Callout>
      );
  }
};
