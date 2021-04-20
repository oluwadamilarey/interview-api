import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Workshop extends Model {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @Column({
        type: DataType.STRING,
        allowNull: true,
        unique: false
    })
    name: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: true,
        unique: false
    })
    field: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: true,
        unique: false
    })
    tutor: number;

    @Column({
        type: DataType.ENUM,
        values: ['monday', 'tuesday','wednesday', 'thursday', 'friday'],
        allowNull: true,
        unique: false
    })
    workshopdate: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
        unique: false
    })
    curriculum: string;
}