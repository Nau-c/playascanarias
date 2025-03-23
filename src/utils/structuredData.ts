export const generateBeachStructuredData = (beach: Beach) => {
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
      }] : [])
    ]
  };
};