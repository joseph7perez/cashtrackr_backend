import { Table, Column, Model, DataType, HasMany, ForeignKey,  } from "sequelize-typescript";
import Expense from "./Expense";

@Table({
    tableName: 'budgets'
})

class Budget extends Model {
    @Column({
        type: DataType.STRING(100)
    })
    declare name: string

    @Column({
        type: DataType.DECIMAL
    })
    declare amount: number

    @HasMany(() => Expense, {
        onUpdate: 'CASCADE', //Restriccion de integridad
        onDelete: 'CASCADE'  //Restriccion de integridad
    })
    declare expenses: Expense[]
}

export default Budget