import { useRouter } from 'next/router';

import { translationData } from '../i18n/PulsateHome';

export default function PulsateHome() {
  const { locale } = useRouter();
  const t = locale == 'ja' ? translationData.ja : translationData.en;

  return <h1>{t.TAGLINE}</h1>;
}
