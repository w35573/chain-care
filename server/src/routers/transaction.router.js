import { Router } from 'express';
import { saveTransactionDetails } from '../controllers/transaction.controller'

const transactionRouter = Router();

transactionRouter.route('/ails').post(saveTransactionDetails);

export default transactionRouter;