import { Link } from '@kuma-ui/core';
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
        <Callout type="warning">
          このページはまだ翻訳されていません。もしあなたがこの言語に精通している場合は
          <Link
            href={issueUrl + 'ja'}
            textDecoration="underline"
            color="#006CE6"
          >
            翻訳に参加してください
          </Link>
          。
        </Callout>
      );
    case 'en':
      return (
        <Callout type="warning">
          This page has not yet been translated. If you are familiar with this
          language,{' '}
          <Link
            href={issueUrl + 'ja'}
            textDecoration="underline"
            color="#006CE6"
          >
            please participate in the translation
          </Link>
          .
        </Callout>
      );
  }
};
