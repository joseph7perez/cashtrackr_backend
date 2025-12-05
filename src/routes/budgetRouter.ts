import { Router } from "express";
import { BudgetController } from "../controllers/BudgetController";
import { body, param } from "express-validator";
import { handleInputErrors } from "../middleware/validation";
import { validateBudgetExists, validateBudgetId, validateBudgetInput } from "../middleware/budget";
import { ExpenseController } from "../controllers/ExpenseController";

const router = Router()

router.param('budgetId', validateBudgetId)
router.param('budgetId', validateBudgetExists)

router.get('/', BudgetController.getAll)

router.post('/', 
    validateBudgetInput,
    BudgetController.create
)

router.get('/:budgetId', BudgetController.getById)

router.put('/:budgetId', 
    validateBudgetInput,
    BudgetController.updateById
)

router.delete('/:budgetId', BudgetController.deleteById)

/** Routes for expenses */

//api/budgets/100/espenses/100

router.get('/:budgetId/expenses', ExpenseController.getAll)
router.post('/:budgetId/expenses', ExpenseController.create)
router.get('/:budgetId/expenses/:expenseId', ExpenseController.getById)
router.put('/:budgetId/expenses/:expenseId', ExpenseController.updateById)
router.delete('/:budgetId/expenses/:expenseId', ExpenseController.deleteById)



export default router