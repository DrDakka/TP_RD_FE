import { z } from 'zod';
import { BadRequestError } from '../errors/errors';
import { router, RouterKey } from '../router';

const isValidEndpoint = (ep: string): ep is RouterKey => ep in router;

const isValidMethod = <K extends RouterKey>(
  ep: K,
  method: string,
): method is keyof (typeof router)[K] & string => method in router[ep];

function validateObject<T extends z.ZodSchema>(
  body: unknown,
  schema: T,
): z.infer<T> {
  try {
    return schema.parse(body);
  } catch (e) {
    if (e instanceof z.ZodError) {
      throw new BadRequestError(e.issues[0].message);
    }

    throw e;
  }
}

const validate = {
  ep: isValidEndpoint,
  method: isValidMethod,
  object: validateObject,
};

export default validate;
