import type { Request, Response } from "express";
import Budget from "../models/Budget";

export class BudgetController {

    static getAll = async (req: Request, res: Response) => {
        console.log('Desde /api/budgets');
    }

    static create = async (req: Request, res: Response) => {
        // console.log(req.body);
        try {
            const budget = new Budget(req.body)  
            await budget.save()
            res.status(201).json('Presupuesto Creado Correctamente')
        } catch (error) {
            //console.log(error);
            res.status(500).json({error: 'Hubo un Error '})
            
        }
    }

    static getById = async (req: Request, res: Response) => {
        console.log('Desde /api/budgets getById');
    }

    static updateById = async (req: Request, res: Response) => {
        console.log('Desde /api/budgets updateById');
    }

    static deleteById = async (req: Request, res: Response) => {
        console.log('Desde /api/budgets deleteById');
    }
}
