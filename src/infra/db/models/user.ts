import sequelize, { Model } from 'sequelize';

export const userModelFactory = (sequelize: any) => {
  class User extends Model {}

  User.init(
    {},
    {
      modelName: 'user',
      sequelize
    }
  );

  return User;
};
