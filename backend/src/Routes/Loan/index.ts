import { Router } from "express";
import { getElections } from "../../Controller/Admin/getElections";
import { createLoan } from "../../Controller/Loan/create";
import { authenticateWithJwt } from "../../Middlewares/jwtAuth";
import { validateRequestPayload } from "../../Middlewares/validateRequestPayload";
import { createLoanSchema } from "../../Schemas/Loan";


export const LoanRouter = Router();


LoanRouter.get('/elections', authenticateWithJwt, getElections);

LoanRouter.post('/', authenticateWithJwt,validateRequestPayload(createLoanSchema), createLoan);

// LoanRouter.get('/elections/:electionId', authenticateWithJwt, getElection);

// LoanRouter.get('/elections/:electionId/vote', authenticateWithJwt, getVote);

// LoanRouter.post('/elections', authenticateWithJwt,authenticateAdmin,validateRequestPayload(createElectionSchema), createElection);

// LoanRouter.post('/elections/vote', authenticateWithJwt,validateRequestPayload(createVoteSchema), registerVote);

// LoanRouter.put('/elections/:electionId', authenticateWithJwt,authenticateAdmin, validateRequestPayload(updateElectionSchema), updateElection);

// LoanRouter.delete('/elections/options/:optionId', authenticateWithJwt,authenticateAdmin, deleteOption);
