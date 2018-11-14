export default function findRouteIcon (routeName) {
  switch (routeName) {
    case 'Home':
      return 'home'
    case 'Battery':
      return 'battery-std'
    case 'Geolocation':
      return 'place'
    case 'Contact':
      return 'contacts'
    case 'Language':
      return 'language'
    case 'Vibration':
      return 'vibration'
    case 'Sensors':
      return 'gps-fixed'
  }
}