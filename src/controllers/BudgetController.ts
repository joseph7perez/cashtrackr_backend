import type { Request, Response } from "express";
import Budget from "../models/Budget";
import { param } from "express-validator";

export class BudgetController {

    static getAll = async (req: Request, res: Response) => {
        try {
            const budgets = await Budget.findAll({
                order: [
                    ['createdAt', 'DESC']
                ],
                // TODO: Filtrar por el usuario autenticado
            })

            res.json(budgets)
        } catch (error) {
            //console.log(error);
            res.status(500).json({error: 'Hubo un Error '})      
        }
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
        res.json(req.budget)
    }

    static updateById = async (req: Request, res: Response) => {
        //Escribir los cambios del body
        await req.budget.update(req.body)
        res.json('Presupuesto actualizado correctamente')
    }

    static deleteById = async (req: Request, res: Response) => {
        await req.budget.destroy() //destroy() para eliminarlo de la BD
        res.json('Presupuesto eliminado correctamente')
    }
}
