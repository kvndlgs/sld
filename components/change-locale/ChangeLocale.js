'use client'

import React from 'react';
import { useRouter, useParams, useSelectedLayoutSegment } from 'next/navigation';

const ChangeLocale = () => {
    const router = useRouter();
    const params = useParams();
    const urlSegments = useSelectedLayoutSegment();
}

const handleLocaleChange = event => {
    const newLocale = event.target.value;

    // This is used by the Header component which is used in `app/[locale]/layout.tsx` file,
    // urlSegments will contain the segments after the locale.
    // We replace the URL with the new locale and the rest of the segments.
    router.push(`/${newLocale}/${urlSegments.join('/')}`);
  return (
    <div>
      <select onChange={handleLocaleChange} value={params.locale}>
        <option value="en">🇺🇸 English</option>
        <option value="fr_CA">French</option>
      </select>
    </div>
  );
};

export default ChangeLocale;