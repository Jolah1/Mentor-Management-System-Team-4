import Joi from 'joi';

const createProfile = {
  body: Joi.object().keys({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    bio: Joi.string().optional(),
    website: Joi.string().optional(),
    country: Joi.string().optional(),
    city: Joi.string().optional(),
    imageUrl: Joi.string().optional(),
    gitHub: Joi.string().optional(),
    instagram: Joi.string().optional(),
    linkedIn: Joi.string().optional(),
    twitter: Joi.string().optional(),
  }),
};

const getUsers = {
  query: Joi.object().keys({
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getUser = {
  params: Joi.object().keys({
    userId: Joi.number().integer(),
  }),
};

export default {
  createProfile,
  getUsers,
  getUser,
};
