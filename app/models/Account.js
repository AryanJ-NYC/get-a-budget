module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define('account', {
    name: {
      type: DataTypes.STRING
    },
    onBudget: {
      type: DataTypes.BOOLEAN
    },
    accountType: {
      type: DataTypes.INTEGER
    },
    hidden: {
      type: DataTypes.BOOLEAN
    },
    lastReconciledDate: {
      type: DataTypes.DATE
    }
  });

  return Account;
};
