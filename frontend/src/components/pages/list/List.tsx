import { ChangeEvent, useEffect, useState } from "react";
import DevelopmentGroup from "../../../models/developmentGroup/developmentGroup";
import Meeting from "../../../models/meeting/meeting";
import developmentGroupService from "../../../services/developmentGroup";
import meetingsService from "../../../services/meeting";
import Card from "../card/card";
import "./List.css";

export default function List(): JSX.Element {
  const [meeting, setMeeting] = useState<Meeting[]>([]);
  const [developmentGroup, setDevelopmentGroup] = useState<DevelopmentGroup[]>(
    []
  );

  useEffect(() => {
    (async () => {
      try {
        const developmentGroupFromServies =
          await developmentGroupService.getAll();
        setDevelopmentGroup(developmentGroupFromServies);
      } catch (e) {
        alert(e);
      }
    })();
  }, []);

  async function CategoryChanged(event: ChangeEvent<HTMLSelectElement>) {
    const developmentGroupId = event.currentTarget.value;
    const currentGroup = await meetingsService.getByDevGroup(
      developmentGroupId
    );
    setMeeting(currentGroup);
  }

  return (
    <div className="List">
      <div className="CategoriesSelect">
        <select onChange={CategoryChanged}>
          <option defaultValue={""} disabled selected>
            Select your Group
          </option>
          {developmentGroup.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <div>
        {meeting.map((m) => (
          <Card meeting={m} key={m.id} />
        ))}
      </div>
    </div>
  );
}
