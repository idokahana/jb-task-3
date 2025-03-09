import axios from "axios";

import Draft from "../models/meeting/draft";
import Meeting from "../models/meeting/meeting";

class Meetings {
  async getByDevGroup(id: string): Promise<Meeting[]> {
    const response = await axios<Meeting[]>(
      `${import.meta.env.VITE_REST_SERVER_URL}/meeting/${id}`
    );

    return response.data;
  }

  async addMeeting(draft: Draft): Promise<Meeting> {
    const response = await axios.post<Meeting>(
      `${import.meta.env.VITE_REST_SERVER_URL}/meeting`,
      draft
    );
    return response.data;
  }
}

const meetingsService = new Meetings();
export default meetingsService;
