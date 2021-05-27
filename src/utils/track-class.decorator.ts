import { Logger } from "@nestjs/common";

export function TrackMethods() {
  return (constructor: any) => {
    const logger = new Logger(`${constructor.name}`);
    logger.debug(`Tracking`);
    for (const prop of Object.getOwnPropertyNames(constructor.prototype)) {
      const originalMethod = constructor.prototype[prop];
      constructor.prototype[prop] = function (...args: any[]) {
        if (process.env.LOG_TRACE) {
          logger.debug(`${prop} : ${JSON.stringify(args)}`);
        }
        return originalMethod.apply(this, args);
      };
    }
    return constructor;
  };
}
