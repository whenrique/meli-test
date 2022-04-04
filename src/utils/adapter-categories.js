const AdapterCategories = (param) =>
  param
    .filter(p => p.id === 'category')
    .map(p => ({ name: p.values[0].name, link: '#' }))

export default AdapterCategories
