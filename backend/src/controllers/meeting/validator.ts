import Joi from "joi";

export const newMeetingValidation = Joi.object({
  developmentGroupId: Joi.string().uuid().required(),
  startingDateAndTime: Joi.date().required(),
  endingDateAndTime: Joi.date().required(),
  meetingDescription: Joi.string().max(500).required(),
  meetingRoom: Joi.string().max(50).required(),
});
export const getMeetingByDevValidator = Joi.object({
  id: Joi.string().uuid().required(),
});
