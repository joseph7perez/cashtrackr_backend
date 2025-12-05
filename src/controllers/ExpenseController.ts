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
        console.log('Desde getById ');
        
    }

    static updateById = async (req: Request, res: Response) => {
 
    }
  
    static deleteById = async (req: Request, res: Response) => {

    }
}