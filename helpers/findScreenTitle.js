export default function findScreenTitle (routeName) {
  switch (routeName) {
    case 'Home':
      return 'Home'
    case 'Battery':
      return 'Battery'
    case 'Geolocation':
      return 'Geolocation'
    case 'Contact':
      return 'Contacts'
    case 'Language':
      return 'Language'
    case 'Vibration':
      return 'Vibration'
    case 'Sensors':
      return 'Sensors'
  }
}