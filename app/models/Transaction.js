module.exports = (sequelize, DataTypes) => {
  const Transaction =  sequelize.define('transaction', {
    amount: {
      allowNull: false,
      type: DataTypes.DECIMAL,
    },
    date: {
      allowNull: false,
      type: DataTypes.DATE
    },
    payee: {
      type: DataTypes.STRING
    },
    memo: {
      type: DataTypes.STRING
    },
    lastReconciledDate: {
      type: DataTypes.DATE
    },
    transactionDirection: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
  Transaction.associate = models => {
    models.Transaction.belongsTo(models.Account, {
      foreignKey: { allowNull: false },
    });
  };
  return Transaction;
};
