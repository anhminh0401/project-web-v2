const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('KHACH_HANG', {
    MaKhachHang: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    HoTen: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MatKhau: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Email: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    SoDienThoai: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    DiaChiGiaoHang: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    XacMinhTaiKhoan: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    is_block: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    is_del: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'KHACH_HANG',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "MaKhachHang" },
        ]
      },
    ]
  });
};
