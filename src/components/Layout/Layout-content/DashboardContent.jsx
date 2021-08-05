import { Box, Grid } from "@material-ui/core";
import { styled, alpha } from "@material-ui/core/styles";
import { dataList } from "./data";

const BoxWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  background: "white",
  padding: "9px 0px 19px 0px",
  borderRadius: "24px",
}));
const BoxIcon = styled("p")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "0px 11px 0px 11px",
  borderRadius: "18px",
  border: "1px solid #F2F1FE",
  marginLeft: "20px",
}));
const BoxContent = styled("div")(({ theme }) => ({
  margin: "0px 0px 0px 20px",
}));

const DashboardContent = () => {
  return (
    <div>
      <Grid container alignItems="stretch" spacing={3}>
        {dataList.map((data) => (
          <Grid key={data.id} item xs={12} sm={12} md={3}>
            <Box>
              <BoxWrapper>
                <BoxIcon>
                  <p>{data.icon}</p>
                </BoxIcon>
                <BoxContent>
                  <p style={{ fontSize: "14px" }}>{data.title}</p>
                  <h2 style={{ color: "#663399" }}>{data.point}</h2>
                </BoxContent>
              </BoxWrapper>
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default DashboardContent;
