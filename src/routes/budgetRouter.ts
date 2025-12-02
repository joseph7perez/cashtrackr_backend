import { Router } from "express";
import { BudgetController } from "../controllers/BudgetController";
import { body, param } from "express-validator";
import { handleInputErrors } from "../middleware/validation";
import { validateBudgetExists, validateBudgetId } from "../middleware/budget";

const router = Router()

router.get('/', BudgetController.getAll)
router.post('/', 
    body('name')
        .notEmpty().withMessage('El nombre no puede ir vacio'),
    body('amount')
        .notEmpty().withMessage('La cantidad del presupuesto no puede ir vacio')
        .isNumeric().withMessage('El valor debe ser un número')
        .custom(value => value > 0).withMessage('El valor debe ser mayor a 0'),
    handleInputErrors,
    BudgetController.create
)

router.get('/:id', 
    validateBudgetId,
    validateBudgetExists,
    BudgetController.getById
)

router.put('/:id', 
   validateBudgetId,
   validateBudgetExists,
    body('name')
        .notEmpty().withMessage('El nombre no puede ir vacio'),
    body('amount')
        .notEmpty().withMessage('La cantidad del presupuesto no puede ir vacio')
        .isNumeric().withMessage('El valor debe ser un número')
        .custom(value => value > 0).withMessage('El valor debe ser mayor a 0'),
    handleInputErrors,
    BudgetController.updateById
)

router.delete('/:id', 
    validateBudgetId,
    validateBudgetExists,
    BudgetController.deleteById
)

export default router