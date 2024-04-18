import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FaArrowDown } from "react-icons/fa";
import Profile from "../avatars/Profile";
import { updates } from "@/constants";

const TableSection = () => {
  // Function to extract initials from name
  const getInitials = (name) => {
    const names = name.split(" ");
    if (names.length >= 2) {
      return names[0].charAt(0) + names[names.length - 1].charAt(0);
    } else if (names.length === 1) {
      return names[0].charAt(0);
    } else {
      return "";
    }
  };

  return (
    <>
      <main>
        <section>
          <Table>
            <TableCaption>A list of your recent updates.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="">Request</TableHead>
                <TableHead className="">Submitters</TableHead>
                <TableHead className="">Viewers</TableHead>
                <TableHead className="flex items-center gap-2 text-right">
                  Last updated at
                  <FaArrowDown size={10} />
                </TableHead>
                <TableHead className="">Status</TableHead>
                <TableHead className="text-center">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {updates.map((update, index) => (
                <TableRow key={index}>
                  <TableCell className="">{update.request}</TableCell>
                  <TableCell className="flex gap-2 items-center mt-2">
                    <Profile>{getInitials(update.submitters)}</Profile>
                    {update.submitters}
                  </TableCell>
                  <TableCell className="">
                    <Profile variant="custom">
                      {getInitials(update.viewers)}
                    </Profile>
                    {update.viewers}
                  </TableCell>
                  <TableCell className="">{update.lastUpdated}</TableCell>
                  <TableCell className="pl-4">{update.status}</TableCell>
                  <TableCell className="text-center">...</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </section>
      </main>
    </>
  );
};

export default TableSection;
