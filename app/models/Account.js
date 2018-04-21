module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define('account', {
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    currentBalance: {
      allowNull: false,
      defaultValue: 0,
      type: DataTypes.DECIMAL,
    },
    onBudget: {
      allowNull: false,
      type: DataTypes.BOOLEAN
    },
    accountType: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    hidden: {
      type: DataTypes.BOOLEAN
    },
    lastReconciledDate: {
      type: DataTypes.DATE
    }
  });

  Account.associate = models => {
    models.Account.hasMany(models.Transaction);
  };

  return Account;
};
