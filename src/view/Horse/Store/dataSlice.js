// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { apiGetAllUnit,apipostUnit,apiputUnit } from "../../../services/UnitService";

// export const getUnit = createAsyncThunk(
//   "unit/data/getUnit",
//   async (data) => {
//     const response = await apiGetAllUnit(data);
//     return response.data;
//   }
// );
// export const postUnit = createAsyncThunk(
//   "unit/data/postUnit",
//   async (data) => {
//     const response = await apipostUnit(data);
//     return response;
//   }
// );
// export const putUnit = createAsyncThunk(
//   "unit/data/putUnit",
//   async (data) => {
//     const response = await apiputUnit(data);
//     return response;
//   }
// );

// export const initialTableData = {
//   total: 0,
//   pageIndex: 1,
//   pageSize: 10,
//   query: "",
//   sort: {
//     order: "",
//     key: "",
//   },
// };

// export const initialFilterData = {
//   name: "",
//   category: ["bags", "cloths", "devices", "shoes", "watches"],
//   status: [0, 1, 2],
//   productStatus: 0,
// };

// const dataSlice = createSlice({
//   name: "UnitList/data",
//   initialState: {
//     loading: false,
//     unitList: [],
//     tableData: initialTableData,
//     filterData: initialFilterData,
//   },
//   reducers: {
//     updateProductList: (state, action) => {
//       state.branchList = action.payload;
//     },
//     setTableData: (state, action) => {
//       state.tableData = action.payload;
//     },
//     setFilterData: (state, action) => {
//       state.filterData = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(getUnit.fulfilled, (state, action) => {
//         state.loading = false;
//         state.unitList = action.payload;
//       })
//       .addCase(getUnit.pending, (state, action) => {
//         state.loading = true;
//       })
//       .addCase(getUnit.rejected, (state, action) => {
//         state.loading = false;
//       })
//       .addCase(postUnit.fulfilled, (state, action) => {})
//       .addCase(putUnit.fulfilled, (state, action) => {});
//   },
// });

// export const { updateProductList, setTableData, setFilterData } =
//   dataSlice.actions;

// export default dataSlice.reducer;
