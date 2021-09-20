const renderHorizontal = require('./type/horizontalCard');
const renderVertical = require('./type/verticalCard');
const renderTheme = require('./theme/awesomeCard');

const renderSVG = (data,type,theme) => {
    const { quote, author } = data
    switch (theme) {
      case "dark":
        color = renderTheme("dark")
        break; 
      case "light":
        color = renderTheme("light")
        break; 
      default:
        color = renderTheme("light")
        break; 
    }
    switch (type) {
      case "vertical":
        return renderVertical({quote,author,color})
        break; 
      case "horizontal":
        return renderHorizontal({quote,author,color})
        break; 
      default:
        return renderVertical({quote,author,color})
        break; 
    }
}

module.exports = renderSVG
