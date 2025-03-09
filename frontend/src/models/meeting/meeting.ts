import DevelopmentGroup from "../developmentGroup/developmentGroup";
import Draft from "./draft";

export default interface Meeting extends Draft {
  id: string;
  developmentGroup: DevelopmentGroup;
}
