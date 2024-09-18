import DashboardBox from "@/components/DashboardBox";
import {
  useGetKpisQuery,
  useGetProductsQuery,
  useGetTransactionsQuery,
} from "@/state/api";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";

const Row3 = () => {
  const { data: productData } = useGetProductsQuery();
  const { data: kpiData } = useGetKpisQuery();
  const { data: transactionData } = useGetTransactionsQuery();
  console.log("transactionData", transactionData);
  return (
    <>
      {/* GridArea G  */}
      <DashboardBox gridArea="g"></DashboardBox>
      {/* GridArea H  */}
      <DashboardBox gridArea="h"></DashboardBox>
      {/* GridArea I  */}
      <DashboardBox gridArea="i"></DashboardBox>
      {/* GridArea J  */}
      <DashboardBox gridArea="j"></DashboardBox>
    </>
  );
};

export default Row3;
