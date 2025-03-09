import axios from "axios";
import DevelopmentGroup from "../models/developmentGroup/developmentGroup";
class DevelopmentGroups {
  async getAll(): Promise<DevelopmentGroup[]> {
    const response = await axios(
      `${import.meta.env.VITE_REST_SERVER_URL}/developmentGroup`
    );

    return response.data;
  }
}

const developmentGroupService = new DevelopmentGroups();
export default developmentGroupService;
