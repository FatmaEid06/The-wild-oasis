import styled from "styled-components";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  return (
    <StyledDashboardLayout>
      <div>Statitsc</div>
      <div>Statitsc1</div>
      <div>Statitsc2</div>
      <div>Statitsc3</div>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
