import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Workshop extends Model<Workshop> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    field: string;

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