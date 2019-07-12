import { format } from 'winston';

export const defaultFormat = (
  namespace: string,
  colorize: boolean = false,
  timestamp: boolean = true
) => {
  const queue = [format.label({ label: namespace })];

  if (colorize) {
    queue.push(format.colorize());
  }

  if (timestamp) {
    queue.push(format.timestamp());
  }

  const simpleFormat = ({ timestamp, label, level, message }) =>
    `${timestamp} [${label}] ${level}: ${message}`;

  const errorFormat = ({ timestamp, label, level, message }) =>
    `${timestamp} [${label}] ${level}: ${message.stack}`;

  queue.push(
    format.printf((info: any) => {
      if (info.message instanceof Error) {
        const err = info.message as Error;

        return errorFormat({ ...info, ...err });
      }

      return simpleFormat(info);
    })
  );

  return format.combine(...queue);
};
