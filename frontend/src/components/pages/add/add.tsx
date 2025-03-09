import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import DevelopmentGroup from "../../../models/developmentGroup/developmentGroup";
import Draft from "../../../models/meeting/draft";
import CategoriesService from "../../../services/developmentGroup";
import meetingsService, {
  default as productsService,
} from "../../../services/meeting";
import "./add.css";
import developmentGroupService from "../../../services/developmentGroup";

export default function Add(): JSX.Element {
  const [developmentGroup, setDevelopmentGroup] = useState<DevelopmentGroup[]>(
    []
  );

  const { register, handleSubmit, formState } = useForm<Draft>();

  useEffect(() => {
    (async () => {
      try {
        const developmentGroupFromService =
          await developmentGroupService.getAll();
        setDevelopmentGroup(developmentGroupFromService);
      } catch (e) {
        alert(e);
      }
    })();
  }, []);

  async function submit(draft: Draft) {
    try {
      await meetingsService.addMeeting(draft);
      alert("added product");
    } catch (e) {
      alert(e);
    }
  }

  return (
    <div className="Add">
      <form onSubmit={handleSubmit(submit)}>
        <label>Meeting Description</label>
        <input
          type="text"
          placeholder="Meeting Description"
          {...register("meetingDescription", {
            required: {
              value: true,
              message: "Meeting Description is a must!",
            },
          })}
        />
        <span>{formState.errors.meetingDescription?.message}</span>
        <label>Starting Time</label>
        <input
          type="datetime-local"
          {...register("startingDateAndTime", {
            required: {
              value: true,
              message: "Date is a must",
            },
          })}
        />
        <span>{formState.errors.startingDateAndTime?.message}</span>
        <label>Ending Time</label>
        <input
          type="datetime-local"
          {...register("endingDateAndTime", {
            required: {
              value: true,
              message: "Ending time is must",
            },
          })}
        />
        <span>{formState.errors.endingDateAndTime?.message}</span>
        <label>Meeting Room</label>
        <input
          type="text"
          placeholder="Meeting Room"
          {...register("meetingRoom", {
            required: {
              value: true,
              message: "Meeting Room is must",
            },
          })}
        />
        <span>{formState.errors.meetingRoom?.message}</span>

        <select
          defaultValue={""}
          {...register("developmentGroupId", {
            required: {
              value: true,
              message: "must pick a Group",
            },
          })}
        >
          <option value="" disabled>
            choose an Group{" "}
          </option>
          {developmentGroup.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </select>
        <button> Add Meeting</button>
      </form>
    </div>
  );
}
