import type { Request, Response } from "express";

export class BudgetController {

    static getAll = async (req: Request, res: Response) => {
        console.log('Desde /api/budgets');
    }

    static create = async (req: Request, res: Response) => {
        console.log('Desde /api/budgets create');
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
