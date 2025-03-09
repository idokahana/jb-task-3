import { Router } from "express";
import {
  addMeeting,
  getMeetingByDevGroup,
} from "../controllers/meeting/controller";
import validation from "../middlewares/validation";
import {
  getMeetingByDevValidator,
  newMeetingValidation,
} from "../controllers/meeting/validator";
import paramsValidation from "../middlewares/params-validation";

const meetingRouter = Router();

meetingRouter.get(
  "/:id",
  paramsValidation(getMeetingByDevValidator),
  getMeetingByDevGroup
);
meetingRouter.post("/", validation(newMeetingValidation), addMeeting);

export default meetingRouter;
