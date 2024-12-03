import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DatePickerWithRange } from "@/components/ui/dateRangePicker";
import { ReloadIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

export default function FeedbackResultsPopup(props) {
  const { modalOpen, setUuid, error, data, setStart, setEnd } = props;
  const [fistSup, setFirstSub] = useState(true);
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const [alertId, setAlertId] = useState(true);
  const [id, setId] = useState("");
  const [dateRange, setDateRange] = useState({
    from: new Date(year, month - 1, day),
    to: new Date(year, month, day),
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setFirstSub(false);
    if (id.trim() === "") {
      setAlertId(false);
    } else {
      dateRange.from.setMinutes(
        dateRange.from.getMinutes() - dateRange.from.getTimezoneOffset()
      );
      dateRange.to.setMinutes(
        dateRange.to.getMinutes() - dateRange.to.getTimezoneOffset()
      );
      setUuid(id);
      setStart(dateRange.from.toISOString());
      setEnd(dateRange.to.toISOString());
    }
  };

  return (
    <Dialog open={modalOpen} onOpenChange={() => setId("")}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-start">
            Enter your personal id:
          </DialogTitle>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <label className="flex flex-col gap-1">
              <input
                value={id}
                onChange={(e) => {
                  setId(e.target.value);
                  setAlertId(true);
                }}
                className="border rounded-sm border-black ps-2 py-1 w-full placeholder:opacity-35 dark:border-accent"
                placeholder="Ex: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
                required
              />
            </label>
            <div className="flex flex-col gap-1">
              <h2 className="font-medium text-start">Select the date range</h2>
              <DatePickerWithRange date={dateRange} setDate={setDateRange} />
            </div>
            <Button
              type="submit"
              className="py-2 px-4 w-fit mt-2 flex justify-center items-center"
              disabled={!data && !error && !fistSup}
              variant="outline"
            >
              Submit
              {!data && !error && !fistSup && (
                <ReloadIcon className="ml-3 h-4 w-4 animate-spin" />
              )}
            </Button>
          </form>

          {!alertId && <p className="text-red-700">Please, insert user id!</p>}
          {error && <p className="text-red-700">{error?.response?.data}</p>}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
