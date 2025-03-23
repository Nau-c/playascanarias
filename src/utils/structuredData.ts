export const generateBeachStructuredData = (beach: Beach) => {
  const isMaspalomas = beach.name === "Playa de Maspalomas";

  const formatTideLevel = (level: number | undefined) => {
    const formattedNumber = Number(level || 0).toFixed(4);
    return `${formattedNumber} m`;
  };

  return {
    '@context': 'https://schema.org',
    '@type': 'Beach',
    name: beach.name,
    description: beach.description,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: beach.latitude,
      longitude: beach.longitude
    },
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Canarias',
      addressCountry: 'ES'
    },
    amenityFeature: [
      ...(beach.accessible ? [{
        '@type': 'LocationFeatureSpecification',
        name: 'Accessible',
        value: true
      }] : []),
      ...(beach.blueFlag ? [{
        '@type': 'LocationFeatureSpecification',
        name: 'Blue Flag Beach',
        value: true
      }] : []),
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Tide Level',
        value: '0.3392 m',
        unitCode: 'MTR'
      },
      ...(isMaspalomas ? [
        {
          '@type': 'LocationFeatureSpecification',
          name: 'Natural Reserve',
          value: true
        },
        {
          '@type': 'LocationFeatureSpecification',
          name: 'Length',
          value: '6000',
          unitCode: 'MTR'
        },
        {
          '@type': 'LocationFeatureSpecification',
          name: 'Dunes',
          value: true
        }
      ] : [])
    ],
    photo: beach.imageUrl,
    publicAccess: true
  };
};