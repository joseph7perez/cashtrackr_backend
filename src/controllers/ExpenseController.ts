import type { Request, Response } from 'express'
import Expense from '../models/Expense'

export class ExpenseController {
  
    static create = async (req: Request, res: Response) => {
        //console.log(req.budget.id); // Obtener el id del budget al que pertenece el expense
        try {
            const expense = new Expense(req.body)
            expense.budgetId = req.budget.id 
            await expense.save()
            res.status(201).json('Gasto Creado Correctamente')

        } catch (error) {
            //console.log(error);
            res.status(500).json({error: 'Hubo un Error '})      
        }
    }
  
    static getById = async (req: Request, res: Response) => {
        res.json(req.expense)
        
    }

    static updateById = async (req: Request, res: Response) => {
        //Escribir los cambios del body
        await req.expense.update(req.body)
        res.json('Gasto actualizado correctamente')
    }
  
    static deleteById = async (req: Request, res: Response) => {
        await req.expense.destroy() //destroy() para eliminarlo de la BD
        res.json('Gasto eliminado correctamente')
    }
}