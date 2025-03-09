import { NextFunction, Request, Response } from "express";
import Meeting from "../../models/meeting";
import DevelopmentGroup from "../../models/developmentGroup";

export async function getMeetingByDevGroup(
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) {
  try {
    const developmentGroupId = req.params.id;
    const meetings = await Meeting.findAll({
      where: { developmentGroupId },
      include: [DevelopmentGroup],
    });
    res.json(meetings);
  } catch (e) {
    next(e);
  }
}

export async function addMeeting(
  req: Request<
    {},
    {},
    {
      developmentGroupId: string;
      startingDateAndTime: Date;
      endingDateAndTime: Date;
      meetingDescription: string;
      meetingRoom: string;
    }
  >,
  res: Response,
  next: NextFunction
) {
  try {
    const newMeeting = await Meeting.create(req.body);
    await newMeeting.reload({ include: [DevelopmentGroup] });
    res.json(newMeeting);
  } catch (e) {
    next(e);
  }
}
