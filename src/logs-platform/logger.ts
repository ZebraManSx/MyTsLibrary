import log4js from "log4js";

export class Logger { 

  constructor() {
    log4js.configure({
      appenders: {
        out:  { type: "stdout", 
                layout: {
                  type: "pattern",
                  pattern: "%d %[%p%] %c %X{user} %m%n"}
              },
        app: { type: "file", filename: "./logs/application.log" },
      },
      categories: {
        default: { appenders: ["out"], level: "trace" },
        app: { appenders: ["app"], level: "trace" },
      },
    });
  }
  
  /** delegate method */
  getLogger(category?: string): log4js.Logger{
    return log4js.getLogger(category);
  }
  shutdown(cb?: (error?: Error | undefined) => void | undefined): void {
     log4js.shutdown(cb);
  }

}