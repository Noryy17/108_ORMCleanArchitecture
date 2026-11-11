module.exports = (sequelize, DataTypes) => {
    const Komik = sequelize.define("Komik", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.TEXT
        },
        author: {
            type: DataTypes.STRING
        }
    }, {
        // kolom tabel hanya id, title, description, author
        timestamps: false
    });
    return Komik;
};
