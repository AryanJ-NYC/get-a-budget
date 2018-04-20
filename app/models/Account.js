module.exports = (sequelize, DataTypes) => {
  return sequelize.define('account', {
    name: {
      allowNull: false,
      type: DataTypes.STRING
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
};
