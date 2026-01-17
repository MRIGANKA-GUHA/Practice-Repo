const fs= require('fs');
const os= require('os');
const EventEmitter = require('events');

class Logger extends EventEmitter{
    log(message){
        this.emit('message', {message})
    }
}

const logger= new Logger()
const logFile= './eventLog.txt'
const logtoFile= (event) => {                       //logger.on jokhon marchi okhne thekei dia diche message node er facility ota
    const logMessage = `${new Date().toISOString()} - ${event.message} \n`
    fs.appendFileSync(logFile, logMessage);
}

logger.on('message',logtoFile);

setInterval(() => {
    const freeMemory= (os.freemem() / os.totalmem())* 100
    logger.log(`Current Free memory ${freeMemory.toFixed(2)}`)
}, 3000);

logger.log('Application Started');
logger.log('Application event occured');