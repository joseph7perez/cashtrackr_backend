import { Router } from "express";
import { BudgetController } from "../controllers/BudgetController";
import { body, param } from "express-validator";
import { handleInputErrors } from "../middleware/validation";
import { validateBudgetExists, validateBudgetId, validateBudgetInput } from "../middleware/budget";
import { ExpenseController } from "../controllers/ExpenseController";
import { validateExpenseExists, validateExpenseId, validateExpenseInput } from "../middleware/expense";
import { AuthController } from "../controllers/AuthController";

const router = Router()

router.post('/create-account', 
    body('name')        
        .notEmpty().withMessage('El nombre no puede estar vacio'),
    body('email')
        .isEmail().withMessage('El formato del correo no es válido'),
    body('password')
        .isLength({min: 8}).withMessage('La contraseña debe tener mínimo 8 caracteres'),
        // TODO: Revisar el uso de esta funcion
        // .isStrongPassword({
        //     minUppercase: 1,
        //     minNumbers: 1
        // }).withMessage('La contraseña debe tener una mayúscula y un número'),
        handleInputErrors,
    AuthController.createAccount
)


export default router