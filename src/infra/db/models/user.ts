export default (sequelize: any, DataTypes: any) => {
  const User = sequelize.define(
    'user',
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      lastLogin: DataTypes.DATE,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    },
    {}
  );
  User.associate = function(models: any) {
    // associations can be defined here
  };
  return User;
};
