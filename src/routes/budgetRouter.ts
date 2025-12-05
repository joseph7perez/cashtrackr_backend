import { Router } from "express";
import { BudgetController } from "../controllers/BudgetController";
import { body, param } from "express-validator";
import { handleInputErrors } from "../middleware/validation";
import { validateBudgetExists, validateBudgetId, validateBudgetInput } from "../middleware/budget";
import { ExpenseController } from "../controllers/ExpenseController";
import { validateExpenseInput } from "../middleware/expense";

const router = Router()

router.param('budgetId', validateBudgetId)
router.param('budgetId', validateBudgetExists)

router.get('/', BudgetController.getAll)

router.post('/', 
    validateBudgetInput,
    handleInputErrors,
    BudgetController.create
)

router.get('/:budgetId', BudgetController.getById)

router.put('/:budgetId', 
    validateBudgetInput,
    handleInputErrors,
    BudgetController.updateById
)

router.delete('/:budgetId', BudgetController.deleteById)

/** Routes for expenses */

//api/budgets/100/espenses/100

router.post('/:budgetId/expenses', 
    validateExpenseInput,
    handleInputErrors,
    ExpenseController.create
)

router.get('/:budgetId/expenses/:expenseId', ExpenseController.getById)

router.put('/:budgetId/expenses/:expenseId', 
    validateExpenseInput,
    handleInputErrors,
    ExpenseController.updateById
)

router.delete('/:budgetId/expenses/:expenseId', ExpenseController.deleteById)



export default router