const screenSize = {
  mobile: {
    small: '320px',
    medium: '360px',
    large: '425px',
  },
  tablet: {
    small: '480px',
    medium: '640px',
    large: '768px',
  },
  laptop: {
    small: '1024px',
    medium: '1440px',
    large: '2560px',
  },
};

const mapScreenSize = {
  xs: '0px',
  sm: screenSize.tablet.large,
  md: screenSize.laptop.small,
  lg: screenSize.laptop.medium,
  xl: screenSize.laptop.large,
};

const colors = {
  primary: '#2f3064',
  white: '#ffffff',
  black: '#333346',
  grey: '#ebebed',
  background: '#F6F8FA',
  pearl: '#707474'
};

const theme = {
  colors,
  screenSize,
  mapScreenSize,
};

export default theme;
