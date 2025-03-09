import {
  AllowNull,
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  Default,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import DevelopmentGroup from "./developmentGroup";

@Table({
  underscored: true,
})
export default class Meeting extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id: string;

  @ForeignKey(() => DevelopmentGroup)
  @AllowNull(false)
  @Column(DataType.UUID)
  developmentGroupId: string;

  @AllowNull(false)
  @Column(DataType.DATE)
  startingDateAndTime: string;

  @AllowNull(false)
  @Column(DataType.DATE)
  endingDateAndTime: Date;

  @AllowNull(false)
  @Column
  meetingDescription: Date;

  @AllowNull(false)
  @Column
  meetingRoom: string;

  @BelongsTo(() => DevelopmentGroup)
  developmentGroup: DevelopmentGroup;
}
