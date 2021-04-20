import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Workshop extends Model {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement: true,
    })
    id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;

    @Column({
        type: DataType.INTEGER,
        unique: true,
        allowNull: false,
    })
    field: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    tutor: string;

    @Column({
        type: DataType.ENUM,
        values: ['monday', 'tuesday','wednesday', 'thursday', 'friday'],
        allowNull: true,
    })
    workshopdate: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    curriculum: [string];
}