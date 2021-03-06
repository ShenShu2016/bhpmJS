/*
 * @Author: Quennel
 * @Date: 2022-04-25 11:15:56
 * @LastEditTime: 2022-04-29 14:17:34
 * @LastEditors: 李佳修
 * @Description: 
 * 参数形式为
 *   const [alertStatus, setAlertStatus] = useState({
    isOpen: false,
    isSuccess: null,
    sentence: null,
  });
  用法：
  如果成功 setAlertStatus({ isOpen: true, isSuccess: true, sentence: "收藏成功" });
  如果失败 setAlertStatus({ isOpen: true, isSuccess: false, sentence: "收藏失败"});
  anchorOrigin: 显示位置
  导入：
  <SnackBar alertStatus={alertStatus}></SnackBar>
  
 * @FilePath: /bhpmJS/frontend/src/components/Snackbar.js
 * Quennel
 */
import { Alert, Snackbar } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeSnackBar, setSnackBar } from "../redux/slice/generalSlice";

const SnackBar = ({ alertStatus }) => {
  const dispatch = useDispatch();
  const snackBarStatus = useSelector((state) => state.general.snackBar);
  useEffect(() => {
    if (alertStatus.isOpen === true) dispatch(setSnackBar(alertStatus));
  }, [dispatch, alertStatus]);

  const anchorOrigin = {
    vertical: 'bottom',
    horizontal: 'left',
  }

  return (
    <Snackbar
      open={snackBarStatus.isOpen}
      autoHideDuration={3000}
      anchorOrigin={snackBarStatus.anchorOrigin || anchorOrigin}
      onClose={() =>
        snackBarStatus.isOpen &&
        dispatch(removeSnackBar({ ...snackBarStatus, isOpen: false }))
      }
    >
      <Alert
        onClose={() =>
          snackBarStatus.isOpen &&
          dispatch(removeSnackBar({ ...snackBarStatus, isOpen: false }))
        }
        severity={snackBarStatus.isSuccess ? "success" : "error"}
        sx={{ width: "100%" }}
      >
        {snackBarStatus.sentence}
      </Alert>
    </Snackbar>
  );
};

export default SnackBar;
