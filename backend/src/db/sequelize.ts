import config from "config";
import { Sequelize } from "sequelize-typescript";
import Category from "../models/meeting";
import Product from "../models/developmentGroup";
import Meeting from "../models/meeting";
import DevelopmentGroup from "../models/developmentGroup";

const logging = config.get<boolean>("sequelize.logging") ? console.log : false;

const sequelize = new Sequelize({
  models: [Meeting, DevelopmentGroup],
  dialect: "mysql",
  ...config.get("db"),
  logging,
});

export default sequelize;
