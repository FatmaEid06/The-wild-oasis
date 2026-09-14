import styled from "styled-components";
import { useRecenetBookings } from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import { useRecenetStays } from "./useRecentStays";
import Stats from "./Stats";
import { UseCabins } from "../cabins/UseCabins";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { isLoading: isLoading1, bookings } = useRecenetBookings();
  const {
    isLoading: isLoading2,
    stays,
    confirmedStays,
    numDays,
  } = useRecenetStays();
  const { isLoading: isLoading3, cabins } = UseCabins();

  if (isLoading1 || isLoading2 || isLoading3) return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confiremedStays={confirmedStays}
        numDays={numDays}
        cabinCount={cabins.length}
      />
      <div>Statitsc1</div>
      <div>Statitsc2</div>
      <div>Statitsc3</div>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
