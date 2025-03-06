

export function paintText(text,textColor){

  switch(textColor){
      case 'black':
            return `\x1b[30m${text}\x1b[0m`
        
        case 'red':
            return `\x1b[31m${text}\x1b[0m`
        
        case 'green':
            return `\x1b[32m${text}\x1b[0m`
        
        case 'yellow':
            return `\x1b[33m${text}\x1b[0m`

        case 'blue':
            return `\x1b[34m${text}\x1b[0m`

        case 'magenta':
            return `\x1b[35m${text}\x1b[0m`
        
        case 'cyan':
            return `\x1b[36m${text}\x1b[0m`
        
        case 'white':
            return `\x1b[37m${text}\x1b[0m`
  }
}
