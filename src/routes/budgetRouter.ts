import { Router } from "express";
import { BudgetController } from "../controllers/BudgetController";
import { body, param } from "express-validator";
import { handleInputErrors } from "../middleware/validation";

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
    BudgetController.create)

router.get('/:id', 
    param('id'). isInt().withMessage('ID no válido')
        .custom(value => value > 0).withMessage('ID no válido'),
    handleInputErrors,
    BudgetController.getById)

router.put('/:id', 
    param('id'). isInt().withMessage('ID no válido')
        .custom(value => value > 0).withMessage('ID no válido'),
    body('name')
        .notEmpty().withMessage('El nombre no puede ir vacio'),
    body('amount')
        .notEmpty().withMessage('La cantidad del presupuesto no puede ir vacio')
        .isNumeric().withMessage('El valor debe ser un número')
        .custom(value => value > 0).withMessage('El valor debe ser mayor a 0'),
    handleInputErrors,
    BudgetController.updateById)

router.delete('/:id', 
    param('id'). isInt().withMessage('ID no válido')
        .custom(value => value > 0).withMessage('ID no válido'),
    handleInputErrors,
    BudgetController.deleteById)

export default router