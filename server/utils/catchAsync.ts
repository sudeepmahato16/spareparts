import {Request, NextFunction, Response} from 'express'

export const catchAsync = (fn: (req: Request & {
  user?: any
}, res: Response, next: NextFunction) => Promise<void>) => {
  return (req: Request & {
    user?: any
  }, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next)
  }
}